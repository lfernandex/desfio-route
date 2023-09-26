import { NavLink, Outlet } from "react-router-dom";
import './styles.css';

export default function Products() {



    return (

        <>
            <div className="product-container">
                <div className="products-menu">

                    <NavLink to="/products/computers" className={({isActive})=> isActive ? "product-item nav-withe-select": "product-item" }>
                        Computadores
                    </NavLink>

                    <NavLink to="/products/electronics" className={({isActive})=> isActive ? "product-item nav-withe-select": "product-item" }>
                        Eletronicos
                    </NavLink>

                    <NavLink to="/products/books" className={({isActive})=> isActive ? "product-item nav-withe-select": "product-item" }>
                        Livros
                    </NavLink>
                </div>

            </div>


            <Outlet />
        </>
    );

}