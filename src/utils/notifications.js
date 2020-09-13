import { toast } from "react-toastify";

export const successMessage = (text) => {
  toast.success(text, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
