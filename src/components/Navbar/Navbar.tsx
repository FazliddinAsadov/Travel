import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Group,
  Header,
  Menu,
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
import { IconUserCircle, IconUser } from "@tabler/icons-react";

const HEADER_HEIGHT = 75;

const Navbar: React.FC<{
  signIn: () => void;
}> = ({ signIn }) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();
  const router = useRouter();

  const [activeId, setActiveId] = useState(0);

  const handleSignIn = () => {
    router.push("/signin");
  };
  const handleSignUp = () => {
    router.push("/signup");
  };
  const items = navLink.map((item: any) => (
    <Link
      key={item.title}
      href={item.link}
      onClick={() => {
        setActiveId(item.id);
        close();
      }}
      className={cx(classes.link, {
        [classes.linkActive]: item.id === activeId,
      })}
    >
      <Text>{item.title}</Text>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Box className={classes.header}>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
          mx={8}
        />
        <Text className={classes.title}>Namangan_Travel</Text>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

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
      <Menu position="left-start">
        <Menu.Target>
          <ActionIcon mx={20}>
            <IconUserCircle size={36} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item onClick={handleSignIn} icon={<IconUser />}>
            Sign In
          </Menu.Item>
          <Menu.Item onClick={handleSignUp} icon={<IconUser />}>
            Sign Up
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Header>
  );
};
export default Navbar;
