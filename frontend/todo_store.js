let _todos = {};
let _callbacks = [];

const TodoStore = {
  addChangedHandler(callback){
    _callbacks.push(callback);
  },

  removeChangedHandler(callback) {
    let idx = _callbacks.indexOf(callback);
    if (idx === -1) {return;}
    _callbacks.splice(idx, 1);
  },

  changed() {
    _callbacks.map((callback) => {
      callback();
    });
  },

  all() {
    return Object.assign({}, _todos);
  },

  fetch() {
    $.ajax ({
      url: "api/todos",
      dataType: "JSON",
      success: (todos) => {
        todos.forEach((el) => {
          _todos[el.id] = el;
          }
        )
        this.changed();
        }
      }
    );},

  create(todoObj) {
    $.ajax ({
      method: "POST",
      url: "api/todos",
      dataType: "JSON",
      data: {todo: todoObj},
      success: (dataRet) => {
        let id = dataRet.id;
        _todos[id] = dataRet;
        this.changed();
        }
      }
    );
  },

  destroy(id) {
    if (_todos[id] === undefined){
      $.ajax ({
        method: "DELETE",
        url: "api/todos/:id",
        dataType: "JSON",
        data: id,
        success: (dataRet) => {
          _todos.splice(dataRet.id, 1);
          this.changed();
          }
        }
      );
    }
  },


  toggleId(id) {
    const todo = _todos[id];
    const done = !todo.done;

    $.ajax ({
      method: "PATCH",
      url: "api/todos/:id",
      dataType: "JSON",
      data: id,
      success: (dataRet) => {
          todo.done = done;
          this.changed();
        }
      }
    );
  }



};

module.exports = TodoStore;
