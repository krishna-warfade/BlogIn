import { Link } from 'react-router-dom'; //for routing

const Navbar = ({toggleTheme, theme}) => {
    return ( 
        <div className="navbar">
            <h1 style={{
                textAlign: "left",
                fontSize: "2.5rem",
                fontWeight: "bold"
            }}>BlogIn</h1>
            <div className="links">
                <Link to="/" style={{
                    color:"white",
                    backgroundColor: "#35cbf1",
                    borderRadius: "30% 10%",
                    padding: "10px 20px"
                }}>Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#35cbf1",
                    borderRadius: "10% 30%",
                    padding: "10px 20px"
                }}>New Blog</Link>
                <button 
                    onClick={toggleTheme}
                    style={{
                        marginLeft: "15px",
                        backgroundColor: "transparent",
                        border: "2px solid #35cbf1",
                        color: "#35cbf1",
                        borderRadius: "8px",
                        padding: "8px 12px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
            </div>
        </div>
     );
}
 
export default Navbar;