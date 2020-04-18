import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <Link href="/">
        <a className="navigation">Home</a>
      </Link>
      <Link href="/about">
        <a className="navigation">About</a>
      </Link>
      <style jsx>
        {`
          .navigation {
            color: white;
            padding: 10px;
            display: inline-block;
            margin: 10px;
            background: black;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default Nav;
