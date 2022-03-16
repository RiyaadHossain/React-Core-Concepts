import { Component } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
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
