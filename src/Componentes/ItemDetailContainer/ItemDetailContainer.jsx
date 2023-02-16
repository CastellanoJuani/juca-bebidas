import { useState, useEffect } from "react"
import { consultarBDD } from "../../utils/funciones.js"
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx"
export const ItemDetailContainer = () => {
    const[producto, setProducto] = useState([])
    
    useEffect(() => {
        consultarBDD('../json/productos.json').then(prods => {
            const prod = prods.find(item => item.id === 1)
            setProducto(prod)
        })
    }, [])

    return (
        <div className="card mb-3 container itemDetail">
            <ItemDetail prod={producto}/>
        </div>
    )
}