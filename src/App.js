import React, { Component } from 'react';
import Header from './Header';
import CardArea from './CardArea';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ideas: []
    };

    this.addIdea = this.addIdea.bind(this);
    this.removeIdea = this.removeIdea.bind(this);
  }

  addIdea(idea) {
    const newIdea = { id: Date.now(), ...idea }
    const ideas = [...this.state.ideas, newIdea]

    this.setState({ ideas });
  }

  removeIdea(id) {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id);

    this.setState({ ideas: filteredIdeas })
  }

  render() {
    return (
      <div className="App">
        <Header addIdea={this.addIdea} />
        <CardArea ideas={this.state.ideas} removeIdea={this.removeIdea} />
      </div>
    );
  }
}

export default App;
