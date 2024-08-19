import { Link } from "react-router-dom";

function Navigator() {

    return (
        <nav className="navigator">
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/commands"><h2>Commands</h2></Link>
        </nav>
    )
}

export default Navigator;