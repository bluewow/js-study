import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-r from-[#153677] to-[#4e085f] w-full min-h-screen p-[10px]">
      <div className="w-full max-w-[540px] bg-white pt-[40px] px-[30px] py-[70px] rounded-[10px]">
        <div className="flex items-center mb-[20px]">
          <h1 className="text-2xl font-bold">To-Do List</h1>
          <img
            className="w-[30px] ml-2"
            src="/images/icon.png"
            alt="todo-icon"
          ></img>
        </div>
        <div className="flex items-center justify-between bg-[#edeef0] rounded-[30px] text-[14px] pl-[20px]">
          <input
            className="bg-transparent border-none outline-none p-[14px]"
            placeholder="Add your text"
          ></input>
          <button className="bg-[#ff5945] rounded-[40px] px-[50px] py-[16px] text-white">
            Add
          </button>
        </div>
        <ul>
          <li className="flex items-center justify-between w-full my-4 p-[14px]">
            <img
              className="h-[27px] w-[28px]"
              src="/images/unchecked.png"
              alt="unchecked"
            ></img>
            <p className="ml-4 flex-1">fe</p>
            <FontAwesomeIcon icon={faX} />
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
