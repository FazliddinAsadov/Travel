import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    head: {
      width: "100%",
      height: "100%",
    },
    background: {
      width: "100%",
      height: "90vh",
    },
    backdrop: {
      width: "100%",
      height: "90vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "absolute",
    },
    inputGroup: {
      width: "70%",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      // backgroundColor: "rgba(0,0,0,0.8)",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.dark[0],
      position: "relative",
      top: "10%",
      padding: 25,
      "@media (max-width: 800px)": {
        top: "30%",
      },
    },
    inputItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "35px",
    },
    searchBtn: {
      marginTop: "2.5%",
      padding: "10px 30px",
      backgroundColor: "#FFC527",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.8)",
        border: "1px solid #FFC527",
      },
    },
    group: {
      width: "85%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    item__left: {
      width: "20%",
    },
    item__right: {
      width: "80%",
    },
  };
});
export default useStyles;
