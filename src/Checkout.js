import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket}] = useStateValue();

    return (

        <div className="checkout">
            <img className="checkout__ad" src="https://bloximages.chicago2.vip.townnews.com/journaltimes.com/content/tncms/assets/v3/classifieds/5/4d/54d97033-a0bc-5c34-b950-f7ca5d0bc0a3/5f36ee2015fd5.preview.jpg?resize=1200%2C364" alt=""/>
        {basket?.length === 0 ? (
            <div>
                <h2>Your Shopping Basket is empty</h2>
                <p>You have no items in your basket. To buy one or more items, click
                    "Add to basket" next to the item.
                </p>
            </div>
        ) : (
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {/* List out all of the checkout products */}
                {basket.map(item => (
                    <CheckoutProduct 
                        item={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        )}
        </div>
    );
}

export default Checkout;
