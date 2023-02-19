import DarkMode from "@components/darkMode/DarkLightMode";
import { ActionIcon, Drawer, NativeSelect, Box } from "@mantine/core";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import useStyles from "./Style/DrawerStyle";

const DarkmodeLocale = () => {
  const [open, setOpen] = useState(false);
  const { classes } = useStyles();

  return (
    <div>
      <Drawer
        opened={open}
        onClose={() => setOpen(false)}
        padding="xl"
        size="md"
        position="right"
        transition="slide-left"
      >
        <DarkMode />
        <NativeSelect
          data={["English", "Uzbek"]}
          rightSectionWidth={40}
          style={{ width: "170px", marginTop: "20px" }}
        />
      </Drawer>
      {open ? (
        <Box onClick={() => setOpen(false)} className={classes.itemsOne}>
          <FiSettings size={24} />
        </Box>
      ) : (
        <Box onClick={() => setOpen(true)} className={classes.itemsTwo}>
          <FiSettings size={24} />
        </Box>
      )}
    </div>
  );
};

export default DarkmodeLocale;
