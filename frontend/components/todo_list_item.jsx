const React = require('react');

const TodoListItem = React.createClass({
  render(){
    return(
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.body}</div>
      </div>
    );
  }
});

module.exports = TodoListItem;
