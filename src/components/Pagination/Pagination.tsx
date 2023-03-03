import { Pagination } from "@mantine/core";

const Pagenation = () => {
  return (
    <Pagination
      total={10}
      position="center"
      styles={(theme) => ({
        item: {
          "&[data-active]": {
            backgroundImage: theme.fn.gradient({ from: "red", to: "yellow" }),
          },
        },
      })}
    />
  );
};

export default Pagenation;
