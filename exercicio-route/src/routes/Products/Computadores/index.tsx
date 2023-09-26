import { Outlet } from "react-router-dom";
import './styles.css';

export default function Computadores() {

    return (

        <>
            <div className="products-list">
                <p>Computador1</p>
                <p>Computador2</p>
                <p>Computador3</p>
            </div>

            <Outlet />
        </>
    );

}