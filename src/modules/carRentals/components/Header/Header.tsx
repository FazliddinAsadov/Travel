import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
  rem,
} from "@mantine/core";

import useCarRentHeaderStyle from "./useCarRentHeaderStyle";

const CarHeader = () => {
  const { classes } = useCarRentHeaderStyle();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text fw={500} fz="lg" mb={5}>
          Subscribe to our newsletter!
        </Text>
        <Text fz="sm" c="dimmed">
          You will never miss important product updates, latest news and
          community QA sessions. Our newsletter is once a week, every Sunday.
        </Text>
      </div>
      <Image
        // src="https://blackfoxmotors.de/wp-content/uploads/2021/02/SAM_1211-1920x1280.jpg"
        src="/images/mersheader-removebg-preview.png"
        className={classes.image}
        alt="mers"
      />
    </div>
  );
};
export default CarHeader;
