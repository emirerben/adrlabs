import Link from "next/link";

const navBarStyle = {
    backgroundColor: "red",
    color: "black",
    width: "100%",
    height: "453px"
};

const NavBar = () => (
<div className="NavBar" style={navBarStyle}>
   <Link href="/posts/first-post">Navcar</Link>
   ANAN
</div>
);

export default NavBar;