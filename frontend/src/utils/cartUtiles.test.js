// cartUtils.test.js
const { calculateTotalPrice } = require('../utils/cartUtils');

describe('calculateTotalPrice', () => {
  it('should calculate the total price correctly', () => {
    const cartItems = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 3 },
    ];
    const totalPrice = calculateTotalPrice(cartItems);
    expect(totalPrice).toBe(35);
  });
});