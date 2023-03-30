import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    head: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: "100px",
    },
    first: {
      fontSize: "40px",
      fontWeight: 700,
    },
    second: {
      fontSize: "16px",
      fontWeight: 500,
      width: "500px",
      marginTop: "10px",
      marginBottom: "10px",
    },
    btn: {
      background: "#FFC527",
      "&:hover": {
        background: "transparent",
        border: "1px solid #FFC527"
      }
    }
  }
});
export default useStyles;
