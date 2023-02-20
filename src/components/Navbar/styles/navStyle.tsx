import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    root: {
      position: "relative",
      zIndex: 1,
    },

    dropdown: {
      position: "absolute",
      left: 0,
      right: 0,
      zIndex: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopWidth: 0,
      overflow: "hidden",

      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },

    links: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },

    burger: {
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
      paddingLeft: "300px",
    },

    textLeft: {
      maxWidth: "100px",
      width: "100%",
      paddingRight: "180px",
      paddingLeft: "-180px",
    },

    Sign_btn: {
      padding: "5px 20px",
      color: "white",
      marginLeft: "4px",
      fontWeight: "bold",
      backgroundColor: "#FFC527",
      cursor: "pointer",
      outline: "none",
      border: "none",
      borderRadius: "5px",
      transition: "all 0.3s",

      "&:active": {
        transform: "scale(0.96)",
        background: "black",
      },

      "&:hover": {
        background: "rgba(255, 255, 255, 0.2)",
      },
    },

    link: {
      display: "block",
      lineHeight: 1,
      padding: "8px 12px",
      borderRadius: theme.radius.sm,
      textDecoration: "none",
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[0]
          : theme.colors.gray[7],
      fontSize: theme.fontSizes.sm,
      fontWeight: 500,

      "&:hover": {
        color: theme.colorScheme === "dark" ? "#FFC527" : "#FFC527",
      },
      "&:active": {
        backgroundColor: "#FFC527",
        color: theme.white,
      },

      [theme.fn.smallerThan("sm")]: {
        borderRadius: 0,
        padding: theme.spacing.md,
      },
    },

    active: {
      backgroundColor: theme.colors[theme.primaryColor][6],
      color: theme.white,
    },
  };
});
export default useStyles;
