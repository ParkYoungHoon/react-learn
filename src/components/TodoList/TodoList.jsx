import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", text: "독서", status: "active" },
    { id: "2", text: "영어공부", status: "active" },
  ]);
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </section>
  );
}
