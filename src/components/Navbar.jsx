import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = "navbar">
            <div className = "logo">
                <h1>Cactus blog</h1>
            </div>
            <div className = "links">
                <Link to="/">Home</Link>
                <Link to="/create" style = {styling}>New blog</Link>
            </div>
        </nav>
    );
}


//Inline styling
const styling = {
    color: "white",
    background: "red",
    borderRadius: "8px",
    padding: "6px"
}

export default Navbar
