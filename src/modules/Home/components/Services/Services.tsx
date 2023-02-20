import plane from "@assets/hFSfhf15244901249255_l (1).jpg";
import { Box, Container, Text, Title } from "@mantine/core";
import Image from "next/image";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { GiEarthAmerica, GiHeartBeats } from "react-icons/gi";
import { ImAirplane } from "react-icons/im";
import useStyles from "./Style/servicesStyle";
import servicesLocaleEn from "./locale";

const Services = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Container size="lg">
        <Box className={classes.items}>
          <Box className={classes.item}>
            <ImAirplane className={classes.icon} />
            <Text>{servicesLocaleEn.plane}</Text>
          </Box>
          <Box className={classes.item}>
            <GiEarthAmerica className={classes.icon} />
            <Text>{servicesLocaleEn.globus}</Text>
          </Box>
          <Box className={classes.item}>
            <FaHotel className={classes.icon} />
            <Text>{servicesLocaleEn.hotel}</Text>
          </Box>
          <Box className={classes.item}>
            <GiHeartBeats className={classes.icon} />
            <Text>{servicesLocaleEn.medical}</Text>
          </Box>
        </Box>

        <Box className={classes.inner}>
          <Box className={classes.content}>
            <Title className={classes.title}>
              <Text>{servicesLocaleEn.plane}</Text>
            </Title>

            <Text my={20}>{servicesLocaleEn.descrOne}</Text>

            <Box className={classes.textItems} my={20}>
              <Text className={classes.flex}>
                <BsFillCheckSquareFill className={classes.check} />
                {servicesLocaleEn.descrTwo}
              </Text>
              <Text className={classes.flex}>
                <BsFillCheckSquareFill className={classes.check} />
                {servicesLocaleEn.descrThree}
              </Text>
              <Text className={classes.flex}>
                <BsFillCheckSquareFill className={classes.check} />
                {servicesLocaleEn.descrFour}
              </Text>
              <Text className={classes.flex}>
                <BsFillCheckSquareFill className={classes.check} />
                {servicesLocaleEn.descrFive}
              </Text>
              <Text className={classes.flex}>
                <BsFillCheckSquareFill className={classes.check} />
                {servicesLocaleEn.descrSix}
              </Text>
            </Box>
            <Text>{servicesLocaleEn.descrSeven}</Text>
          </Box>
          <Box>
            <Box className={classes.cartImage}>
              <Image src={plane} alt="error" className={classes.img} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Services;
