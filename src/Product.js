import React , {Component} from "react";
import my_product from "./database.json";


class Product extends Component{
	render(){
		return <div className="product-box">
		        <ul>
		          <li className="product-pic">
		            <img src={my_product.image.src} title={my_product.image.title} className="image-responsive product-image" alt="Imagem do produto">
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
	}
}

export default Product;

