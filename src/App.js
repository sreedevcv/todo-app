import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";
import New from "./New";
import Header from "./Header";
import Nav from "./Nav";

function App() {
  const temp = [
    {
      id: 1,
      timeStamp: "Fri Jan 16 2022 21:28:34 GMT+0530 (India Standard Time)",
      done: false,
      todo: "Buy vegetables and fruits from the store, return before sundown",
      truncated: true,
    },
    {
      id: 2,
      timeStamp: "Wed Dec 22 2022 21:28:34 GMT+0530 (India Standard Time)",
      done: true,
      todo: "We'll use the filter() and startsWith() methods (just two Javascript methods)",
      truncated: true,
    },
    {
      id: 3,
      timeStamp: "Thu Oct 06 2022 21:28:34 GMT+0530 (India Standard Time)",
      done: false,
      todo: "to find out users whose names match the text entered in the search box.",
      truncated: true,
    },
    {
      id: 4,
      timeStamp: "Sat Mar 10 2022 21:28:34 GMT+0530 (India Standard Time)",
      done: true,
      todo: "Point, you should get a better understanding and feel more comfortable w",
      truncated: true,
    },
  ];

  const [items, setItems] = useState(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currPage, setCurrPage] = useState("Home");

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const entry = {};
    entry.id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    entry.timeStamp = new Date().toString();
    entry.done = false;
    entry.truncated = true;
    entry.todo = event.target.newTodo.value;
    const allTodos = [...items, entry];
    setItems(allTodos);
  };

  const handleDelete = (event, id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handelChecking = (event, id) => {
    const newItems = items.map((item) => {
      if (item.id === id) item.done = !item.done;
      return item;
    });

    setItems(newItems);
  };

  const handleShowFull = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) item.truncated = !item.truncated;
      return item;
    });

    setItems(newItems);
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <Header setSearchKeyword={setSearchKeyword} currPage={currPage} />
      {/* <Nav setSearchKeyword={setSearchKeyword} currPage={currPage} /> */}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              handleDelete={handleDelete}
              handelChecking={handelChecking}
              searchKeyword={searchKeyword}
              handleShowFull={handleShowFull}
              setCurrPage={setCurrPage}
            />
          }
        />
        <Route
          path="/New"
          element={
            <New handleSubmit={handleSubmit} setCurrPage={setCurrPage} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
