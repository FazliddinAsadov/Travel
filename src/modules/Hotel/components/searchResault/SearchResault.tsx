import CardSearchResault from "@components/CardSearchResault/CartSearchResault";
import cardSerchResault from "@components/CardSearchResault/data/data";
import Pagenation from "@components/Pagination/Pagination";
import Maps from "@components/map/Map";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Group,
  Radio,
  RangeSlider,
  Text,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import "dayjs/locale/de";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import useSearchResStyle from "./style/useSearchResStyle ";
import hotelLocaleUz from "@modules/Hotel/locale";
import categoryData from "@services/api/categoryData";
import { RangeSliders } from "@components/RengeSlider/RengeSliders";

// export interface SearchResProps {
//   image: string;
//   currency: string;
//   title: string;
//   code: string | number;
//   originalPrice: number;
//   price: string | number;
//   unit: string;
//   quantity: string | number;
//   description: string;
//   discounts: { price: number; quantity: number }[];
//   minQuantity: number;
//   sellingCurrency: string;
// }

// : React.FC<{
//   handleClose: () => void;
//   editItem: any;
// }> =>

type Props = {
  data: any;
  addSearch: any;
};

const SearchResault = ({ data, addSearch }: Props) => {
  const { classes } = useSearchResStyle();
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <Box className={classes.group}>
      <Box className={classes.item__left}>
        <Box className={classes.cart__search}>
          <Group position="center">
            <Autocomplete
              placeholder="Enter your Address"
              label={hotelLocaleUz.location}
              withAsterisk
              data={["Namangan", "Chust", "Chortoq", "Pop"]}
              sx={{ width: "80%" }}
            />
            <DatePickerInput
              type="range"
              label="Select Date"
              placeholder="Select Date"
              value={value}
              onChange={setValue}
              mx="auto"
              maw={400}
              sx={{ width: "80%" }}
            />
            <Autocomplete
              label="Select Room"
              placeholder="Enter your Room"
              data={["1x", "2x", "3x", "4x", "5x"]}
              sx={{ width: "80%" }}
            />
            <Autocomplete
              label="Person"
              placeholder="Person"
              data={["1-3", "3-5", "5-7"]}
              sx={{ width: "80%" }}
            />
            <Button>{hotelLocaleUz.btnSearch}</Button>
          </Group>
        </Box>
        <Box>
          <Maps width={200} height={100} />
        </Box>
        {/* filter */}
        <Box className={classes.filter}>
          <Text className={classes.title}>Select Price</Text>
          <RangeSliders />
          <Text>Category</Text>

          <Radio.Group name="" label="" description="" withAsterisk>
            {categoryData.map((item: any) => (
              <Group mt="xs" key={item?.id}>
                <Radio
                  value={item?.title}
                  label={item?.title}
                  onClick={() => addSearch(item)}
                />
              </Group>
            ))}
          </Radio.Group>
        </Box>
        <Box className={classes.filter}>
          <Text className={classes.title}>Star Category</Text>
          <Box>
            <Box className={classes.star__flex}>
              <Text>3 Star</Text>
              <Box className={classes.icon__star}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </Box>
            </Box>
            <Box className={classes.star__flex}>
              <Text>2 Star</Text>
              <Box className={classes.icon__star}>
                <AiFillStar />
                <AiFillStar />
              </Box>
            </Box>
            <Box className={classes.star__flex}>
              <Text>1 Star</Text>
              <Box className={classes.icon__star}>
                <AiFillStar />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.item__right}>
        <CardSearchResault data={data} />
        {data.length > 4 ? <Pagenation /> : null}
      </Box>
    </Box>
  );
};

export default SearchResault;
