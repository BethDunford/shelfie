import React from 'react';
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
    this.state = []
  };
  render () {
    return (
      <div className="App">
        <div className="Components">
          <Dashboard />
            <div>
              <Product />
            </div>
          <Form />
          <Header />
        </div>
      </div>
    )
  }
}

export default App;
