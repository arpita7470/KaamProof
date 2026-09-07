function Navbar(){
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-icon">🛡️</span>
                <span>KaamProof</span>
            </div>
            <div className="location"></div>
            <div className="nav-links">
             <a href="#">Home</a>
              <a href="#">Services</a>
               <a href="#">How It Works</a>
              <a href="#">Become a Professionals</a>
              <a href="#">Help</a>
            </div>

            <div className="nav-buttons">
             <button className="login-btn">Login</button>
             <button className="Signup-btn">Join /Sign Up</button>

                </div>
</nav>
    );
}
export default Navbar;