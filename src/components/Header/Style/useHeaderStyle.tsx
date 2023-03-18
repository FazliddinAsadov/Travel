import { createStyles } from "@mantine/core";

const useHeaderStyles = createStyles((theme) => {
  return {
    head: {
      maxWidth: "100%",
      height: "90vh",
    },
    imgBox: {
      width: "100%",
      height: "90vh",
    },
    cols: {
      width: "70%",
      margin: "0 auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      paddingTop: "8%",
    },
    first: {
      color: "white",
      fontSize: "80px",
      fontWeight: 700,

      [theme.fn.smallerThan("xs")]: {
        width: "100%",
        fontSize: 48,
        lineHeight: 1.3,
      },
    },
    two: {
      color: "#FFC527",
      fontSize: "64px",
      fontWeight: 700,

      [theme.fn.smallerThan("xs")]: {
        width: "100%",
        fontSize: 40,
        lineHeight: 1.3,
      },
    },
    line: {
      width: "20%",
      height: "2px",
      background: "#FFC527",
    },
    three: {
      width: "60%",
      color: "white",
      fontSize: "18px",
      [theme.fn.smallerThan("xs")]: {
        width: "100%",
        fontSize: 16,
        lineHeight: 1.3,
      },
    },
    btn: {
      width: "25%",
      height: "50px",
      backgroundColor: "#FFC527",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.3)",
        border: "1px solid #FFC527",
      },
      "&:active": {
        color: theme.white,
      },
      [theme.fn.smallerThan("xs")]: {
        width: "150px",
      },
    },
  };
});
export default useHeaderStyles;
