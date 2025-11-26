// src/app/components/TodoItem.jsx
"use client";

import React from 'react';

function TodoItem({ task, onDelete, isCompleted }) {
  if (!task) {
    console.error("TodoItem received an invalid task object:", task);
    return null;
  }
  // const textStyle = {
  //   textDecoration: todo.completed ? 'line-through' : 'none',//タスクをタップすると線が引かれる
  //   color: todo.completed ? '#888' : '#333', // 完了時に色をグレーに変更
  //   flexGrow: 1, // テキストがスペースを占有することで削除が一定幅置いて配置される
  //   paddingRight: '10px',
  //   cursor: 'pointer',
  // };

  // アイテム全体のスタイル
  // const itemStyle = {
  //   display: '', // 横並びにする
  //   justifyContent: '', // 両端に寄せる
  //   alignItems: 'center',
  //   padding: '10px',
  //   backgroundColor: 'gray',
  //   marginBottom: '5px',
  // };

  // // 削除ボタンのスタイル（CSSファイルがない場合、これもインラインで設定可能）
  // const buttonStyle = {
  //   backgroundColor: '#0553fcff',
  //   color: 'white',
  //   border: 'none',
  //   padding: '5px 10px',
  //   borderRadius: '4px',
  //   cursor: 'pointer',
  //   flexShrink: 0, // 縮まない
  // };
const buttonStyle = {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '3px',
    borderRadius: '4px',
    cursor: 'pointer',
    flexShrink: 0,
    marginLeft: '10px' // テキストとの間隔をあける
  };
  return (
    <div className={`todo-item ${task.Completed ? 'completed' : ''}`}>
      <input
        type='checkbox'
        checked={task.Completed} //checkboxの状態をタスク完了状態と連動させる
        onClick={() => isCompleted(task.id)} //クリックしたら完了状態になる
        className='task-checkbox'
      />
      <span className='todo-text'>
        {task.text} 
      </span>
      <button onClick={() => onDelete(task.id)} style={buttonStyle}>削除</button>
    </div>
  );
}
export default TodoItem;