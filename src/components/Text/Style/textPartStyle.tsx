import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    head: {
      position: "relative",
      width: "100%",
      height: "50vh",
      backgroundColor: theme.colorScheme === "dark" ? "#000" : "#fff",
    },
    triangle: {
      position: "absolute",
      bottom: "-24px",
      left: "48.5%",
      width: "50px",
      clipPath: "polygon(100% 0, 0 0, 50% 100%)",
      backgroundColor: theme.colorScheme === "dark" ? "#000" : "#fff",
      border: "none",
    },
    cols: {
      display: "flex",
      flexDirection: "column",
      width: "60%",
      margin: "0 auto",
      textAlign: "center",
      paddingTop: "5%",
    },
    title: {
      fontSize: "36px",
      fontWeight: 700,
    },
    line: {
      width: "40px",
      height: "3px",
      backgroundColor: "#FFC527",
    },
  };
});
export default useStyles;
