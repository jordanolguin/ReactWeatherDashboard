import Weather from "./components/Weather/Weather";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container className="p-3">
      <h1 className="text-center">Weather App</h1>
      <Weather />
    </Container>
  );
}

export default App;
