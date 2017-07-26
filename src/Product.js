import React , {Component} from "react";
import my_product from "./database.json";


let product_label = "";

var get_product_label = function(template){

	switch (template){
		// template with offer tag
		case "offer":
			return <div className='offer-label'> Produto em Oferta !! </div>;
		break;
		// main page products without offer tag
		case "main-product":
			return <div className='main-label'> Produto em Destaque</div>;
		break;
		// default product templates
		default:

		break;
	}
	
}

class Product extends Component{



	constructor(props){
		super(props);	
	 	product_label = get_product_label(this.props.name);
	}


	render(){		
		return <div className="product-box">
				<h1>{product_label}</h1>
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

