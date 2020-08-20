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
            <div className="home__row">
                <Product 
                    id="1245563"
                    title="Echo (3ª geração) - Smart Speaker"
                    price={99.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91R2j03lCvL._AC_SL1500_.jpg"
                />
                 <Product 
                    id="121425"
                    title="Lava Louças Electrolux LV10X Inox 10 Serviços - 110V"
                    price={1000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51OQnVH6EyL._AC_SL1000_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="1245413"
                    title="Smart TV LED PRO 55'' Ultra HD 4K LG 55UM761"
                    price={599.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61pBK9XmMTL._AC_SL1000_.jpg"
                />
                 <Product 
                    id="121163"
                    title="Console PlayStation 4 Mega Pack 12 - God Of War, Gran Turismo, Days Gone"
                    price={399.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61Izj9dmRBL._AC_SL1000_.jpg"
                />
                 <Product 
                    id="124660"
                    title="Console Xbox One S - 1 TB e 2 Controles - Xbox One"
                    price={399.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61BSAmygDRL._AC_SL1000_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="1444254"
                    title="Monitor Alienware para Jogos, Dell, AW2518HF-Free-Sync, 24.5"
                    price={999.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91hLUer2ETL._AC_SL1500_.jpg"
                />
            </div>
            {/* Product */}

        </div>
    );
}

export default Home;
