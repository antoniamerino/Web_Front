import "./styles.css"

// ref https://www.youtube.com/watch?v=SLfhMt5OUPI

function Navbar() {
  return (
	<nav className="navbar">
		<a href="/" className="site-title">WINK ;)</a>
		<ul className="nav__links">
			<li><a href="/">Home</a></li>
			<li><a href="/feed">Feed</a></li>
			<li><a href="/instructions">About</a></li>
			<li><a href="/user">User</a></li>
		</ul>
	</nav>
  )
}

export default Navbar;