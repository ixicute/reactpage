import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="hero-2">
            {/* <!--Input and Label tags are for the hamburger menu on smaller devices--> */}
            <input id="nav-toggle" type="checkbox" />
            <nav>
                <Link href="./index.html">
                    <h2 className="logo">Portfo<span>lio</span></h2>
                </Link>
                <ul className="menu">
                    <li><a href="https://www.github.com/ixicute" target="_blank" rel="noreferrer" className="github-btn-menu" aria-label="Visit Github profile">Github sidan</a>
                    </li>
                    <li><NavLink to={"/"} activeclassname="active">Hem</NavLink></li>
                    <li><NavLink to={"/MyProjects"} activeclassname="active">Mina Projekt</NavLink></li>
                    <li><NavLink to={"/About"} activeclassname="active">Om Mig</NavLink></li>
                    <li><NavLink to={"/Cv"} activeclassname="active">CV</NavLink></li>
                    <li><NavLink to={"/Tillganglighet"} activeclassname="active">Tillgänglighet</NavLink></li>
                </ul>
                <a href="https://www.github.com/ixicute" target="_blank" rel="noreferrer" className="github-btn-main" aria-label="Visit Github profile">Github sidan</a>
            </nav>

            <label htmlFor="nav-toggle" className="icon-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </header>
    )
}

export default Navbar;