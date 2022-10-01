import React from "react";
import { getInitialData, showFormattedDate } from "../utils/data";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    const newTodos = [];
    for (let i = 0; i < getInitialData().length; i++) {
      const { id, title, body, isDone } = getInitialData()[i];
      newTodos.push({
        id: id,
        title: title,
        createdAt: showFormattedDate(getInitialData()[i].createdAt),
        body: body,
        isDone: isDone,
      });
    }

    this.state = {
      todos: newTodos,
      currentTodos: newTodos,
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onDoneEventHandler = this.onDoneEventHandler.bind(this);
    this.onAddTodoHandler = this.onAddTodoHandler.bind(this);
    this.onSearchEngine = this.onSearchEngine.bind(this);
  }

  onDeleteEventHandler(id) {
    const todos = this.state.todos;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos.splice([i], 1);
      }
    }
    this.setState({ todos: todos, currentTodos: todos });
  }

  onDoneEventHandler(id) {
    const todos = this.state.todos;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].isDone = !todos[i].isDone;
      }
    }
    this.setState({ todos: todos, currentTodos: todos });
  }

  onAddTodoHandler({ title, body }) {
    const todos = this.state.todos;
    todos.push({
      id: +new Date(),
      title: title,
      body: body,
      createdAt: showFormattedDate(new Date()),
      isDone: false,
    });
    this.setState({ todos: todos, currentTodos: todos });
  }

  onSearchEngine(char) {
    if (char === "") {
      this.setState({ currentTodos: this.state.todos });
    }

    const tokens = char
      .toLowerCase()
      .split(" ")
      .filter((token) => token.trim() !== "");

    if (tokens.length) {
      let searchTermRegex = new RegExp(tokens.join("|"), "gim");
      const filteredTodos = this.state.todos.filter((todo) => {
        let todoString = "";
        todoString += todo.title.toString().toLowerCase().trim() + " ";
        return todoString.match(searchTermRegex);
      });
      console.log(filteredTodos);
      this.setState({ currentTodos: filteredTodos });
    }
  }

  render() {
    return (
      <div>
        <TodoHeader searchEngine={this.onSearchEngine} />
        <TodoBody addTodo={this.onAddTodoHandler} todos={this.state.todos} onDelete={this.onDeleteEventHandler} onDone={this.onDoneEventHandler} />
      </div>
    );
  }
}

export default TodoApp;
