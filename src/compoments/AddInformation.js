import React, { Component } from 'react';

class AddInformation extends Component{
  state={
    name: "",
    address: "",
    age: ""
  }

  handleOnChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleOnSubmit = (e) =>{
    e.preventDefault();
    this.props.addInformation(this.state);
    this.setState({
      name: "",
      address: "",
      age: ""
    })
  }

  render(){
    return(
      <div  className="container">
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleOnChange} value={this.state.name} required/>
          <label htmlFor="name">Address: </label>
          <input type="text" id="address" onChange={this.handleOnChange} value={this.state.address} required/>
          <label htmlFor="name">Age: </label>
          <input type="text" id="age" onChange={this.handleOnChange} value={this.state.age} required/>
          <button>Submit</button>
        </form>

        {/* <form onSubmit={this.handleOnSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input id="name" type="text" className="validate" onChange={this.handleOnChange} />
              <label className="active" htmlFor="name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="address" type="text" className="validate" onChange={this.handleOnChange} />
              <label className="active" htmlFor="name">Address</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="age" type="text" className="validate" onChange={this.handleOnChange} />
              <label className="active" htmlFor="name">Age</label>
            </div>
          </div>
          <div className='row'>
            <button>Submit</button>
          </div>
        </form> */}
        
      </div>
    )
  }
}

export default AddInformation;