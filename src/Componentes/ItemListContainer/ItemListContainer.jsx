import { useState, useEffect } from 'react'
import { consultarBDD } from "../../utils/funciones"

import { ItemList } from '../ItemList/ItemList'
export const ItemListContainer = () => {
    const[productos, setProductos] = useState([])

    useEffect(() => {
       consultarBDD('./json/productos.json').then(prods => {
        const items = ItemList({prods})
        setProductos(items)
       })
    }, [])

    return(
        <div className='row cardProcutos'>
            {productos}
        </div>
    )
}