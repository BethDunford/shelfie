import React, { Component } from 'react';
import Product from '../Product/Product';
// import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            inventory: []
        }
    }

// deleteTheProduct(){
//     axios.delete

// }

    render() {
        return (
            <div>
                {/* {this.props.inventory.map((element, index) => { */}
                    return (
                        <div>
                            <Product inventory={this.state.inventory}/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Dashboard;