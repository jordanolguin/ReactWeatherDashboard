import Weather from "./components/Weather";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="p-3">
      <h1 className="text-center">Weather App</h1>
      <Weather />
    </Container>
  );
}

export default App;
