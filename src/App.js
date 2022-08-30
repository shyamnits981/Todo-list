
import './App.css';
import { useState } from "react";
import List from './List';

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);


  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };



  const addItemList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem("");
  };



  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="input-wrapper">
            <input value={currentItem} onChange={onChangeHandler} />
            <button onClick={addItemList}>+</button>
          </div>
          <List itemList={itemList} updateItemList = {updateItemList} />
        </div>
      </header>


    </div>
  );
}

export default App;
