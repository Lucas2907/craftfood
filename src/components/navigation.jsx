import Link from "next/link";

export default function Navigation(){
    return (
        <nav className="navigation">
            <img src="./logo.svg" alt="logotipo" className="navigation__image" />
            <ul className="navigation__menu">
                <li className="navigation__menu_item"><Link href={"#"}>Inicio</Link></li>
                <li className="navigation__menu_item"><Link href={"#"}>Sobre Nós</Link></li>
                <li className="navigation__menu_item"><Link href={"#"}>Populares</Link></li>
            </ul>
            <button className="navigation__btn">Reserve já</button>
            
        </nav>
    )
}