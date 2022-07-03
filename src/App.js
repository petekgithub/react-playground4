import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(result => setProducts(result))
  }, []);


  return (
    <div className="App">
      <h2>Heyyy!</h2>
      {products.map(product => (
          <li>{product.category}</li>
      ))}
    </div>
  );
}

export default App;
