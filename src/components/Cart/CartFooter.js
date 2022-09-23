import { number } from 'prop-types';
import CartTotal from './CartTotal';
import { useCart } from './CartContext';

export default function CartFooter ({ ...restProps }) {
  const { cart, onUpdate } = useCart();
  <footer {...restProps}>
    <CartTotal>{cart.total}</CartTotal>
  </footer>
}

CartFooter.propTypes = {
  total: number.isRequired,
};
