import { AspectRatio } from "@mantine/core";

type Props = {
  width: number;
  height: number;
};

const Maps = ({ width, height }: Props) => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5687.889101795378!2d71.59133464284177!3d40.924543097714505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1676886250121!5m2!1sen!2sru"
        width={width}
        height={height}
        loading="lazy"
      ></iframe>
    </AspectRatio>
  );
};
export default Maps;
