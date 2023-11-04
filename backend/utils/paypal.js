import dotenv from 'dotenv';
dotenv.config();
const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET, PAYPAL_API_URL } = process.env;

/**
 * Generate an OAuth 2.0 access token for authenticating with PayPal REST APIs.
 * @see https://developer.paypal.com/api/rest/authentication/
 */
// const generateAccessToken = async () => {

async function getPayPalAccessToken() {

  if (!PAYPAL_CLIENT_ID || !PAYPAL_APP_SECRET) {
    throw new Error("MISSING_API_CREDENTIALS");
  }
  const auth = Buffer.from(
    PAYPAL_CLIENT_ID + ":" + PAYPAL_APP_SECRET,
  ).toString("base64");

  const response = await fetch(`${PAYPAL_API_URL}/v1/oauth2/token`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  const data = await handleResponse(response);
  return data.access_token;
};

/**
 * Capture payment for an order
 * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
 */
export async function capturePayment(orderId) {
  const accessToken = await generateAccessToken();
  const url = `${PAYPAL_API_URL}/v2/checkout/orders/${orderId}/capture`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response);
}


/**
 * Generate a client token
 * @see https://developer.paypal.com/docs/checkout/advanced/integrate/#link-sampleclienttokenrequest
 */
export async function generateClientToken() {
  const accessToken = await generateAccessToken();
  const response = await fetch(`${base}/v1/identity/generate-token`, {
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Accept-Language": "en_US",
      "Content-Type": "application/json",
    },
  });
  console.log("response", response.status);
  const jsonData = await handleResponse(response);
  return jsonData.client_token;
}

async function handleResponse(response) {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }

  const errorMessage = await response.text();
  throw new Error(errorMessage);
}

/**
 * Checks if a PayPal transaction is new by comparing the transaction ID with existing orders in the database.
 *
 * @param {Mongoose.Model} orderModel - The Mongoose model for the orders in the database.
 * @param {string} paypalTransactionId - The PayPal transaction ID to be checked.
 * @returns {Promise<boolean>} Returns true if it is a new transaction (i.e., the transaction ID does not exist in the database), false otherwise.
 * @throws {Error} If there's an error in querying the database.
 *
 */
export async function checkIfNewTransaction(orderModel, paypalTransactionId) {
  try {
    // Find all documents where Order.paymentResult.id is the same as the id passed paypalTransactionId

    const orders = await orderModel.find({
      'paymentResult.id': paypalTransactionId,
    });
    console.log("orderModel :" , orderModel, ", paypalTransactionId :",paypalTransactionId);

    // If there are no such orders, then it's a new transaction.
    return orders.length === 0;
  } catch (err) {
    console.error(err);
  }
}

/**
 * Verifies a PayPal payment by making a request to the PayPal API.
 * @see {@link https://developer.paypal.com/docs/api/orders/v2/#orders_get}
 *
 * @param {string} paypalTransactionId - The PayPal transaction ID to be verified.
 * @returns {Promise<Object>} An object with properties 'verified' indicating if the payment is completed and 'value' indicating the payment amount.
 * @throws {Error} If the request is not successful.
 *
 */
export async function verifyPayPalPayment(paypalTransactionId) {

  const accessToken = await getPayPalAccessToken();
  const paypalResponse = await fetch(
    `${PAYPAL_API_URL}/v2/checkout/orders/${paypalTransactionId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!paypalResponse.ok) throw new Error('Failed to verify payment');

  const paypalData = await paypalResponse.json();
  return {
    verified: paypalData.status === 'COMPLETED',
    value: paypalData.purchase_units[0].amount.value,
  };
}