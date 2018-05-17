import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.props.addIdea(this.state)

    this.setState({
      title: '',
      body: ''
    });
  };

  render() {
    return (
      <div className="Header">
        <h1 className="header__h1--a">idea<span className="header__h1--b">box</span></h1>
        <form
          className="header__form"
          onSubmit={this.handleSubmit}
        >
          <input
            className="header__title"
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
            placeholder="Title"
          />
          <input
            className="header__body"
            type="text"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
            placeholder="Body"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default Header;
