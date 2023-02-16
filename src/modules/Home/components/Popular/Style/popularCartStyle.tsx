import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => {
  return {
    section: {
      padding: "100px 0",
      backgroundColor: "#F6F8F9",
    },
    container: {
      width: "90%",
      margin: "0 auto",
    },
    cart: {
      width: "100%",
      height: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: "10px",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };
});
export default useStyles;
