import { Link } from "react-router-dom"

const Nav = ()=>{

    return(
        <nav>
            <Link to = "/">Home</Link>
            <span> | </span>
            <Link to = "/produtos">Produtos</Link>
            <span> | </span>
            <Link to = "/sobre">Sobre</Link>
            <span> | </span>
            <Link to = "/contato">Contato</Link>
        </nav>
    )
}

export default Nav