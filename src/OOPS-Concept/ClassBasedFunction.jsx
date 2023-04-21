import React, { Component } from 'react';

class ClassBasedFunction extends Component {
  // fill method
 state = {
  items: new Array(1).fill(alert("check the console when you press submit button")),
  // For Form 
  name: '',
  email: ''
};

  fillForm = () => {
    this.setState({ name: 'suzan', email: 'suzan@gmail.com' });
  }


  handleClick = (index) => {
    const items = [...this.state.items];
    items[index] = 'clicked';
    this.setState({ items });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g. submit it to a server
    console.log('Submitted:', this.state);
    
    
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        {this.state.items.map((item, index) => (
          <button key={index} onClick={() => this.handleClick(index)}>
            {item || 'Click me'}
          </button>
          
        ))}

        {/* submit method  */}
         <center>
          <h2 className='display-3 mb-4 text-primary'>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label className='text-danger fs-4'>
            Name:&nbsp;
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <br/><br/>
          <label className='text-danger fs-4'>
            Email:&nbsp;
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <br/><br/>
          
          <button  className='btn btn-danger' onClick={this.fillForm}>Fill form</button>&nbsp;
          <button type="submit" className='btn btn-primary'>Submit</button> 
        </form>
        
      </center>
      </>




    );
  }
}

export default ClassBasedFunction;
