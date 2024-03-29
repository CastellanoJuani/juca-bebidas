import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
export const ItemDetail = ({prod}) => {

    const onAdd = (cantidad) => { //Agregar producto al carrito
        console.log(cantidad)
        console.log(prod)
    }

    return(
    <div className="card mb-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
        <div className="col-md-4">
        <img src={`../img/${prod.img}`} className="img-fluid rounded-start" alt="..." />
    </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{prod.nombre}</h5>
            <p className="card-text">Marca: {prod.marca}</p>
            <p className="card-text">Precio: ${prod.precio}</p>
            <p className="card-text">Stock: {prod.stock}</p>
        <ItemCount ValInicial={1} stock={prod.stock} onAdd={onAdd}/>
        <Link className="nav-link" to={'/cart'}><button className="btn btn-dark">Finalizar Compra</button></Link> 
        </div>
    </div>
    </div>
    </div>
    )
}