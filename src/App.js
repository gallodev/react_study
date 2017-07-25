import React, { Component } from 'react';
import './App.css';


const my_product = {
                    'type':'relógio',
                    'color' : 'branco',
                    'branch' : 'g-shock',
                    'price' : '300,00',                    
                     'image' : {
                       'src' : 'https://s-media-cache-ak0.pinimg.com/736x/31/92/e8/3192e86b3e4eb565513a06e7cffaad48--casio-g-shock-casio-watch.jpg',
                       'title' : 'Relógio g-shock'
                     }                     
                    };


class Product extends Component {
  render(){      
      return <div className="product-box">
        <ul>
          <li className="product-pic">
            <img width="300" height="250" src={my_product.image.src} title={my_product.image.title} className="image-responsive" alt="Imagem do produto">
            </img>
           </li>
           <li>              
              Meu produto é um {my_product.type} {my_product.color} da {my_product.branch} !!
              }
           </li>
           <li>
              Seu preço é de <b>{my_product.price}</b>
           </li>
        </ul>
      </div>
      
  };
}


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
