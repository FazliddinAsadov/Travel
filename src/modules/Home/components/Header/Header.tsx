import { BackgroundImage, Box, Button, Group, Text } from "@mantine/core";
import { headerLocaleEn } from "./locale";
import useStyles from "./style/headerStyle";

type Props = {};

const Header = (props: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.head} mx="auto">
      <BackgroundImage
        src="https://www.agro.uz/wp-content/uploads/2021/10/namangan.jpg"
        // src={imgBg}
        radius="sm"
        className={classes.imgBox}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <Group className={classes.cols} position="center">
            <Text className={classes.first}>{headerLocaleEn.welcome}</Text>
            <Text className={classes.two}>{headerLocaleEn.choose}</Text>
            <Box className={classes.line}></Box>
            <Text className={classes.three}>{headerLocaleEn.text}</Text>
            <Button className={classes.btn}>Learn More</Button>
          </Group>
        </Box>
      </BackgroundImage>
    </Box>
  );
};

export default Header;
