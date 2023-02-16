import { Item } from "../item/item"

export const ItemList = ({prods}) => {
    console.log(prods)
    return (
        <>
            {prods.map(producto => <Item item={producto} key={producto.id}/>)}
        </>
    )
}