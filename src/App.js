import React, { Component } from "react";
import "./App.css";
import Product from "./Product";



class App extends Component {

  componentDidMount(){
    
  }

  render() {    
    return (
      <div className="App">
        <Product name="main-product" />  
        <Product name="offer" />  
      </div>      
    );
  }
}

export default App;
