import { useMutation } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deletes, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBooking,

    onSuccess: () => {
      toast.success(`Booking successfully deleted`);
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: () => {
      toast.error("There was an error deleting the booking");
    },
  });

  return { deletes, isDeleting };
}
