// src/app/page.jsx

"use client"; 

// 🚨 【重要】componentsフォルダが'src/app/'の下にある場合、パスはこうなります
import TodoList from './components/TodoList'; 

export default function Home() {
  return (
    <main>
      <TodoList />
    </main>
  );
}