import { createStyles, rem } from "@mantine/core";

const useDataStyle = createStyles((theme) => {
  return {
    head: {
      position: "absolute",
      bottom: "5%",
      left: "6%",
      "@media (max-width:576px)": {
        left: "0%",
      },
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      textAlign: "center",
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      cursor: "pointer",

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[1],
      },
    },

    root: {
      display: "flex",
      backgroundImage: `linear-gradient(-60deg, ${
        theme.colors[theme.primaryColor][4]
      } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
      padding: `calc(${theme.spacing.xl} * 1.5)`,
      borderRadius: theme.radius.md,

      [theme.fn.smallerThan("sm")]: {
        flexDirection: "column",
      },
    },

    title: {
      color: theme.white,
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: theme.fontSizes.sm,
    },

    count: {
      color: theme.white,
      fontSize: rem(32),
      lineHeight: 1,
      fontWeight: 700,
      marginBottom: theme.spacing.md,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    description: {
      color: theme.colors[theme.primaryColor][0],
      fontSize: theme.fontSizes.sm,
      marginTop: rem(5),
    },

    stat: {
      flex: 1,

      "& + &": {
        paddingLeft: theme.spacing.xl,
        marginLeft: theme.spacing.xl,
        borderLeft: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,

        [theme.fn.smallerThan("sm")]: {
          paddingLeft: 0,
          marginLeft: 0,
          borderLeft: 0,
          paddingTop: theme.spacing.xl,
          marginTop: theme.spacing.xl,
          borderTop: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
        },
      },
    },
  };
});
export default useDataStyle;
