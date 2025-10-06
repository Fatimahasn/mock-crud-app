import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import "./postDetail.css";
import { Edit, Trash } from "tabler-icons-react";
import { useSelector, useDispatch } from "react-redux";
import ConfirmationModal from "../components/ui/modal/confirmationModal";
import Backdrop from "../components/ui/Backdrop";

const PostDetail = (props) => {
  const [isAddCommentOpen, setIsAddCommentOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();
  const loc = useLocation();
  const idToSearch = loc.pathname.split("/")[2];
  const post = props.posts.posts.find((user) => user.id == idToSearch);
  useEffect(() => {
    dispatch({ type: "GET_COMMENTS", payload: idToSearch });
  }, [idToSearch]);

  const comments = useSelector((state) => state.comments.selectedPostComments);
  const title = post?.title || "";
  const body = post?.body || "";
  function closeModalHandler() {
    setIsDelete(false);
  }
  return (
    <div className="commentContent">
      <div className="commentBody">
        <h2 className="contentTitle">
          Post {idToSearch}: {title}
        </h2>
        <p className="contentBody">{body}</p>
        <h3 className="contentHeading">Comments</h3>
        <ul className="commentslist">
          {comments &&
            comments.map((comment, idx) => (
              <li key={idx} className="commentItem">
                <div className="headerStyling">
                  <div>
                    <div className="commentHeader">
                      <span className="commentAuthor">
                        {comment.name}
                      </span>
                      <span className="commentEmail">
                        {comment.email}
                      </span>
                    </div>
                    <div className="commentBodyContent">{comment.body}</div>
                  </div>

                  <div className="cardActions">
                    <button
                      className="iconBtn"
                      onClick={() => {
                        setSelectedComment(comment);
                        setIsAddCommentOpen(true);
                      }}
                    >
                      <Edit size={20} />
                    </button>
                    <button
                      className="iconBtn"
                      onClick={() => {
                        setIsDelete(true);
                        setSelectedComment(comment);
                      }}
                    >
                      <Trash size={20} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          <button
            className="addCommentBtn"
            onClick={() => setIsAddCommentOpen(true)}
          >
            + Add New Comment
          </button>
        </ul>
      </div>
      {
      //isAddCommentOpen && (
        //<AddCommentModal
          //setIsAddCommentOpen={setIsAddCommentOpen}
          //postId={idToSearch}
          //selectedComment={selectedComment}
          //setSelectedComment={setSelectedComment}
        ///>)
        }
      {isDelete && (
        <ConfirmationModal
          title="Delete Comment"
          body="Are you sure you want to delete this comment?"
          onCancel={closeModalHandler}
          onConfirm={() => {
            closeModalHandler();
            setSelectedComment(null);
          }}
        />
      )}
      {isDelete && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    posts: store.posts,
  };
};
export default connect(mapStateToProps, {})(PostDetail);
