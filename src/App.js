import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Riyaz','Manna','Alongir','Salman','Shovo','Bappy']
  const products = [
    {name:'photoshop', price:'$90.99'},
    {name:'Illustrator',price:'$60.99'},
    {name:'PDF',price:'$06.99'},
    {name:'food',price:'$80.99'}, 
    {name:'apply',price:'$800.99'} 
  ]
  // const nayokName = nayoks.map(nayok => nayok);
  // console.log(nayokName);
  // const productNames = products.map(product => product.name)
  // console.log(productNames);
  return (
    <div className="App"> 
      <header className="App-header">
        <h1>I am a React Person</h1>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
            products.map(pd => <product product={pd}></product>)
          }
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Product name={products[3].name} price={products[3].price}></Product>
          <peron></peron>
      </header>
    </div>
  );
}
  
function Counter(){
  const [count, setCount] = useState(100);
  const handleIncrease = () => { setCount(count + 1);};
   return(
     <div>
       <h2>count:{count}</h2>
       <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
       <button onClick={() =>  setCount(count + 1)}>Increase</button>
     </div>
   )
}
function Users(){
   const [Users,setUsers] = useState([]);
 
  return(
     <div>
       <h3>Dynamic Users</h3>
     </div>
  )
}
function Product(props){

 const productStyle={
   border:'1px solid gray',
   borderRadius:'5px',
   backgroundColor:'lightgray',
   height:'200px',
   width:'200px',
   margin:'10px',
   float:'left'

 }
 console.log(props);
  return(
    <div style={productStyle}>
     <h3>{props.name}</h3>
     <h5>{props.price}</h5>
     <button>Buy now</button>
    </div>
  )
}

 function Person(props){
   return(
     <div style={{border:'2px solid gold',margin: '10px',backgroundColor:'red', width:'400px',height:'300px' }}>
      <h3>My Name:{props.name}</h3>
      <p>My Profession:{props.job}</p>
     </div>
   )
 }

export default App;
