import {
  Box,
  Burger,
  Button,
  Group,
  Header,
  Paper,
  Text,
  Transition,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import navLink from "./components/data";
import navbarLocaleEn from "./locale";
import useStyles from "./styles/navStyle";

const HEADER_HEIGHT = 75;

const Navbar: React.FC<{
  signIn: () => void;
}> = ({ signIn }) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const router = useRouter();

  const [activeId, setActiveId] = useState(0);

  const items = navLink.map((item) => (
    <Link
      key={item.title}
      href={item.link}
      onClick={() => setActiveId(item.id)}
      className={cx(classes.link, {
        linkActive: item.link === router.pathname,
      })}
    >
      <Text>{item.title}</Text>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Box className={classes.header}>
        <Text className={classes.title}>Namangan_Travel</Text>
        <Group spacing={5} className={classes.links}>
          {items}
          <Button
            className={classes.btnBuoking}
            // onClick={() => signIn()}
          >
            {navbarLocaleEn.btn}
          </Button>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Box>
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            </Box>
          )}
        </Transition>
      </Box>
    </Header>
  );
};
export default Navbar;
