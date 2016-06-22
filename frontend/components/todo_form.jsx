const React = require('react');
const TodoStore = require("../todo_store.js");

const TodoForm = React.createClass({
  getInitialState(){
    return {title: '', body: '', done: false};
  },

  updateTitle(event){
    this.setState({title: event.currentTarget.value});
  },

  updateBody(event){
    this.setState({body: event.currentTarget.value});
  },

  handleSubmit(event) {
    event.preventDefault();
    TodoStore.create({title: this.state.title, body: this.state.body});
    this.setState({title: "", body: ""});
  },

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label id="title">Title: </label>
        <input type="text"
               value={this.state.title.toString()}
               id="title"
               onChange={this.updateTitle}/>
        <br></br>
        <label id="body">Body: </label>
        <input type="text"
               value={this.state.body.toString()}
               id="body"
               onChange={this.updateBody}/>
        <input type="submit" value="submit"/>
      </form>
    );
  }
});

module.exports = TodoForm;
