import React, { Component } from 'react';
import Axios from 'axios';

class Product extends Component {
    constructor() {
        super();
        this.state = {
            inventory: []
        }
    }
    render() {
        return (
            <div>
                {this.props.inventory.map((element, index) => {
                    return(
                        <div key={index}>
                            <h1>{element.name}</h1>
                            <h2>{element.price}</h2>
                            <img alt="inventory_image"
                            className="inventory_image"
                            src={element.imgUrl} />
                            <button
                                className="product-button"
                                onClick={() => {
                                    Axios.delete('/api/product')
                                }} />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Product;