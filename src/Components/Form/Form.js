import React, { Component } from 'react';
// import axios from 'axios';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            price: "",
            imgUrl: ""
        };
        this.updateName = this.updateName.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.updateImageURL = this.updateImageURL.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

updateName(e){
    this.setState({name: e.target.value});
}

updatePrice(e){
    this.setState({price: e.target.value});
}

updateImageURL(e){
    this.setState({imgUrl: e.target.value});
}

handleClick(e){
    const { name, price, imgUrl } = this.state;
    let body = {
        name,
        price,
        imgUrl
    };
}

    render() {
        return(
            <div>
                <input onChange={this.updateName} placeholder="Name" />
                <input onChange={this.updatePrice} placeholder="Price" />
                <input onChange={this.updateImageURL} placeholder="ImageURL" />
                <button onClick={}>Cancel</button>
                <button onClick={this.handleClick}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;