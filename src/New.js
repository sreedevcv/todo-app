import { useNavigate } from "react-router-dom";
import "./New.css";

const New = ({ handleSubmit, setCurrPage }) => {
  const navigate = useNavigate();
  setCurrPage("New");

  return (
    <main id="new">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
          navigate("/");
        }}
      >
        <textarea
          name="newTodo"
          required={true}
          id="new-todo"
          autoFocus
          spellCheck={false}
        />
        <button type="submit" id="submit-button">
          Add Todo
        </button>
      </form>
    </main>
  );
};

export default New;
