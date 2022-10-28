import "./DeleteButton.css";
import { ReactComponent as DeleteIcon } from "./trash.svg";
import DateTimeInfo from "./DateTimeInfo";

const DeleteButton = ({ items, handleDelete, id, handelChecking }) => {
  return (
    <div className="container-header">
      <DateTimeInfo data={items.find((item) => item.id === id).timeStamp} />
      <div className="delete-container">
        <div className="icon" onClick={(e) => handelChecking(e, id)}>
          {items.find((item) => item.id === id).done ? "✔️" : "❌"}
        </div>
        <div className="icon" onClick={(e) => handleDelete(e, id)}>
          <DeleteIcon />
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
