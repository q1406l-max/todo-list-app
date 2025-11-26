// src/app/components/TodoListApp.jsx
"use client";

import React, { useState, useCallback } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function TodoList() {

  const [tasks, setTasks] = useState([]);  // 状態管理: タスクのリストを保持する

  
  const addTask = useCallback((text) => {// タスクを追加する関数
    const newTask = {
      id: Date.now(), // 一意なIDとして現在時刻を使用
      text: text,
    　isCompleted: false, // 初期状態は未完了
    };
   
    setTasks((prevTasks) => [newTask, ...prevTasks]); // 現在のリストの先頭に新しいタスクを追加
  }, []); 

  const deleteTask = useCallback((id) => {// タスクを削除する関数
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));}, []);// 削除したいIDと一致しないタスクだけをフィルタリングして残す

  const isCompleted = useCallback((id) => {// 完了状態を切り替える関数
    setTasks((prevTasks) =>
      prevTasks.map((task) =>task.id === id ? { ...task, completed: !task.completed } : task)
    );}, []);

  return (
    <div className="task-list-app">
      <h1>To do list</h1>
      <TodoForm addTask={addTask} />
      <div className="task-list">
        {/* tasks配列をTodoItemコンポーネントとしてレンダリング */}
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            isCompleted={isCompleted}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;