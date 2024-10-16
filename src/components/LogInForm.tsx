import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  email: z.string().min(1, { message: "This field is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});

type FormData = z.infer<typeof schema>;
const LogInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const textColor = useColorModeValue("gray.600", "gray.200");

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate("/dashboard");
    reset();
  };
  const navigate = useNavigate();
  return (
    <Box flex={"1"} padding={5}>
      <Heading color={"brand.400"} mb={5}>
        Welcome Back
      </Heading>
      <Text color={textColor} mb={3}>
        Log in to continue your learning journey
      </Text>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <VStack alignItems={"flex-start"} spacing={"-130"} marginBottom={3}>
          <FormLabel>Email</FormLabel>
          <Input {...register("email")} id="email" placeholder="Email"></Input>
          {errors.email && (
            <p style={{ fontSize: "11px", color: "red" }}>
              {errors.email.message}
            </p>
          )}
        </VStack>
        <FormLabel fontSize={"sm"}>Password</FormLabel>
        <InputGroup marginBottom={10} width={"auto"}>
          <Input
            {...register("password")}
            id="password"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          {errors.password && (
            <p style={{ fontSize: "11px", color: "red" }}>
              {errors.password.message}
            </p>
          )}
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          type="submit"
          colorScheme="brand"
          size={"lg"}
          width={"100%"}
          mb={4}
        >
          Log In
        </Button>
        <Text textAlign={"left"} mb={4}>
          <Link to="/forgot-password">Forgot password?</Link>
        </Text>
      </form>
      <Text fontSize={"sm"} textAlign={"right"}>
        You don't have an account{" "}
        <Text _hover={{ textDecor: "underline" }}>
          <Link to={"/signup"}>Sign Up</Link>
        </Text>
      </Text>
    </Box>
  );
};

export default LogInForm;
