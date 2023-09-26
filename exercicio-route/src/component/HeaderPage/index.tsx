import { Link, Outlet } from "react-router-dom";
import './styles.css';

import { NavLink } from "react-router-dom";
import homeIcon from '../../assests/image/Vector.svg';

export default function HeaderPage() {

    return (

        <>
            <header className="header-container">
                <nav className="nav-container">
                    <div className="menu-itens">

                        <NavLink to="/home" className={({isActive})=> isActive ? "menu-item nav-withe-select": "menu-item" }>
                            Inicio
                        </NavLink>

                        <NavLink to="/products" className={({isActive})=> isActive ? "menu-item nav-withe-select": "menu-item" }>
                            Produtos
                        </NavLink>
                        
                        <NavLink to="/about" className={({isActive})=> isActive ? "menu-item nav-withe-select": "menu-item" }>
                            Sobre nós
                        </NavLink>
                    </div>

                    <div className="menu-home">
                        <Link to="/home">
                            <img src={homeIcon} alt="home" />
                        </Link>

                    </div>
                </nav>
            </header>

            <Outlet />
        </>

    );
}