/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import {useState} from 'react';

function TodoItem({item}) {
  const [state, setState] = useState({
    isCheck: false
  })

  function toggleCheck() {
    setState({isCheck: !state.isCheck});
    console.log(state.isCheck);
  }
  return (
    <label className="panel-block">
        <input type="checkbox"         onChange={toggleCheck} />
      <span 
        className={state.isCheck ? 'has-text-grey-light' : ''}
      >
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem;