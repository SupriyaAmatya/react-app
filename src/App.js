import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import uuid from "uuid";

import Informations from './compoments/Informations';
import AddInformation from './compoments/AddInformation';

class App extends Component{
  state={
    informations:[
      {name: 'Supriya', address: 'Shankhamul', age: 22, id: 1 }
    ],
    selectedItem:''
  }

  addInformation = (information) =>{
    information.id = uuid();
    let informations = [...this.state.informations, information];
    this.setState({
      informations: informations
    });
  }

  deleteInformation = (id) => {
    let informations = this.state.informations.filter(information => {
      return information.id !== id
    })
    this.setState({
      informations: informations
    })
  }

  // componentDidMount(){
  //   console.log("component mounted");
  // }

  // componentDidUpdate(prevProps, prevState){
  //   console.log('compnent updated');
  //   console.log(prevProps, prevState);
  // }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My First React App!</h1>
          <p>Welcome :)</p>
        </header>
        
        <section className="container">
          <AddInformation addInformation = {this.addInformation} />
          <Informations deleteInformation={ this.deleteInformation } informations={ this.state.informations } />
        </section>
        
        <footer>
          <p>React App 2020 | Supriya Amatya</p>
        </footer>
      </div>
    );
  }
  
}

export default App;
