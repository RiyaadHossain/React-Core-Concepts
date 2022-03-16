import { Component, useState } from "react";
import "./App.css";

function App() {
  const items = [
    { item: 'Phone', price: 5000 },
    { item: 'Laptop', price: 95000 },
    { item: 'Tablet', price: 15000 }
  ];
  return (
  
    <div className="App">
      {items.map(item => <h3>{item.item} - {item.price}tk</h3>)}
      <h1>Hello, React </h1>
      <div className="card">
        <h2>Riyad Hossain</h2>
        <p className="lead">
          He is Slave of Allah. He want to contribute for Islam learning Web
          Developing.
        </p>
      </div>
      <Compo></Compo>
      <div className="card">
        <People name="Riyad Hossain"></People>
        <Friend user="Riyad" phone="01703790978"></Friend>
      </div>
      <Counter></Counter>
    </div>
  );
}

// Component Basic
function Compo() {
  return <h1>Yay, New Component 😄</h1>;
}

// Component 1
function People(props) {
  return (
    <div>
      <h2>User Name: {props.name}</h2>
    </div>
  );
}

export default App;

// Component 2
function Friend(props) {
  // console.log(props);
  return (
    <div className="container">
      <h3>Name: {props.user}</h3>
      <p>phone: {props.phone}</p>
    </div>
  );
}


// Component 3 
function Counter() {
  const [count, setCount] = useState(0)
  const handleIncrease = () => setCount(count+1)
  const handleDecrease = () => setCount(count-1)
  return (<div>
    <h1>Count: { count}</h1>
    <button className="btn" style={{marginRight:"15px"}} onClick={handleIncrease}>Increase</button>
    <button className="btn" onClick={handleDecrease}>Decrease</button>
  </div>)
}