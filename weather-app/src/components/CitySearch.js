import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CitySearch = ({ onCitySubmit }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCitySubmit(input);
    setInput("");
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Group controlId="cityInput">
        <Form.Label>City:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter city name"
          value={input}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Get Weather
      </Button>
    </Form>
  );
};

export default CitySearch;
