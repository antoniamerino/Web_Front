import "./styles.css"
import LogoutButton from "../../Logout";
import UserCheck from "../../protected/UserCheck";

// ref https://www.youtube.com/watch?v=SLfhMt5OUPI

function Navbar() {

//   const { user } = UserCheck();
//   var logButton = <a href="/login">Login</a>;
//   if (user != null) {
// 	//   show logout button with html
// 	logButton = <LogoutButton />
//   };

  return (
	<nav className="navbar">
		<a href="/" className="site-title">WINK ;)</a>
		<ul className="nav__links">
			<li><a href="/">Home</a></li>
			<li><a href="/feed">Feed</a></li>
			<li><a href="/instructions">About</a></li>
			<li><a href="/user">User</a></li>
			{/* {logButton} */}
			<li><a href="/login">Login</a></li>
		</ul>
	</nav>
  )
}

export default Navbar;