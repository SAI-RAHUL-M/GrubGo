import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <strong>Items</strong>
          <strong>Title</strong>
          <strong>Price</strong>
          <strong>Quantity</strong>
          <strong>Total Price</strong>
          <strong>Remove</strong>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} ₹</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]} ₹</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() > 0 ? (getTotalCartAmount() > 150 ? 0 : 45) : ""}</p>
            </div>
            <hr />


            <div className="cart-total-details">
              <p>Total</p>
              <p>
                {getTotalCartAmount() > 0
                  ? (getTotalCartAmount() > 150 ? getTotalCartAmount() : getTotalCartAmount() + 45)
                  : ""}
              </p>
            </div>

          </div>

          <button onClick={() => navigate('/order')}>Proceed to Checkout</button>
        </div>
        {/* <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='The Code' />
              <button>Submit</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Cart
