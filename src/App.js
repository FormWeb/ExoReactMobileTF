import logo from './logo.svg';
import './App.css';
import Welcome from './component/welcome/welcome';
import ProductList from './component/product-list/product-list';
import Counter from './component/counter/counter';
import Calculatrice from './component/calculatrice/calculatrice';

function App() {

  const products = [
    {id: 1, name: "Banane", price: 1, promo: true},
    {id: 2, name: "Pomme", price: 2, promo: false},
    {id: 3, name: "Cerise", price: 5, promo: false}
  ]

  return (
    <div className="App">
      {/* <h1>Exo 1</h1>
      <Welcome name="Pierre" age={85}></Welcome>
      <h1>Exo 2</h1>
      <ProductList products={products}></ProductList> */}
      <h1>Exo 3</h1>
      <Counter incrementation={5}></Counter>
      <h1>Exo 4</h1>
      <Calculatrice></Calculatrice>
    </div>
  );
}

export default App;
