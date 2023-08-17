/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

// actions
import { addCart } from "../redux/app.actions";

function ProductItem({ product }) {
  const carts = useSelector(state => state.app.carts);
  const dispatch = useDispatch();
  const isAdded = carts.some(cart => cart.id === product.id);
 
  function _handleAddCart() {
    if(isAdded) return;
    console.log("product", product)
    dispatch(addCart(product))
    console.log("carts",carts)
    console.log(isAdded)
  }

  return (
    <div className="shopItem">
      <div
        className="shopItem_image"
        style={{ backgroundColor: product.color }}
      >
        <img
          alt=""
          src={product.image}
        />
      </div>
      <div className="shopItem_name">{product.name}</div>
      <div className="shopItem_description">
        {product.description}
      </div>
      <div className="shopItem_bottom">
        <div className="shopItem_price">${product.price}</div>
        <div 
          className="shopItem_button" 
          // onClick={() => isAdded ? null : _handleAddCart()}
          onClick={_handleAddCart}
          style={{ 
            opacity: isAdded ? 0.5 : 1,
            cursor: isAdded ? 'not-allowed' : 'pointer',
          }} 
        >
          <p>{isAdded ? 'Added' : 'ADD TO CART'}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem