import { ShoppingBasket } from "@mui/icons-material"
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import BasketItem from "./BasketItem"

const Basket = (props) => {
    const{
        cartOpen,
        closeCart= Function.prototype, 
        order = [],
        removeFromorder
    } =props

  return (
    <Drawer
       anchor='right'
       open= {cartOpen}
       onClose={closeCart}
    >
        <List 
             sx = {{ width: "400px"}}
        >
            <ListItem>
                <ListItemIcon>
                    <ShoppingBasket />
                </ListItemIcon>
                <ListItemText primary='Корзина' />
            </ListItem>
            <Divider />

            {!order.length ?(
                <ListItem>Корзина пуста</ListItem>
            ): (
                 order.map ((item) => (
                     <BasketItem key={item.name} removeFromorder={removeFromorder} {...item}/>
                 ))
            )}          
        </List>
      
    </Drawer>
  )
}

export default Basket
