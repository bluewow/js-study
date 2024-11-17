import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const inputTextChange = (e) => {
    setText(e.target.value);
  };

  const addButtonClick = () => {
    if (text === "") return;
    if (items.filter((item) => item.text === text).length > 0) return;

    setItems([...items, { text, isDone: false }]);
    setText("");
  };

  const deleteButtonClick = (selectedItem) => () => {
    setItems(items.filter((item) => item.text !== selectedItem.text));
  };

  const toggleButtonClick = (selectedItem) => () => {
    setItems(
      items.map((item) => {
        if (item.text === selectedItem.text) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };

  return (
    <main className="flex flex-col items-center bg-gradient-to-r from-[#153677] to-[#4e085f] w-full min-h-screen p-[10px]">
      <div className="w-full max-w-[540px] bg-white pt-[40px] px-[30px] py-[70px] rounded-[10px]">
        <Header />
        <InputField
          text={text}
          inputTextChange={inputTextChange}
          addButtonClick={addButtonClick}
        />

        <ItemList
          items={items}
          toggleButtonClick={toggleButtonClick}
          deleteButtonClick={deleteButtonClick}
        />
      </div>
    </main>
  );
}

const Header = () => {
  return (
    <div className="flex items-center mb-[20px]">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <img
        className="w-[30px] ml-2"
        src="/images/icon.png"
        alt="todo-icon"
      ></img>
    </div>
  );
};

const InputField = (props) => {
  return (
    <div className="flex items-center justify-between bg-[#edeef0] rounded-[30px] text-[14px] pl-[20px]">
      <input
        className="bg-transparent border-none outline-none p-[14px] w-full"
        placeholder="Add your text"
        onChange={props.inputTextChange}
        value={props.text}
      ></input>
      <button
        className="bg-[#ff5945] rounded-[40px] px-[50px] py-[16px] text-white font-bold"
        onClick={props.addButtonClick}
      >
        Add
      </button>
    </div>
  );
};

const ItemList = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return (
          <li
            className="flex items-center justify-between w-full my-8"
            key={item.text}
          >
            <img
              className="h-[27px] w-[28px]"
              src={
                item.isDone ? "/images/checked.png" : "/images/unchecked.png"
              }
              alt="unchecked"
              onClick={props.toggleButtonClick(item)}
            ></img>
            <p className={`ml-4 flex-1 ${item.isDone ? "line-through" : ""}`}>
              {item.text}
            </p>
            <FontAwesomeIcon
              className="px-4"
              icon={faX}
              onClick={props.deleteButtonClick(item)}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default App;
