import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );

  const [searchKeyword, setSearchKeyword] = useState("");
  const [currPage, setCurrPage] = useState("Home");
  const [editId, setEditId] = useState(0);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <DataContext.Provider
      value={{
        currPage,
        setCurrPage,
        items,
        setItems,
        searchKeyword,
        setSearchKeyword,
        editId,
        setEditId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
