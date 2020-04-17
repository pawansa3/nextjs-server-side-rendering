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
    </div>
  );
};

export default Nav;
