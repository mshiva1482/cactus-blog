const Navbar = () => {
    return (
        <nav className = "navbar">
            <div className = "logo">
                <h1>Cactus blog</h1>
            </div>
            <div className = "links">
                <a href="/">Home</a>
                <a href="/" style = {styling}>New blog</a>
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
