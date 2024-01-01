import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFailure } from "./components/OrderFailure";

export const OrderPage = () => {
  useTitle("Order Summary");
  const { state } = useLocation();

  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFailure />}
    </main>
  );
};
