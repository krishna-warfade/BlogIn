const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>BlogIn</h1>
            <div className="links">
                <a href="/" style={{
                    color:"white",
                    backgroundColor: "#35cbf1",
                    borderRadius: "30% 10%"
                }}>Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#35cbf1",
                    borderRadius: "10% 30%"
                }}>New Blog</a>
            </div>
        </div>
     );
}
 
export default Navbar;