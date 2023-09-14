import "./styles.css"

// ref https://www.youtube.com/watch?v=SLfhMt5OUPI

function Navbar() {
  return (
	<nav className="nav">
		<a href="/" className="site-title">FavoRapido</a>
		<ul className="nav__links">
			<li><a href="/">Home</a></li>
			<li><a href="/app">About</a></li>
			<li><a href="/user">User</a></li>
		</ul>
	</nav>
  )
}

export default Navbar;
