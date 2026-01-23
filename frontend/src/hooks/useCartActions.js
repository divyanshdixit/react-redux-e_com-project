import { useDispatch, useSelector } from "react-redux";
import {
  useAddToCartApiMutation,
  useUpdateCartApiMutation,
} from "../redux/apiService/api";
import { addToCart } from "../redux/feature/cartSlice";
import { toast } from "react-toastify";

export const useCartActions = () => {
  const [addToCartApi] = useAddToCartApiMutation();
  const [updateCartApi] = useUpdateCartApiMutation();

  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);

  const addItemToCart = async (product_id, title, price) => {
    try {
      const cartItemObj = {
        product_id,
        title,
        price,
        user_id: user?.id,
      };
    //   dispatch(addToCart(cartItemObj));
      const existedItem = items.find((item) => item.product_id === product_id);
      console.log(existedItem);
      
      let itemAdded;
      if (token) {
        if (existedItem) {
          // update cart from backend for existed item quantity:
          itemAdded = await updateCartApi({
            id: existedItem.id,
            body: {
              quantity: existedItem.quantity + 1,
            },
          }).unwrap();
        } else {
          // add item to cart with quantity 1:
          itemAdded = await addToCartApi({
            ...cartItemObj,
            quantity: 1,
          }).unwrap();
        }
        console.log(itemAdded);
        // save item in cart (response data):
        if(itemAdded){
            dispatch(addToCart(itemAdded));
            toast.success("Added to cart!");
        }
      } else {
        // localStorage.setItem() => guest user 
        toast.error("Something went wrong!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to add!");
    }
  };

  return addItemToCart;
};
