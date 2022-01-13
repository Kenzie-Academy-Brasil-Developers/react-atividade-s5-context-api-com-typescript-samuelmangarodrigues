import { useCart } from "../../Provider/Cart";
import {
  Button,
  CardItems,
  CardsContainer,
  Cointainer,
  Img,
} from "../CardList/styles";

const CartList = () => {
  const { cart, deleteProduct } = useCart();

  return (
    <div>
      <h1>Carrinho</h1>
      <Cointainer>
        {cart.map((car) => (
          <CardsContainer>
            <Img src={car.image} alt={car.description} />
            <CardItems>{car.title}</CardItems>
            <CardItems>{car.price}</CardItems>
            <Button onClick={() => deleteProduct(car)}>
              Remover do carrinho
            </Button>
          </CardsContainer>
        ))}
      </Cointainer>
    </div>
  );
};
export default CartList;
