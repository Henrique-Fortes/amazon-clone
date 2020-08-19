import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image" 
                src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920" 
                alt="" 
            />
            {/* Product id, title, price, rating, image */}
            <Product 
                id="1245563"
                title="Echo (3ª geração) - Smart Speaker"
                price={499.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/91R2j03lCvL._AC_SL1500_.jpg"
            />
            {/* Product */}

        </div>
    );
}

export default Home;
