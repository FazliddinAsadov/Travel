import { ActionIcon, useMantineColorScheme } from "@mantine/core";

const DarkMode = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? 1 : 0}
    </ActionIcon>
  );
};
export default DarkMode;
