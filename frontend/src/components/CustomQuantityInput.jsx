import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const CustomQuantityInput = ({ value, stockQty, onChange }) => {
    
  const [qty, setQty] = useState(value);

  const handleInputChange = (e) => {

    const inputQty = parseInt(e.target.value, 10);
    if (!isNaN(inputQty) && inputQty >= 1 && inputQty <= stockQty) {
      setQty(inputQty);
      onChange(inputQty);
    }
  };

  return (
    <Form.Control
      type="number"
      min="1"
      max={stockQty}
      value={qty}
      onChange={handleInputChange}
    />
  );
};

export default CustomQuantityInput;