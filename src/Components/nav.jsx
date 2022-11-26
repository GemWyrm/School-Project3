// I removed this import from App.js since it's not needed there anymore
// And added it here where it's used
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">About</Link> | <Link to="/todos">Checklist</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

// export the component here so it can be imported in App.js where it is used.
export default Nav;
