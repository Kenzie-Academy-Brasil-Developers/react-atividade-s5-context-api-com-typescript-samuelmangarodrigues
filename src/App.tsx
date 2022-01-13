import "./App.css";
import CardList from "./components/CardList";
import CartList from "./components/CartList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardList />
        <CartList />
      </header>
    </div>
  );
}

export default App;
