/* eslint-disable react/prop-types */
import {
  useContext,
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from "react";
import ShoppingCartContext from "../contexts/shoppingCartContext";
import logVisit from "../utils/logVisit";

export default function Page({ url, onPageChange, onAddItems }) {
  const items = useContext(ShoppingCartContext);
  const numbersOfItems = items.length;

  const onVisit = useEffectEvent((url) => {
    logVisit(url, numbersOfItems);
  });

  useEffect(() => {
    onVisit(url);
  }, [url]);

  return (
    <div>
      <h1>This is page</h1>
      <div>
        <button onClick={onPageChange}>Change page</button>
        <button onClick={onAddItems}>Add new page</button>
      </div>
      <div>total items in cart: {numbersOfItems}</div>
    </div>
  );
}
