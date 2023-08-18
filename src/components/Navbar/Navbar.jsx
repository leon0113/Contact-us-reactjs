import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='container'>
            <div className="logo">
                <img src="/images/logo.png" alt="Logo" />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;