import { Link } from "react-router-dom";
import "../CSS/Nav.css";
import logo from "../assets/logo.webp";

const Nav = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" className="imglogo" />
                <span>
                    <span className="highlight">S</span>ynthica
                    <span className="highlight">S</span>ports
                </span>
            </Link>
            
            <nav className="navbar">
                <Link to="/" className="link">Home</Link>
                <Link to="/produtos" className="link">Produtos</Link>
                <Link to="/sobre" className="link">Sobre</Link>
                <Link to="/contato" className="link">Contato</Link>
            </nav>
        </header>
    );
}

export default Nav;

