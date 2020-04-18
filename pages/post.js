import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const Post = (props) => {
  const { post } = props;
  return (
    <Layout>
      <div className="container">
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">{post.title}</div>
          <div className="card-body">
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
Post.getInitialProps = async (context) => {
  const postId = context.query.id;
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const result = await post.json();

  return {
    post: result,
  };
};

export default Post;
