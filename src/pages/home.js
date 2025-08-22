import "./home.css";
import { connect, useSelector, useDispatch } from "react-redux";
import Card from "../components/ui/card/index";
import { useEffect } from "react";

const Home = (props) => {
  let dispatch = useDispatch();
  const value = useSelector((state) => state.posts.posts);
  console.log({value})

  useEffect(() => {
    dispatch({ type: "GET_POSTS" });
  }, [dispatch]);

  return (
    <div>
      <div className="postsContainer">
        <div>
          <button className="addPostBtn">+ Add New Post</button>
          {value && value.map((user) => (
            <Card key={user.id} userDetails={user} />
          ))}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    posts: store.posts,
  };
};
export default connect(mapStateToProps, {})(Home);
