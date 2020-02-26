import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = {
    name: "",
    email: ""
  };

  handleChange = (e)=>{
    console.log(e.target.name, e.target.value)
    this.setState({[e.target.name]:e.target.value})
  }
  onSubmit = async(e)=>{
    e.preventDefault();
    console.log(e.target.file.files[0])
    const body = new FormData();
    body.append('image',e.target.file.files[0] );
    body.append('name',this.state.name );
    body.append('email',this.state.email );
    const response = await fetch('http://localhost:8080/createContact', 
    {
      method:"POST", 
      body

    });
    console.log(response);
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input name="name" value={this.state.name} onChange={(e)=>{this.handleChange(e)}}/>
          <input name="email" value={this.state.email} onChange={(e)=>{this.handleChange(e)}}/>
          <input type="file" name="file" />
          <input type="submit" value="Submit" />
        </form>
        <img src="http://localhost:8080/images/image-1582703467084-Natural-Leaves-Background.jpeg"/>
      </div>
    );
  }
}

export default App;
