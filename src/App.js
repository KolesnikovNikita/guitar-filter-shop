import React from "react";
import "./App.css";
import * as api from "./api";

function App() {
  const [filter, setFilter] = React.useState({
    brands: [],
    priceFrom: 0,
    priceTo: 0,
    class: [],
  });

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    api.fetchProducts(filter).then((res) => setProducts(res));
  }, [filter]);

  const handleChangeBrand = (target) => {
    if (filter.brands.indexOf(target.value) > -1) {
      setFilter({
        ...filter,
        brands: filter.brands.filter((el) => el != target.value),
      });
    } else {
      setFilter({
        ...filter,
        brands: filter.brands.concat(target.value),
      });
    }
  };

  const handleChangeClass = (target) => {
    if (filter.class.indexOf(target.value) > -1) {
      setFilter({
        ...filter,
        class: filter.class.filter((el) => el != target.value),
      });
    } else {
      setFilter({
        ...filter,
        class: filter.class.concat(target.value),
      });
    }
  };

  return (
    <div className="container">
      <div className="form">
        <form>
          <label htmlFor="fender">Fender</label>
          <input
            value="fender"
            type="checkbox"
            onChange={(e) => handleChangeBrand(e.target)}
            id="fender"
          />
          <br />
          <label htmlFor="gibson">Gibson</label>
          <input
            value="gibson"
            type="checkbox"
            id="gibson"
            onChange={(e) => handleChangeBrand(e.target)}
          />
          <br />
          <label htmlFor="epiphone">Epihone</label>
          <input
            value="epiphone"
            type="checkbox"
            id="epiphone"
            onChange={(e) => handleChangeBrand(e.target)}
          />
          <br />
          <label htmlFor="price">From</label>
          <input
            type="number"
            id="price"
            onChange={(e) => {
              setFilter({
                ...filter,
                priceFrom: e.target.value,
              });
            }}
          />
          <label htmlFor="price">To</label>
          <input
            type="number"
            id="price"
            onChange={(e) => {
              setFilter({
                ...filter,
                priceTo: e.target.value,
              });
            }}
          />
          <br />
          <br />
          <input
            type="checkbox"
            id="acoustic"
            value="acoustic"
            onChange={(e) => handleChangeClass(e.target)}
          />
          <label htmlFor="acoustic">Acoustic</label>
          <br />
          <input
            type="checkbox"
            id="electric"
            value="electric"
            onChange={(e) => handleChangeClass(e.target)}
          />
          <label htmlFor="electric">Electric</label>
        </form>
      </div>
      <div>
        {products.map((product) => (
          <div className="catalog">
            <div>
              <img src={product.image} />
            </div>
            <div>
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>Model: {product.type}</p>
              <p>Class: {product.class}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
