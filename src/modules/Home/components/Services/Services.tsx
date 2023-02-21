import plane from "@assets/hFSfhf15244901249255_l (1).jpg";
import { Box, Container, Tabs, Text, Title } from "@mantine/core";
import Image from "next/image";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { GiEarthAmerica, GiHeartBeats } from "react-icons/gi";
import { ImAirplane } from "react-icons/im";
import useStyles from "./Style/servicesStyle";
import servicesLocaleEn from "./locale";
import servicesDataButtom from "./components/data/dataButtom";
import { useState } from "react";
import servicesDataTop from "./components/data/dataTop";

const Services = () => {
  const { classes } = useStyles();
  const [active, setActive] = useState([]);

  const handleClick = (e: any) => {
    setActive(servicesDataButtom.filter((el: any) => el.id === e.id));
  };

  console.log(active);

  return (
    <Box className={classes.root}>
      <Container size="lg" className={classes.itemFlex}>
        {servicesDataTop.map((item) => (
          <Box key={item.id}>
            <Box className={classes.item} onClick={() => handleClick(item)}>
              <item.icon className={classes.icon} />
              <Text>{item.title}</Text>
            </Box>
            {/* <Box className={classes.item}>
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
          </Box> */}
          </Box>
        ))}

        {/* 
        <Tabs color="yellow" defaultValue="gallery">
          <Tabs.List>
            <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
            <Tabs.Tab value="messages">Messages</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
          </Tabs.List>

          {servicesDataButtom.map((item) => (
            <Box className={classes.inner} key={item.id}>
              <Tabs.Panel value="gallery" pt="xs">
                <Box className={classes.content}>
                  <Title className={classes.title}>
                    <Text>{item.title}</Text>
                  </Title>

                  <Text my={20}>{item.descr_top}</Text>

                  <Box className={classes.textItems} my={20}>
                    <Text className={classes.flex}>
                      <BsFillCheckSquareFill className={classes.check} />
                      {item.text_one}
                    </Text>
                    <Text className={classes.flex}>
                      <BsFillCheckSquareFill className={classes.check} />
                      {item.text_two}
                    </Text>
                    <Text className={classes.flex}>
                      <BsFillCheckSquareFill className={classes.check} />
                      {item.text_three}
                    </Text>
                    <Text className={classes.flex}>
                      <BsFillCheckSquareFill className={classes.check} />
                      {item.text_four}
                    </Text>
                    <Text className={classes.flex}>
                      <BsFillCheckSquareFill className={classes.check} />
                      {item.text_five}
                    </Text>
                  </Box>
                  <Text>{item.descr_bottom}</Text>
                </Box>
                <Box>
                  <Box className={classes.cartImage}>
                    <Image src={plane} alt="error" className={classes.img} />
                  </Box>
                </Box>
              </Tabs.Panel>
            </Box>
          ))}
        </Tabs> */}
      </Container>
      <Container size="lg" className={classes.itemFlex}>
        {active.map((item: any) => (
          <Box className={classes.inner} key={item.id}>
            {/* <Tabs.Panel value="gallery" pt="xs"> */}
            <Box className={classes.content}>
              <Title className={classes.title}>
                <Text>{item.title}</Text>
              </Title>

              <Text my={20}>{item.descr_top}</Text>

              <Box className={classes.textItems} my={20}>
                <Text className={classes.flex}>
                  <BsFillCheckSquareFill className={classes.check} />
                  {item.text_one}
                </Text>
                <Text className={classes.flex}>
                  <BsFillCheckSquareFill className={classes.check} />
                  {item.text_two}
                </Text>
                <Text className={classes.flex}>
                  <BsFillCheckSquareFill className={classes.check} />
                  {item.text_three}
                </Text>
                <Text className={classes.flex}>
                  <BsFillCheckSquareFill className={classes.check} />
                  {item.text_four}
                </Text>
                <Text className={classes.flex}>
                  <BsFillCheckSquareFill className={classes.check} />
                  {item.text_five}
                </Text>
              </Box>
              <Text>{item.descr_bottom}</Text>
            </Box>
            <Box>
              <Box className={classes.cartImage}>
                <Image src={item?.image} alt="error" className={classes.img} />
              </Box>
            </Box>
            {/* </Tabs.Panel> */}
          </Box>
        ))}
      </Container>
    </Box>
  );
};
export default Services;
