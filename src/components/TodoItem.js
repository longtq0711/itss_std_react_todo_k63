/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
// import {useState} from 'react';

function TodoItem({item, index, onCheck}) {
  return (
    <label className="panel-block">
        <input type="checkbox" checked={item.done} onChange={() => onCheck(index)} />
      <span 
        className={item.done ? 'has-text-grey-light' : ''}
      >
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem;