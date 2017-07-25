import React, { Component } from "react";
import "./App.css";
import Product from "./Product";



class App extends Component {

  componentDidMount(){
    alert("Hello React World !!");    
  }

  render() {    
    return (
      <div className="App">
        <Product />  
      </div>      
    );
  }
}

export default App;
