import Button from "../../ui/Button";
import { useCheckout } from "../../features/check-in-out/useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isLoading } = useCheckout(bookingId);

  return (
    <Button variation="danger" size="small" onClick={() => checkout(bookingId)}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
