import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

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
      {dark ? <CiDark /> : <MdDarkMode />}
    </ActionIcon>
  );
};
export default DarkMode;
