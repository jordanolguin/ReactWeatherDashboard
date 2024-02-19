import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./CitySearch.module.css";

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
    <Form onSubmit={handleSubmit} className={styles.searchForm}>
      <Form.Group controlId="cityInput">
        <Form.Label className={styles.searchLabel}>City:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter city name"
          value={input}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className={styles.searchButton}>
        Get Weather
      </Button>
    </Form>
  );
};

export default CitySearch;
