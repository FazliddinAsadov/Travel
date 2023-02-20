import React from "react";
import { cardDatas } from "./data/data";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import useStyles from "./styles/cardStyle";
import { Box } from "@mantine/core";

const Card = () => {
  const { classes } = useStyles();

  return (
    <div>
      <Carousel
        className={classes.carousel}
        sx={{ maxWidth: 1000 }}
        mx="auto"
        withIndicators
      >
        {cardDatas.map((cardData: any) => (
          <Carousel.Slide>
            <Image
              src={cardData.image}
              className={classes.image}
              alt=""
              width={150}
              height={150}
            />
            <h3 className={classes.text}>{cardData.text}</h3>
            <div className={classes.wrap}>
              <Box>
                <Image src={cardData.icon} alt="" />
              </Box>
              <p className={classes.p}>{cardData.p}</p>
              <a className={classes.link} href="#">
                {cardData.link}
              </a>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Card;
