import Link from "next/link";

const PostLink = ({ id, title }) => {
  return (
      <Link href={`/posts?id=${id}`}>
        <a>{title}</a>
      </Link>
  );
};

export default PostLink;
