import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <h2 style={{ color: "white", marginBottom: 20 }}>
        What's the plan for Today
      </h2>
      <TodoList />
    </div>
  );
}

export default App;
