import { Box, Text } from "@mantine/core";
import React from "react";
import { text_one } from "@services/api/history";
import { text_two } from "@services/api/history";
import { text_three } from "@services/api/history";

type Props = {};

const HistoryTextMore = (props: Props) => {
  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Text py={100} size={18} sx={{ textAlign: "justify" }}>
        {text_one}
      </Text>
      <Text pt={50} size={18} sx={{ textAlign: "justify" }}>
        {text_two}
      </Text>
      <Text py={50} size={18} sx={{ textAlign: "justify" }}>
        {text_three}
      </Text>
    </Box>
  );
};

export default HistoryTextMore;
