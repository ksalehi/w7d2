const React = require("react");
const TodoStore = require("../todo_store.js");
const TodoListItem = require('./todo_list_item');
const TodoForm = require('./todo_form.jsx');

const TodoList = React.createClass({
  getInitialState() {
    return {todos: TodoStore.all()};
  },
  componentDidMount(){
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },
  componentWillUnmount(){
    TodoStore.removeChangedHandler(this.todosChanged);
  },
  todosChanged(){
    this.setState({todos: TodoStore.all()});
  },
  render(){
    const todo_keys = Object.keys(this.state.todos);

    todo_keys.map((todo_key) => {
      return this.state.todos[todo_key];
      }
    );

    return (
      <div>
        {this.state.todos.map((todo) => {
          return (<li>{todo}</li>);
        }

        )}
        <TodoForm />
      </div>
    );
  }
});

module.exports = TodoList;
