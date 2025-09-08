import "./style.css";
import { useState } from "react";
import { X } from "tabler-icons-react";
import { useEffect } from "react";
function Modal(props) {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (props.selectedPost !== null) {
      setUserId(props.selectedPost.userId);
      setTitle(props.selectedPost.title);
      setBody(props.selectedPost.body);
    }
  }, [props.selectedPost]);

  const handleSubmit = () => {
    let newErrors = {};

    if (!userId) newErrors.userId = "User ID is required.";
    if (!title.trim()) newErrors.title = "Post Title is required.";
    if (!body.trim()) newErrors.body = "Description cannot be empty.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // TODO: Dispatch to Redux or API
      props.onCancel();
      props.editPost(userId, title, body);

      // clear fields
      setUserId("");
      setTitle("");
      setBody("");
    }
  };

  return (
    <div className= "addCommentModal">
      <div className="addCommentHeader">
        <button
          className="closeAddComment"
          onClick={() => props.onCancel()}
        >
          <X size={22} />
        </button>
        <h3 className="addCommentHeading">
          {props.selectedPost === null ? "Add Post" : "Edit Post"}
        </h3>
      </div>
      <div className="addCommentBody">
        {/* Controlled form fields */}
        <div className="inputFieldContainerDiv">
          <label className="inputLabel">User ID</label>
          <input
            type="number"
            className="inputField"
            placeholder="Enter your User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          {errors.userId && <p className="error">{errors.userId}</p>}
        </div>
        <div className="inputFieldContainerDiv">
          <label className="inputLabel">Post Title</label>
          <input
            type="text"
            className="inputField"
            placeholder="Enter Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div className="textAreaContainerDiv">
          <label className="inputLabel">Description</label>
          <textarea
            className="commentInputBox"
            placeholder="Add a description..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          {errors.body && <p className="error">{errors.body}</p>}
        </div>

        <button className="submitCommentBtn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Modal;
