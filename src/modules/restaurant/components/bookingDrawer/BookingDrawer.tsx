import {
  Accordion,
  ActionIcon,
  Box,
  Button,
  Card,
  Drawer,
  Group,
  NumberInput,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useRef } from "react";
import useResBookingStyle from "./useResBookingStyle";
import {
  IconBrandBooking,
  IconCalendar,
  IconClock,
  IconPhoto,
  IconToolsKitchen2,
} from "@tabler/icons-react";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import Image from "next/image";
import { RestaurantItem } from "../restaurantItem/RestaurantItem";

type Props = {};

const BookingDrawer = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useResBookingStyle();
  const theme = useMantineTheme();

  const ref: any = useRef<HTMLInputElement>();
  const getColor = (color: string) =>
    theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];

  return (
    <Accordion
      variant="separated"
      defaultValue="customization"
      className={classes.body}
    >
      <Accordion.Item value="customization">
        <Accordion.Control
          icon={<IconBrandBooking size={rem(20)} color={getColor("orange")} />}
        >
          <Text>Restaurant booking</Text>
        </Accordion.Control>
        <Accordion.Panel>
          <Box>
            <Card className={classes.card}>
              <form>
                <NumberInput
                  defaultValue={18}
                  placeholder="Enter Person"
                  label="Person"
                  withAsterisk
                />
                <DatePickerInput
                  dropdownType="modal"
                  label="Select Date"
                  placeholder="Select Date"
                  icon={<IconCalendar size="1.1rem" stroke={1.5} />}
                  mx="auto"
                  maw={400}
                  sx={{ width: "100%" }}
                  withAsterisk
                  clearable
                  py={10}
                  //   {...form.getInputProps("date")}
                />
                <TimeInput
                  label="Time"
                  ref={ref}
                  rightSection={
                    <ActionIcon onClick={() => ref.current.showPicker()}>
                      <IconClock size="1rem" stroke={1.5} />
                    </ActionIcon>
                  }
                  maw={400}
                  mx="auto"
                />
                <Accordion variant="contained" pt={20}>
                  <Accordion.Item value="photos">
                    <Accordion.Control
                      icon={
                        <IconToolsKitchen2
                          size={rem(20)}
                          color={getColor("orange")}
                        />
                      }
                    >
                      Select Restaurant
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Box className={classes.restairantItem}>
                        <Box>
                          <Image
                            src="/images/reataurant.avif"
                            alt=""
                            width={80}
                            height={60}
                          />
                        </Box>
                        <Box>
                          <Text>Name</Text>
                          <Text>Date</Text>
                        </Box>
                      </Box>
                      {/* <RestaurantItem /> */}
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </form>
            </Card>
          </Box>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default BookingDrawer;
