import { Grid, Box } from "@mantine/core";
import { Image } from "@mantine/core";
import popularData from "./components/data";
import useStyles from "./Style/popularCartStyle";

const PopularCart = () => {
  const { classes } = useStyles();

  return (
    <Grid className={classes.section} px={10}>
      {popularData?.map((item: any) => (
        <Grid.Col
          md={6}
          lg={3}
          sm={6}
          key={item.id}
          className={classes.container}
        >
          <Box className={classes.cart}>
            <Image
              radius="md"
              src={item.image.src}
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
