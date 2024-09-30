import React from 'react';
import './Cart.css'; // Import the CSS file

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-notification">
        <div>
          <i className="fas fa-bell"></i>
          <span>“The Beginning Tee” has been added to your cart.</span>
        </div>
        <button>Continue shopping</button>
      </div>
      <div className='cart-detailsandcarttotal'>
        <div className='cart-itemsdetails'>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='cart-imageanddetails'>
                    <img
                      alt="4X Power Denim Pants - 36"
                      className="cart-product-image"
                      src="https://owr.life/wp-content/uploads/2024/04/wrpr-edit-69-600x900.jpg"
                    />
                    <div className='cart-cartProductDetails'>
                      <p>4X Power Denim Pants - 36</p>
                      <p>₹2,999.00</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="cart-quantity-control">
                    <button>-</button>
                    <input type="text" value="1" readOnly />
                    <button>+</button>
                  </div>
                </td>
                <td>₹2,999.00</td>
              </tr>
              <tr>
                <td>
                  <div className='cart-imageanddetails'>
                    <img
                      alt="The Beginning Tee - XL"
                      className="cart-product-image"
                      src="https://owr.life/wp-content/uploads/2024/04/wrpr-edit-69-600x900.jpg"
                    />
                    <div className='cart-cartProductDetails'>
                      <p>The Beginning Tee - XL</p>
                      <p>₹1,899.00</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="cart-quantity-control">
                    <button>-</button>
                    <input type="text" value="1" readOnly />
                    <button>+</button>
                  </div>
                </td>
                <td>₹1,899.00</td>
              </tr>
            </tbody>
          </table>
          <div className="cart-coupon">
            <input placeholder="Coupon code" type="text" />
            <button>Apply coupon</button>
            <button className="cart-update-cart">Update cart</button>
          </div>
        </div>
        <div className="cart-cart-totals">
          <h3>Cart totals</h3>
          <p>
            <span>Subtotal</span>
            <span>₹4,898.00</span>
          </p>
          <p>
            <span>Total</span>
            <span>₹4,898.00</span>
          </p>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
