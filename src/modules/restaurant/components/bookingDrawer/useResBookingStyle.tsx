import { createStyles } from "@mantine/core";

const useResBookingStyle = createStyles((theme) => {
  return {
    body: {
      position: "fixed",
      top: "27%",
      right: 0,
      border: "2px  solid  #FFC527",
      zIndex: 9,
      // "@media (min-width: 576px) ": {
      //   top: "80%",
      // },
    },
    card: {
      width: "300px",
      height: "60vh",
    },
    restairantItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    restairant__scrool: {},
    btn__booking: {
      background: "#FFC527",
      color: "#000",
    },
  };
});
export default useResBookingStyle;
