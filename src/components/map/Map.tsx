import { AspectRatio } from "@mantine/core";

const Maps = () => {
  return (
    <AspectRatio ratio={16 / 9} sx={{ width: "100%", height: "100vh" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5687.889101795378!2d71.59133464284177!3d40.924543097714505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1676886250121!5m2!1sen!2sru"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </AspectRatio>
  );
};
export default Maps;
