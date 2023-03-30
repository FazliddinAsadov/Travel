import { Button } from "@mantine/core";
import Image from "next/image";
import React from "react";
import useStyles from "./Style/HeaderStyle";

type Props = {};

const Header = (props: Props) => {
  const { classes } = useStyles();

  return (
    <div className={classes.head}>
      <div>
        <h1 className={classes.first}>Cars Rentals</h1>
        <p className={classes.second}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <Button className={classes.btn}>Booking</Button>
      </div>
      <div>
        <Image src="/car.png" width={600} height={500} alt={""} />
      </div>
    </div>
  );
};

export default Header;
