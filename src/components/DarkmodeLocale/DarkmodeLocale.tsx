import DarkMode from "@components/darkMode/DarkLightMode";
import { Button, Drawer, NativeSelect } from "@mantine/core";
import React, { useState } from "react";

const DarkmodeLocale = () => {
  const [open, setOpen] = useState(false);

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
        <Button
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            marginTop: "50px",
            right: "320px",
            zIndex: "9999",
            transition: "0.3s"
          }}
        >
          Settings
        </Button>
      ) : (
        <Button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            marginTop: "50px",
            right: "5px",
            zIndex: "5",
            transition: "0.3s"
          }}
        >
          Settings
        </Button>
      )}
    </div>
  );
};

export default DarkmodeLocale;
