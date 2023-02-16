import { Grid, Box } from "@mantine/core";
import { Image } from "@mantine/core";
import popularData from "./components/data";
import useStyles from "./Style/popularCartStyle";

const PopularCart = () => {
  const { classes } = useStyles();

  return (
    <Grid className={classes.section}>
      {popularData?.map((item: any) => (
        <Grid.Col md={6} lg={3} key={item.id} className={classes.container}>
          <Box className={classes.cart}>
            <Image
              radius="md"
              src={item.image}
              alt="Random unsplash image"
              className={classes.image}
            />
          </Box>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default PopularCart;
