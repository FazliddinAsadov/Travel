import { useState } from "react";
import { ActionIcon, Box, Group, Text } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsInstagram, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import useStyles from "./Style/footerStyle";
import footerLocaleEn from "./locale";

interface FooterCenteredProps {
  links: { id: number; title: string; link: string }[];
}

export const Footer = ({ links }: FooterCenteredProps) => {
  const { classes, cx } = useStyles();
  const [activeId, setActiveId] = useState(0);
  const router = useRouter();

  const items = links.map((item) => (
    <Link
      key={item.id}
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
    <Box className={classes.footer}>
      <Box className={classes.inner}>
        <Text className={classes.title}> {footerLocaleEn.title}</Text>

        <Group position="center">{items}</Group>

        <Group spacing="xs" position="right" noWrap className={classes.icon}>
          <ActionIcon size="lg" variant="default" radius="xl">
            <Link href="https://t.me/fazliddin020">
              <BsTelegram className={classes.icon} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <BsInstagram className={classes.icon} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <BsTwitter className={classes.icon} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <Link href="https://www.youtube.com/channel/UC3ZgyarDrB2vBEMMZGyZe_w">
              <BsYoutube className={classes.icon} />
            </Link>
          </ActionIcon>
        </Group>
      </Box>
    </Box>
  );
};
