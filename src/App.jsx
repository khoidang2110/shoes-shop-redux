// components
import ProductItem from "./components/ProductItem";

import { dataProducts } from "./data";

// components
import CartList from "./components/CartList";

export default function App() {

  return (
    <div className="mainContent">
      <div className="card">
        <div className="cardTop">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
          />
        </div>

        <div className="cardTitle">Our Products</div>

        <div className="cardBody">
          {dataProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* cart */}
      <CartList />
    </div>
  );
}
