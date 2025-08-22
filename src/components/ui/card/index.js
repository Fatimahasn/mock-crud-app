import "./style.css";
import { Link } from "react-router-dom";
import { Edit, Trash} from "tabler-icons-react";
function Card(props) {
  const { id, title, body } = props.userDetails;
  console.log(title,body);
  return (
    <div className="card">
      <div className="cardHeader">
        <h2>
          <Link to={`/Post/${id}`}>{title}</Link>
        </h2>
        <div className="cardActions">
          <button
            className="iconBtn"
          >
            <Edit size={20} />
          </button>
          <button className="iconBtn" >
            <Trash size={20} />
          </button>
        </div>
      </div>

      <p>{body}</p>
    </div>
  );
}

export default Card;
