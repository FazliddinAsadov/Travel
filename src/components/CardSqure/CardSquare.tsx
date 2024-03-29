import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Box,
  Grid,
} from "@mantine/core";
import useSttyles from "./Style/cardSquare";
import { AiFillStar } from "react-icons/ai";
import { FaUserAlt, FaBath, FaCoffee, FaWifi, FaParking } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import hotelLocaleUz from "@modules/Hotel/locale";

type Props = {
  data: any;
};

const CardSquare = ({ data }: Props) => {
  const { classes } = useSttyles();
  return (
    <Box className={classes.container}>
      <Grid>
        <Box className={classes.head}>
          {data.map((item: any) => (
            <Grid.Col md={6} lg={3} key={item.id}>
              <Card shadow="sm" radius="md" withBorder>
                <Card.Section component="div">
                  <Image
                    src={item?.img}
                    width={"100%"}
                    height={"100%"}
                    alt="Norway"
                    sx={{ objectFit: "cover" }}
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text className={classes.title}>{item?.title}</Text>
                  <Badge color="pink" variant="light">
                    {item?.discount} %
                  </Badge>
                </Group>
                <Box>
                  <Box className={classes.icon__group}>
                    <Box className={classes.icons}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </Box>
                    <Text>All Review</Text>
                  </Box>
                </Box>
                <Box className={classes.icon__group}>
                  <Box className={classes.icon__group}>
                    <FaUserAlt />({item?.person})
                  </Box>
                  <Box className={classes.icon__group}>
                    <IoIosBed />({item?.beds})
                  </Box>
                  <Box className={classes.icon__group}>
                    <FaBath />({item?.bathroom})
                  </Box>
                </Box>

                <Box className={classes.flex__btn}>
                  <Box className={classes.icon__free__services}>
                    <Box className={classes.icon__group}>
                      <FaCoffee />
                      <Text>{hotelLocaleUz.freeCofe}</Text>
                    </Box>
                    <Box className={classes.icon__group}>
                      <FaWifi />
                      <Text>{hotelLocaleUz.freeInternet}</Text>
                    </Box>
                    <Box className={classes.icon__group}>
                      <FaParking />
                      <Text>{hotelLocaleUz.freeParking}</Text>
                    </Box>
                  </Box>
                  <Box>
                    <Group position="center">
                      <Text className={classes.price}>{item?.price} $</Text>
                    </Group>
                    <Button
                      fullWidth
                      mt="md"
                      radius="sm"
                      className={classes.booking__btn}
                    >
                      Booking
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid.Col>
          ))}
        </Box>
      </Grid>
    </Box>
  );
};

export default CardSquare;
