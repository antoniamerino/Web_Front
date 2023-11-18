import "./styles.css"
import LogoutButton from "../../Logout";
import AuthCheck from "../../auth/AuthCheck";

// ref https://www.youtube.com/watch?v=SLfhMt5OUPI

function Navbar() {

  function displayLoginOrLogout() {
	if (AuthCheck()) {
	  return (
		<li><LogoutButton /></li>
	  );
	} else {
	  return (
		<li><a href="/login">Login</a></li>
	  );
	}
  }

  return (
	<nav className="navbar">
		<a href="/" className="site-title">WINK ;)</a>
		<ul className="nav__links">
			<li><a href="/">Home</a></li>
			<li><a href="/feed">Feed</a></li>
			<li><a href="/instructions">About</a></li>
			<li><a href="/user">User</a></li>
			{displayLoginOrLogout()}
		</ul>
	</nav>
  )
}

export default Navbar;