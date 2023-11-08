import React, { useState } from "react";


//create your first component
const Cart = (props) => {

    const [shopItems, setShopItems] = useState( parseInt( props.cant))
    const [numeroItems, setNumeroItems] = useState( 1)

    function agregar(){
        console.log('agregar hola')
        setShopItems( shopItems + numeroItems)
    }

    function sumar(){
        console.log('sumar')
        //numeroItems =  numeroItems +  1
        //setNumeroItems ===  numeroItems = 
        setNumeroItems(numeroItems +  1)
    }

    function restar(){
        console.log('sumar')
        //numeroItems =  numeroItems +  1
        //setNumeroItems ===  numeroItems = 
        //if( numero items -1 es igual. maypr que uno ){
        if( numeroItems  >= 2 ){
            setNumeroItems(numeroItems -  1)
        }        
    }

	return (
        <>
            <div className="text-center">
                <h4 className="text-center mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                    {shopItems}   
                </h4>			
            </div>

            <div className="card" style={{width: "18rem"}}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Aprende React</h5>
                    <p className="card-text">Libro aprende React , en este libro aprenderas sobre componenentes, props y hooks, especialmente el useState</p>
                    <button onClick={restar}>-</button>
                    <input type="number" value={numeroItems}  />
                    <button onClick={sumar}>+</button>
                    <a href="#" onClick={agregar} className="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>
            <a href="#" onClick={()=>{
                setNumeroItems(1)
                setShopItems(0)
            
            }} className="btn btn-danger">Limpiar carrito</a>

        </>		
	);
};

export default Cart;