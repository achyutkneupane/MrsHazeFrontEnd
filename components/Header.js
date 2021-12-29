import Link from "next/link";

const Header = () => {
  return (
    <div className="h-24 w-screen justify-center flex items-center border-b">
      <Link href="/">
        <a className="logoText text-7xl text-black">Mrs. Haze</a>
      </Link>
    </div>
  );
};
export default Header;
