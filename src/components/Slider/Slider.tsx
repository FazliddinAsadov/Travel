import { Carousel } from "@mantine/carousel";
import { Box, Card, Container, Text } from "@mantine/core";
import useStyles from "./Style/sliderStyle";
import dataGit from "./components/data";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Slider = () => {
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Box className={classes.head}>
      <Carousel
        withIndicators
        slideSize="33.333333%"
        slideGap="md"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        loop={true}
        plugins={[autoplay.current]}
        align="start"
        withControls={false}
        className={classes.carousel}
        p={"5%"}
      >
        {dataGit.map((git: any) => (
          <Carousel.Slide key={git.id}>
            <Card className={classes.card}>
              <Box>
                <Image src={git?.image} alt="error" className={classes.img} />
                <Box className={classes.textItem}>
                  <Box className={classes.nameItem}>
                    <Text className={classes.name}>{git?.name}</Text>
                    <Box className={classes.iconItem}>
                      <AiFillStar className={classes.iconLight} />
                      <AiFillStar className={classes.iconLight} />
                      <AiFillStar className={classes.iconLight} />
                      <AiFillStar className={classes.iconLight} />
                      <AiOutlineStar />
                    </Box>
                  </Box>
                  <Text>{git?.descr}</Text>
                  {git.prices.map((price: any) => (
                    <Box className={classes.priceItem} key={price}>
                      <Text>Hour ${price.hour}</Text>
                      <Text>Day ${price.day}</Text>
                      <Text>Month ${price.month}</Text>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Card>
          </Carousel.Slide>
        ))}
        {/* ...other slides */}
      </Carousel>
    </Box>
  );
};
export default Slider;
