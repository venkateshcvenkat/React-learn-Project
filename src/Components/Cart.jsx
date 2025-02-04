import React from 'react'
import './Cart.css'
function Cart({mycart}) {
  return (
    <>
        <div id='cart_main'>
           <div id='cart-main_sub1'>
               <h1>cart page</h1>
             </div>
            <div id='cart-main_sub2'>
               {mycart.length ===0?(<div> <h3>your cart is Empty Now</h3></div>):
                (<div>{mycart.map((items)=>(
                 <div>
                   <h1>Product : {items.name}</h1>
                   <img src={items.source} id='cart_img'/>
                  </div>

                ))}</div>)
               }
              </div>
            <div id='cart_backgroundimg'>
                <img src="https://pngfile.net/download/TZneWOHZC9lFoPDbZmkioVESyOh8j6p0nB7LYZQcD7IBqf2HMMB1Islqe26AjOoOpvqODNzXU3pTbFzonzAD0X1KitGypHPfhKpygP6leYnhmRrg4UP61A6gJnDi7JFTtAPK0ZoGPfLxHqzYyR8JZPsAMGIroqkOyKAH5Auwg8UKfUWB57b0Alvi9VbsbargrtkxqaNa/small" alt="" />
             </div>
        </div>
    </>
  )
}

export default Cart
