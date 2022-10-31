import DeleteButton from "./DeleteButton";
import "./Home.css";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Home = () => {
  const { items, setItems, searchKeyword, setCurrPage } =
    useContext(DataContext);

  const handleShowFull = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) item.truncated = !item.truncated;
      return item;
    });

    setItems(newItems);
  };

  setCurrPage("Home");

  return (
    <main id="home">
      {items.map((item) => {
        if (item.todo.toLowerCase().includes(searchKeyword.toLowerCase())) {
          return (
            <div className="item-container" key={item.id}>
              <DeleteButton id={item.id} />

              <p
                className="item-text"
                onClick={(e) => {
                  handleShowFull(item.id);
                }}
              >
                {item.todo.length < 73 || !item.truncated
                  ? item.todo
                  : `${item.todo.slice(0, 73)} ...`}
              </p>
            </div>
          );
        }
        return <></>;
      })}

      {items.length === 0 && <p>Nothing to do ...</p>}
    </main>
  );
};

export default Home;
