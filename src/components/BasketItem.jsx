import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";

const BasketItem = ({removeFromorder, id, name, price, quantity }) => {
    return (
        <ListItem>
            <Typography
            variant = 'body1'
            >
            {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                onClick={() => removeFromorder(id)}
            >
                <Close />
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;