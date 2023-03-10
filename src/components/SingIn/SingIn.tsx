import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Box,
} from "@mantine/core";
import { IoIosCloseCircle } from "react-icons/io";
// import { GoogleButton, TwitterButton } from "../SocialButtons/SocialButtons";

const SignIn: React.FC<{
  signIn: () => void;
}> = ({ signIn }, props: PaperProps) => {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        zIndex: 99,
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <IoIosCloseCircle
        size={32}
        onClick={() => signIn()}
        style={{
          color: "#FFC527",
          position: "absolute",
          top: 20,
          left: 15,
          cursor: "pointer",
        }}
      />
      <Paper
        radius="md"
        p="xl"
        withBorder
        {...props}
        sx={{ width: "35%", margin: "10% auto", height: "0 auto" }}
      >
        <Group position="center">
          <Text size="xl" weight={700}>
            Instruduction
          </Text>
        </Group>

        <Group grow mb="md" mt="md">
          <Button radius="xl">Google</Button>
          <Button radius="xl">Twitter</Button>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            {type === "register" && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />

            {type === "register" && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue("terms", event.currentTarget.checked)
                }
              />
            )}
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit">{upperFirst(type)}</Button>
          </Group>
        </form>
      </Paper>
    </Box>
  );
};

export default SignIn;
