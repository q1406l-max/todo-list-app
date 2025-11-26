// src/app/components/TodoForm.jsx
"use client";

import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (input.trim() === '') return; 

    addTask(input); 
    setInput(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="新しいタスクを入力"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"/>
      <button type="submit" className="todo-button">追加</button>
    </form>
  );
}

export default TodoForm;