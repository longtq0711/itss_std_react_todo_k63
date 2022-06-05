import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  // const [items, putItems] = React.useState([
  //     /* テストコード 開始 */
  //   { key: getKey(), text: '日本語の宿題', done: true },
  //   { key: getKey(), text: 'reactを勉強する', done: false },
  //   { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  // ]);
  const [items, putItems, clearItems] = useStorage([]);

  // const [tab,setTabs] = useState("全て");
  // const itemTab = () => {
  //     const tabItem = items.filter((item) => {
  //         if (tab =   
  

  const [filter, setFilter] = useState(0);

  let itemRender = items;

  const onChange = (e) => {
    if(e.key === 'Enter'){
      const newItem = { 
        key: getKey(), 
        text: e.target.value, 
        done: false 
      }
      items.push(newItem);
      putItems([...items]);
    }
  }

  const filterTodo = (filter) => {
    setFilter(filter);
  }

  switch (filter) {
    case 1:
      // code
      itemRender = items.filter((item) => {
        return item.done === true;
      })
      break;
    case -1:
      itemRender = items.filter((item) => {
        return item.done === false;
      })
      break;
    default:
      // code
  }
  const handleCheck = (key) => {
    const newItems= [...items];
    newItems[key].done = !newItems[key].done;
    putItems(newItems);
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <label>
        <input className="input" type="text" onKeyDown={(e) => onChange(e)}></input>
      </label>
      <Filter onFilterTodo={filterTodo}/>
      {itemRender.map((item,index) => (
        <TodoItem key={item.key} item={item} index={index} onCheck={handleCheck} />
      ))}
      <div className="panel-block">
        {itemRender.length} items
      </div>
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={clearItems}>
           全てのToDoを削除
         </button>
      </div>
    </div>
  );
}

export default Todo;