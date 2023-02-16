import { Box, Container, Group, Text } from "@mantine/core";
import React from "react";
import useStyles from "./Style/textPartStyle";

type Props = {
  title: string;
  titleTwo: string;
};

const TextPart = ({ title, titleTwo }: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.head}>
      <Group className={classes.cols} position="center">
        <Text className={classes.title}>{title}</Text>
        <Box className={classes.line}></Box>
        <Text>{titleTwo}</Text>
      </Group>
      <Box className={classes.triangle}>.</Box>
    </Box>
  );
};

export default TextPart;
