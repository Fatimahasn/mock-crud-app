import "./home.css";
import { connect, useSelector, useDispatch } from "react-redux";
import Card from "../components/ui/card/index";
import { useEffect, useState } from "react";
import ConfirmationModal from "../components/ui/modal/confirmationModal";
import AddPostModal from "../components/ui/modal/addPostModal";
import Backdrop from "../components/ui/Backdrop";
import { addPost, updatePost, deletePost } from "../store/actions/action";
const Home = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  let dispatch = useDispatch();
  const value = useSelector((state) => state.posts.posts);
  console.log({ value });

  useEffect(() => {
    dispatch({ type: "GET_POSTS" });
  }, [dispatch]);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
    setIsDelete(false);
  }

  function closeDeleteModal() {
    setIsDelete(false);
  }
  const editPost = (userId, title, body) => {
    if (selectedPost === null) {
      console.log("Adding new post");
      props.addPost({
        userId,
        title,
        body,
      });
    } else {
      props.updatePost({
        userId,
        title,
        body,
        id: selectedPost.id,
      });
    }
    setSelectedPost(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="postsContainer">
        <div>
          <button className="addPostBtn" onClick={() => setModalIsOpen(true)}>
            + Add New Post
          </button>
          {value.map((user) => (
              <Card
                key={user.id}
                userDetails={user}
                setSelectedPost={setSelectedPost}
                openModalHandler={openModalHandler}
                setIsDelete={setIsDelete}
              />
            ))}
        </div>
      </div>
       <div className="paginationBar"></div>
      {modalIsOpen && (
        <AddPostModal
          onCancel={closeModalHandler}
          selectedPost={selectedPost}
          editPost={editPost}
        />
      )}
      {(isDelete || modalIsOpen) && <Backdrop onClick={closeModalHandler} />}
      {isDelete && (
        <div className="confirmationModal">
          <ConfirmationModal
            title="Delete Post"
            body="Are you sure you want to delete this post?"
            onCancel={closeDeleteModal}
            onConfirm={() => {
              props.deletePost(selectedPost);
              closeDeleteModal();
              setSelectedPost(null);
            }}
          />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    posts: store.posts,
  };
};
export default connect(mapStateToProps, { addPost, updatePost, deletePost })(
  Home
);
