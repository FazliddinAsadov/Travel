import React from "react";
import { Box, Text } from "@mantine/core";
import useStayles from "./Style/videoPlayStyle";
import videoPlayLocaleEn from "./locale";
import { BsFillPlayCircleFill } from "react-icons/bs";
import img from "@assets/Namangan1.jpg";

const VideoPlay = () => {
  const { classes } = useStayles();
  return (
    <Box className={classes.bg}>
      <Box className={classes.head}>
        <Text className={classes.titleOne}>{videoPlayLocaleEn.great}</Text>
        <Text className={classes.titleTwo}> {videoPlayLocaleEn.tourist}</Text>
        <Box className={classes.line}></Box>
        <Box className={classes.iconItem}>
          <Text>{videoPlayLocaleEn.click}</Text>
          <BsFillPlayCircleFill className={classes.icon} />
          <Text>{videoPlayLocaleEn.watch}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoPlay;
