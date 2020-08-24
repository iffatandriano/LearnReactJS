import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component {

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://img-global.cpcdn.com/recipes/7fa7fdc21d48af83/1200x630cq70/photo.jpg" alt="product_image" />
                </div>
                <p className="product-title">Ayam Bakar + Nasi Uduk</p>
                <p className="product-price">Rp 34.000</p>
                <Counter />
            </div>
        )
    }
}

export default CardProduct;