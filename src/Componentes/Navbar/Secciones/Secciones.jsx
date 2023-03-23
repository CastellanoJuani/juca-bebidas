import { Link } from "react-router-dom"
 export const Secciones = () => {
    return (
        <>
             <li className="nav-item">
                <Link className="nav-link" to={'/'}>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Sobre Nosotros</Link>
              </li>
        </>
    )
}
