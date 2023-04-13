import { createStyles } from "@mantine/core";

const useResBookingStyle = createStyles((theme) => {
  return {
    body: {
      position: "fixed",
      top: "27%",
      right: 0,
      border: "2px  solid  #FFC527",
      zIndex: 9999,
    },
    card: {
      width: "300px",
      height: "60vh",
    },
    restairantItem: {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
  };
});
export default useResBookingStyle;
