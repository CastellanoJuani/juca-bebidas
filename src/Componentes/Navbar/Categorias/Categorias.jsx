import { Link } from "react-router-dom"

export const Categorias = () => {
    return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Bebidas
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to={'/category/1'}>Vinos</Link></li>
                  <li><Link className="dropdown-item" to={'/category/2'}>Aperitivos</Link></li>
                </ul>
              </li>
    )
}