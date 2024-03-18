import { CartItem, totalItemQtySelector } from "../store/features/cartSlice";
import { useAppSelector } from "../store/store";

const Cart = () => {
    const totalItemQty = useAppSelector(totalItemQtySelector);

    return (
        <div className="border p-3 rounded-md bg-green-50 text-green-500 shadow">
        <div>
          <span>Cart Items Count:</span>{" "}
          <span className="font-bold mx-2">{totalItemQty}</span>
        </div>
      </div>
    )
}

export default Cart;