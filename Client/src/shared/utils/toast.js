import toast from "react-hot-toast";

/**
 * Toast Notification Utility
 * Provides consistent toast messages across the application
 * Animations are smooth and slow for better visibility
 */

const successStyle = {
  background: "#1e3a1f",
  color: "#dcfce7",
  border: "1px solid #16a34a",
  borderRadius: "8px",
  padding: "16px",
  fontSize: "14px",
  fontWeight: "500",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
};

const errorStyle = {
  background: "#3f1f1f",
  color: "#fecaca",
  border: "1px solid #991b1b",
  borderRadius: "8px",
  padding: "16px",
  fontSize: "14px",
  fontWeight: "500",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
};

const infoStyle = {
  background: "#1e293b",
  color: "#e2e8f0",
  border: "1px solid #475569",
  borderRadius: "8px",
  padding: "16px",
  fontSize: "14px",
  fontWeight: "500",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
};

export const showSuccessToast = (message = "Operation successful") => {
  toast.success(message, {
    duration: 4000,
    position: "top-right",
    style: successStyle,
    iconTheme: {
      primary: "#16a34a",
      secondary: "#1e3a1f",
    },
  });
};

export const showErrorToast = (message = "An error occurred") => {
  toast.error(message, {
    duration: 5000,
    position: "top-right",
    style: errorStyle,
    iconTheme: {
      primary: "#991b1b",
      secondary: "#3f1f1f",
    },
  });
};

export const showLoadingToast = (message = "Loading...") => {
  return toast.loading(message, {
    position: "top-right",
    style: infoStyle,
  });
};

export const updateToast = (toastId, message, type = "success") => {
  toast.dismiss(toastId);
  if (type === "success") {
    showSuccessToast(message);
  } else if (type === "error") {
    showErrorToast(message);
  }
};

export const showInfoToast = (message = "Information") => {
  toast(message, {
    duration: 4000,
    position: "top-right",
    icon: "ℹ️",
    style: infoStyle,
  });
};
