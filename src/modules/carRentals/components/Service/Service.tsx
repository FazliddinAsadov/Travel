import { createStyles, Text, Group, Button, Flex, Center } from "@mantine/core";
import ServiceData from "./component/data";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: "50px",
  },
  group: {
    marginTop: "50px",
  },
  title: {
    fontWeight: 500,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
    width: "300px",
  },

  body: {
    padding: theme.spacing.md,
  },
  imgBox: {
    width: "250px",
    height: "250px",
    border: "1px solid white",
    borderRadius: "20px",
    textAlign: "center",
    paddingTop: "90px",
  },
}));

function ArticleCardVertical() {
  const { classes } = useStyles();
  return (
    <div>
      <Center>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "sm", sm: "xl" }}
          justify={{ base: "xl", xl: "center" }}
          className={classes.group}
        >
          {ServiceData.map((data: any) => {
            return (
              <Group spacing={0}>
                <div className={classes.imgBox}>
                  <h1>{data.imgBox.text}</h1>
                </div>
                <div className={classes.body}>
                  <Text
                    transform="uppercase"
                    color="dimmed"
                    weight={700}
                    size="lg"
                  >
                    {data.firstText}
                  </Text>
                  <Text className={classes.title} mt="xs" mb="md">
                    {data.secondText}
                  </Text>
                  <Button>{data.button}</Button>
                </div>
              </Group>
            );
          })}
        </Flex>
      </Center>
      <Center>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "sm", sm: "xl" }}
          justify={{ base: "xl", xl: "center" }}
          className={classes.group}
        >
          <div className={classes.imgBox}>
            <h1>image</h1>
          </div>
          <div className={classes.body}>
            <Text transform="uppercase" color="dimmed" weight={700} size="lg">
              Chauffer services
            </Text>
            <Text className={classes.title} mt="xs" mb="md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              quibusdam dignissimos nemo maxime aliquam harum necessitatibus,
              voluptatibus maiores accusamus pariatur. Culpa assumenda et
              asperiores nesciunt fugiat ut a?,
            </Text>
            <Button>Limouse booking</Button>
          </div>
        </Flex>
      </Center>
    </div>
  );
}
export default ArticleCardVertical;
