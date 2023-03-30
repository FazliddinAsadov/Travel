import React from "react";
import CardData from "./component/data";
import useStyles from "./Style/CardStyle";
import { Flex } from "@mantine/core";

const Card = () => {
  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.text}>
        <h1>Our Service</h1>
        <p>Check out our services</p>
      </div>
      <Flex justify={"space-evenly"}>
        {CardData.map((data) => {
          return (
            <div>
              <div className={classes.wrap}>
                <div className={classes.imgBox}>
                  <h1>{data.imageBox.title}</h1>
                </div>
                <div>
                  <h2 className={classes.first}>{data.firstText}</h2>
                  <p className={classes.second}>{data.secondText}</p>
                  <button className={classes.btn}>{data.button}</button>
                </div>
              </div>
            </div>
          );
        })}
      </Flex>
      <div className={classes.wrapper}>
        <div className={classes.imgBox}>
          <h1>Image</h1>
        </div>
        <div>
          <h2 className={classes.first}>Chauffer services</h2>
          <p className={classes.second}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button className={classes.btn}>Limoushe booking</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
