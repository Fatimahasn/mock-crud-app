import "./style.css";
import { X } from "tabler-icons-react";
function ConfirmationModal(props) {
  return (
    <div className="modal">
      <button className="closeIcon" onClick={props.onCancel}>
        <X size={24} />
      </button>
      <h2 className="lbl">Confirmation</h2>

      <div className="modalBody">
        <p>{props.body}</p>
        <button className="btn" onClick={() => props.onConfirm()}>
          Confirm
        </button>
        <button className="btn btn--alt" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
