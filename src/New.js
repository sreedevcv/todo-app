import { useNavigate } from "react-router-dom";
import "./New.css";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const New = () => {
  const navigate = useNavigate();
  const { setCurrPage, items, setItems } = useContext(DataContext);
  setCurrPage("New");

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

  return (
    <main id="new">
      <form
        onSubmit={(e) => {
          navigate("/");
          handleSubmit(e);
        }}
      >
        <textarea
          name="newTodo"
          required={true}
          id="new-todo"
          autoFocus
          spellCheck={false}
        />
        <br />
        <button type="submit" id="submit-button">
          Add Todo
        </button>
      </form>
    </main>
  );
};

export default New;
