import {
  BackgroundImage,
  Box,
  Center,
  Group,
  Text,
  Button,
} from "@mantine/core";
import { headerLocaleEn } from "./locale";
import useStyles from "./style/headerStyle";

type Props = {};

const Header = (props: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.head} mx="auto">
      <BackgroundImage
        src="https://www.moradhamdy.com/morad/traveltour-demo/images/files/sliders/banner/img-19.jpg"
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
