import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Edit = () => {
  const navigate = useNavigate();
  const { items, editId, setItems, setCurrPage } = useContext(DataContext);

  setCurrPage("Edit");
  const handleSubmit = (event) => {
    const newItems = items.map((item) => {
      if (item.id === editId) item.todo = event.target.newTodo.value;
      return item;
    });

    setItems(newItems);
  };

  return (
    <main id="edit-container">
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
          defaultValue={items.find((item) => item.id === editId).todo}
        ></textarea>
        <br />
        <button type="submit" id="submit-button">
          Edit Todo
        </button>
      </form>
    </main>
  );
};

export default Edit;
