import { Button, ListGroup } from "react-bootstrap";
import styles from "./SearchHistory.module.css";

const SearchHistory = ({ history, onCitySelect, onClearHistory }) => {
  return (
    <div className={styles.historyContainer}>
      <h5 className={styles.historyTitle}>Search History</h5>
      <ListGroup>
        {history.map((city, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() => onCitySelect(city)}
            className={styles.historyItem}
          >
            {city}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button
        variant="danger"
        onClick={onClearHistory}
        className={styles.clearHistoryButton}
      >
        Clear History
      </Button>
    </div>
  );
};

export default SearchHistory;
