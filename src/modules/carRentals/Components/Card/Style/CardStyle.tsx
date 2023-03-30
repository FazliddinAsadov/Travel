import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => {
  return {
    wrapper: {
      display: "flex",
      gap: "30px",
      justifyContent: "center",
      marginTop: "50px"
    },
    wrap: {
      display: "flex",
      gap: "30px",
    },
    imgBox: {
      width: "250px",
      height: "210px",
      border: "1px solid #ffffff",
      borderRadius: "20px",
      textAlign: "center",
      paddingTop: "70px",
    },
    first: {
      fontSize: "22px",
      fontFamily: "Poppins, sans-serif",
    },
    text: {
      paddingLeft: "120px",
      paddingBottom: "50px",
    },
    second: {
      width: "300px",
      marginTop: "10px",
      marginBottom: "20px",
    },
    btn: {
      width: "250px",
      height: "50px",
      borderRadius: "5px",
      border: "none",
      outline: "none",
      backgroundColor: "#FFC527",
    },
  };
});

export default useStyles;
