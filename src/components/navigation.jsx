import Link from "next/link";

export default function Navigation(){
    return (
        <nav className="navigation">
            <img src="./logo.png" alt="logotipo" crossOrigin="anonymous" className="navigation__image" />
            <ul className="navigation__menu">
                <li className="navigation__menu_item"><Link href={"#"}>Inicio</Link></li>
                <li className="navigation__menu_item"><Link href={"#"}>Sobre Nós</Link></li>
                <li className="navigation__menu_item"><Link href={"#"}>Populares</Link></li>
            </ul>
            <Link href="#" className="navigation__btn">Reserve já</Link>
        </nav>
    )
}