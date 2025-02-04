import React from 'react'
import './Main.css';
import Navigation from './Navigation';
import Product from './Product';
function Main({setCartItems}) {

    const product1 = {name:"Hoodie",source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeoeuNg_7Iks2fnk445x4nxJNimrKXs-I3LkJKT-TVkpuFqHFdVz45FSgG4kzlGJNlQs&usqp=CAU"}
    const product2 = {name:"Shirt",source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXswYGbx56qtcFycH5z-dDNbCGWsuqhmOofQ&s"}
    const addToCart = (value)=>{
      setCartItems((prevData)=>[...prevData,value])
    }
  return (
    <div>
        <div id ='Main_container'>
            <div id = 'products'>
              <Navigation/>
              <br/>
              <Product props ={product1} changeFunction={addToCart}/>
              <br/>
              <Product props ={product2} changeFunction={addToCart}/>
              <br/>
              <Product props ={product1} changeFunction={addToCart}/>
              <br/>
              <Product props ={product2} changeFunction={addToCart}/>
              <br/>
              <Product props ={product1} changeFunction={addToCart}/>
              <br/>
              <Product props ={product2} changeFunction={addToCart}/>
            </div>
            <div id ='main_image'>
             <img src="https://static.vecteezy.com/system/resources/previews/044/846/982/non_2x/beautiful-emotional-woman-enjoying-shopping-on-isolated-transparent-background-free-png.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Main
