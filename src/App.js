import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
// import 'reset.css';
import './App.css';

//Components
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    }
    this.updateInventory = this.updateInventory.bind(this);
  };

componentDidMount(){
  axios.get("/api/inventory").then(response => {
    this.setState({inventory: response.data})
  })
}

updateInventory(newInventory){
  this.setState({inventory: newInventory});
}

  render () {
    return (
      <div className="App">
        <div className="Components">
          <Dashboard inventory={this.state.inventory} updateInventory={this.updateInventory}/>
            <div>
              <Product />
            </div>
          <Form updateInventory={this.updateInventory}/>
          <Header />
        </div>
      </div>
    )
  }
}

export default App;
