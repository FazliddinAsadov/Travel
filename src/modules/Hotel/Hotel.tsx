import CardSquare from "@components/CardSqure/CardSquare";
import TextPart from "@components/Text/TextPart";
import {
  Autocomplete,
  BackgroundImage,
  Box,
  Button,
  Group,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import "dayjs/locale/de";
import { useState } from "react";
import useStyles from "./Style/hotelStyle";
import dataPopularHotel from "./components/dataPopularHotel";
import SearchResault from "./components/searchResault/SearchResault";
import hotelLocaleUz from "./locale";
import cardSerchResault from "@components/CardSearchResault/data/data";

type Props = {};

const Hotel = (props: Props) => {
  const { classes } = useStyles();
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  const [srchAns, setSrchAns] = useState<any>([]);

  const addSearch = (e: any) => {
    if (e.title === "All") {
      setSrchAns(cardSerchResault);
    } else {
      const res = cardSerchResault.filter(
        (item: any) => item?.category === e.title
      );
      setSrchAns(res);
    }
  };

  return (
    <Box className={classes.head}>
      <BackgroundImage
        src="https://namangansquare.com/wp-content/uploads/2020/05/nsq-apartments-img-80.jpg"
        // src={imgBg}
        radius="sm"
        className={classes.background}
      >
        <Box className={classes.backdrop}>
          <Box className={classes.inputGroup}>
            <Group className={classes.inputItem}>
              <Autocomplete
                placeholder="Enter your Address"
                label={hotelLocaleUz.location}
                withAsterisk
                data={["Namangan", "Chust", "Chortoq", "Pop"]}
              />
              <DatePickerInput
                type="range"
                label="Select Date"
                placeholder="Select Date"
                value={value}
                onChange={setValue}
                mx="auto"
                maw={400}
              />
              <Autocomplete
                label="Select Room"
                placeholder="Enter your Room"
                data={["1x", "2x", "3x", "4x", "5x"]}
              />
              <Autocomplete
                label="Person"
                placeholder="Person"
                data={["1-3", "3-5", "5-7"]}
              />
              <Button className={classes.searchBtn}>
                {hotelLocaleUz.btnSearch}
              </Button>
            </Group>
          </Box>
        </Box>
      </BackgroundImage>
      <SearchResault data={srchAns} addSearch={addSearch} />
      <TextPart
        title={hotelLocaleUz.popularHotelTitle}
        titleTwo={hotelLocaleUz.popularHotelDescr}
      />
      <CardSquare data={dataPopularHotel} />
    </Box>
  );
};
export default Hotel;
