import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Test = () => {
  const [isMale, setIsMale] = useState(true);

  const handleToggle = () => {
    setIsMale(!isMale);
  };

  return (
    <Form.Group>
    <Form.Label>Gender</Form.Label>
    <div>
      <div className="d-flex align-items-center">
        <Form.Check
               type="switch"
               id="femaleToggle"
                label="Female"
               checked={!isMale}
                onChange={handleToggle}
        />
      </div>
      <div className="d-flex align-items-center">
        <Form.Check
          type="switch"
          id="maleToggle"
          label="Male"
          checked={isMale}
          onChange={handleToggle}
        />
      </div>
    </div>
  </Form.Group>
);
};

export default Test;
