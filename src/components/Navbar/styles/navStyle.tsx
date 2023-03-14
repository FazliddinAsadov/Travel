import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    root: {
      position: "relative",
      zIndex: 1,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    dropdown: {
      position: "absolute",
      top: 60,
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
      width: "90%",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
    },

    links: {
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },

    burger: {
      [theme.fn.largerThan("md")]: {
        justifyContent: "space-between",
        display: "none",
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

      [theme.fn.smallerThan("sm")]: {
        borderRadius: 0,
        padding: theme.spacing.md,
      },
    },

    linkActive: {
      color: "#FFC527",
      transition: "0.3s",
      fontSize: 18,
      borderBottom: "1px solid #FFC527",
    },

    btnBuoking: {
      padding: "5px 25px",
      backgroundColor:
        theme.colorScheme === "dark" ? "rgba(0,0,0,0.5)" : "#FFC527",
      border: "1px solid #FFC527",
      "&:hover": {
        backgroundColor: "#FFC527",
      },
    },
  };
});
export default useStyles;
