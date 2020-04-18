import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <Link href="/">
        <a className="navbar">Home</a>
      </Link>
      <Link href="/about">
        <a className="navbar">About</a>
      </Link>
      <style jsx>
        {`
          .navbar {
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
