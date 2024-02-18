import { Button, ListGroup } from "react-bootstrap";

const SearchHistory = ({ history, onCitySelect, onClearHistory }) => {
  return (
    <div>
      <h5>Search History</h5>
      <ListGroup>
        {history.map((city, index) => (
          <ListGroup.Item key={index} action onClick={() => onCitySelect(city)}>
            {city}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button variant="danger" onClick={onClearHistory}>
        Clear History
      </Button>
    </div>
  );
};

export default SearchHistory;
