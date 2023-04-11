import React, { useRef } from "react";
import carRentalsLocaleUz from "./locale";
import CarHeader from "./components/Header/Header";
import TextPart from "@components/Text/TextPart";
import { ActionIcon, Autocomplete, Box, Button, Grid } from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import useCarRentStyle from "./Style/useCarRentStyle";
import { IconClock } from "@tabler/icons-react";

type Props = {};

const CarRentals = (props: Props) => {
  const { classes } = useCarRentStyle();
  const ref = useRef<HTMLInputElement>();
  console.log(ref.current);

  const form = useForm({
    initialValues: {
      address: "",
      date: [],
      room: "",
      person: "",
    },
  });

  return (
    <>
      <CarHeader />
      <Box className={classes.inputBox} py={35}>
        <Grid mx={"auto"}>
          <Grid.Col lg={3}>
            <Autocomplete
              placeholder="Enter your Address"
              label="Address"
              withAsterisk
              data={["Namangan", "Chust", "Chortoq", "Pop"]}
              {...form.getInputProps("address")}
            />
          </Grid.Col>
          <Grid.Col lg={3}>
            <DatePickerInput
              label="Select Date"
              placeholder="Select Date"
              mx="auto"
              maw={400}
              sx={{ width: "100%" }}
              {...form.getInputProps("date")}
            />
          </Grid.Col>
          <Grid.Col lg={3}>
            <TimeInput
              label="Time"
              rightSection={
                <ActionIcon onClick={() => ref.current}>
                  <IconClock size="1rem" stroke={1.5} />
                </ActionIcon>
              }
              maw={400}
              mx="auto"
              {...form.getInputProps("time")}
            />
          </Grid.Col>
          <Grid.Col lg={3}>
            <Button>Submit</Button>
          </Grid.Col>
        </Grid>
      </Box>
      <TextPart
        title={carRentalsLocaleUz.servicesTitle}
        titleTwo={carRentalsLocaleUz.servicesTitleTwo}
      />

      <TextPart
        title={carRentalsLocaleUz.aboutTitle}
        titleTwo={carRentalsLocaleUz.aboutTitleTwo}
      />
    </>
  );
};
export default CarRentals;
