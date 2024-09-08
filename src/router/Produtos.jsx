import React from 'react';
import '../CSS/Produto.css';

const productsData = [
    {
        id: 1,
        name: 'CAMISA 1 MANCHESTER UNITED 23/24',
        description: '★ 4.1/5(162)',
        price: 'R$ 199,99',
        image: 'https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F48094316%2F-csa-verm-adidas-man-united-home-ma-2xl-3g1.jpg%3Fv%3D638271133314170000',
    },
    {
        id: 2,
        name: 'Bola de Basquete R100 T7 Tarmak',
        description: '★ 4.6/5(238)',
        price: 'R$ 39,99',
        image: 'https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F2371650%2Fbola-basquete-r100-t72.jpg%3Fv%3D636983764487730000',
    },
    {
        id: 3,
        name: 'Nadadeira de Natação Topfin Comprida',
        description: '★ 4.3/5(7)',
        price: 'R$ 249,99',
        image: 'https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F2325336%2Ftop-fins-long-900-b-uk-4-55---eu-37-391.jpg%3Fv%3D636905836424930000',
    },
    {
        id: 4,
        name: 'Casaco Masculino de Vela Sailing',
        description: '★ 4.0/5(163)',
        price: 'R$ 269,99',
        image: 'https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F111722239%2Fcasaco-impermeavel-de-vela-casaco-de-chuva-sailing-100-homem-azul-branco-8.jpg%3Fv%3D638430892159270000',
    },
    {
        id: 5,
        name: 'Bicicleta Elétrica Aro 29 E-200 Btwin',
        description: '★ 5.0/5(3)',
        price: 'R$ 7.999,99',
        image: 'https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F48972413%2F--b-twin-e-200-m-g1.jpg%3Fv%3D638276337813200000',
    },
    {
        id: 6,
        name: 'Chuteira de Futebol Viralto II Kipsta',
        description: '★ 4.3/5(142)',
        price: 'R$ 449,99',
        image: 'https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F4988429%2Fshoes-viralto-iii-mg-ss-uk-105---eu-45-411.jpg%3Fv%3D637732067597130000',
    },
    {
        id: 7,
        name: 'Skate Simulador de Surf Hyper 3',
        description: '★ 4.2/5(28)',
        price: 'R$ 349,90',
        image: 'https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F142510532%2F17125919762402.jpg%3Fv%3D638538229782200000',
    },
    {
        id: 8,
        name: 'Tênis de Corrida Ultraboost 23 Adidas',
        description: '★ 4.7/5(2184)',
        price: 'R$ 799,99',
        image: 'https://decathlonstore.vtexassets.com/unsafe/628x628/center/middle/https%3A%2F%2Fdecathlonpro.vtexassets.com%2Farquivos%2Fids%2F117345647%2F-tn-adidas-ultraboost-light-uk-7-eu41-unica-39-br1.jpg%3Fv%3D638455160870970000',
    }
];

const Products = () => {
    return (
        <section className="products-section">
            <div className="products-container">
                <h1>Nossos Produtos</h1>
                <div className="products-grid">
                    {productsData.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">{product.price}</p>
                            <button className="product-button">Comprar</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
