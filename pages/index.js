import Layout from "../components/Layout";

import fetch from "isomorphic-unfetch";

const index = (props) => {
  //   console.log("props", props);
  const { posts } = props;
  return (
    <Layout>
      <div>Hello world!</div>
      <div className="container">
        {posts.map((post) => (
          <div className="card text-white bg-primary mb-3" key={post.id}>
            <div className="card-header">{post.title}</div>
            <div className="card-body">
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

index.getInitialProps = async (context) => {
  //   console.log("pr", context);
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await data.json();
  return {
    posts: result,
  };
};

export default index;
