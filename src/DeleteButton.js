import "./DeleteButton.css";
import { ReactComponent as DeleteIcon } from "./trash.svg";
import { ReactComponent as EditIcon } from "./pencil.svg";
import DateTimeInfo from "./DateTimeInfo";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const DeleteButton = ({ id }) => {
  const { items, setItems, setEditId } = useContext(DataContext);

  const handelChecking = (event, id) => {
    const newItems = items.map((item) => {
      if (item.id === id) item.done = !item.done;
      return item;
    });

    setItems(newItems);
  };

  const handleDelete = (event, id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div className="container-header">
      <DateTimeInfo data={items.find((item) => item.id === id).timeStamp} />
      <div className="delete-container">
        <div className="icon" onClick={(e) => handelChecking(e, id)}>
          {items.find((item) => item.id === id).done ? "✔️" : "❌"}
        </div>

        <Link to="/Edit">
          <div
            className="icon"
            onClick={() => {
              setEditId(id);
            }}
          >
            <EditIcon />
          </div>
        </Link>

        <div className="icon" onClick={(e) => handleDelete(e, id)}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
