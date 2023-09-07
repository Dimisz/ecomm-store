import { useState, useEffect } from "react";
import { Product } from "./models/product";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const addProduct = () => {
    const newProduct = { 
      id: products.length + 1,
      name: 'new product',
      description: 'some description',
      price: products.length * 100,
      pictureUrl: '',
      brand: 'None',
      quantityInStock: 100
    };
    setProducts((previousProducts) => {
      return [...previousProducts, newProduct];
    });
  }

  const renderedProducts = products.map((product) => {
    return(
      <li key={product.id}>
        {product.name} - ${product.price}
      </li>
    );
  });

  return (
    <div className="app">
     <h1>E KOMM</h1>
     <ul>
      {renderedProducts}
     </ul>
     <button onClick={addProduct}>Add product</button>
    </div>
  )
}

export default App
