import DeleteButton from "./DeleteButton";
import "./Home.css";

const Home = ({
  items,
  handleDelete,
  handelChecking,
  searchKeyword,
  handleShowFull,
  setCurrPage,
}) => {
  setCurrPage("Home");

  return (
    <main id="home">
      {items.map((item) => {
        if (item.todo.toLowerCase().includes(searchKeyword.toLowerCase())) {
          return (
            <div className="item-container" key={item.id}>
              <DeleteButton
                items={items}
                handleDelete={handleDelete}
                id={item.id}
                handelChecking={handelChecking}
              />

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
