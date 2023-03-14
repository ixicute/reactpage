import { NavLink } from 'react-router-dom';
import ColorChanger from './ColorChanger';

function NavbarHero() {
    return (
        
        <header className="hero">
            <ColorChanger />
            <input id="nav-toggle" type="checkbox" />
            <nav>
                <a href="./index.html">
                    <h2 className="logo">Portfo<span>lio</span></h2>
                </a>
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

                <label htmlFor="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
            </nav>
            <section className="hero-content">

                <h4>Hej! Mitt namn är</h4>
                <h1 id="changeColor">Aldor <span>Besher</span></h1>
                <h3>Jag är en .NET Systemutvecklare.</h3>

                <div className="contact">
                    <form>
                        <input type="email" name="email" id="mail" placeholder="Skriv din mejl" />
                        <input type="submit" name="submit" value="Kontakta Mig" />
                    </form>
                </div>

            </section>
        </header>
    )
}

export default NavbarHero;