import { Link } from 'react-router-dom'; //for routing

const Navbar = () => {
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
            </div>
        </div>
     );
}
 
export default Navbar;