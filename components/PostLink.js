import Link from "next/link";

const PostLink = ({ id, title }) => {
  return (
    <Link as={`/p/${title}-${id}`} href={`/post?id=${id}`}>
      <a>{title}</a>
    </Link>
  );
};

export default PostLink;
