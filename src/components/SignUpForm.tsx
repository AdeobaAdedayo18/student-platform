import {
  Box,
  Button,
  FormLabel,
  Heading,
  HStack,
  Input,
  Icon,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";

import { useForm } from "react-hook-form";
import { FaUserGraduate } from "react-icons/fa";

const schema = z
  .object({
    lastname: z.string().min(1, { message: "This field is required" }),
    firstname: z.string().min(1, { message: "This field is required" }),
    institution: z.string().min(1, { message: "This field is required" }),
    userType: z.string().min(1, { message: "This field is required" }),
    email: z.string().min(1, { message: "This field is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be atleast 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

type FormData = z.infer<typeof schema>;

const SignUpForm = () => {
  const [userType, setUserType] = useState("student");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <Box flex={"1"} padding={5}>
      {/* THe header */}
      <Heading color={"brand.400"} mb={"1.5"}>
        Create Your Account
      </Heading>
      {/* Building the form */}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <HStack spacing={"30px"} marginBottom={1.5} width={"100%"}>
          <VStack alignItems={"flex-start"}>
            <FormLabel fontSize={"sm"}>Last Name</FormLabel>
            <Input
              {...register("lastname")}
              id="lastname"
              placeholder="Last name"
              width={"100%"}
            ></Input>
            {errors.lastname && (
              <p style={{ fontSize: "11px", color: "red" }}>
                {errors.lastname.message}
              </p>
            )}
          </VStack>

          <VStack alignItems={"flex-start"}>
            <FormLabel fontSize={"sm"}>First Name</FormLabel>
            <Input
              {...register("firstname")}
              id="firstname"
              placeholder="First name"
              width={"100%"}
            ></Input>
            {errors.firstname && (
              <p style={{ fontSize: "11px", color: "red" }}>
                {errors.firstname.message}
              </p>
            )}
          </VStack>
        </HStack>

        <VStack alignItems={"flex-start"} spacing={"-130"} marginBottom={5}>
          <FormLabel fontSize={"sm"}>Email</FormLabel>
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Email (Use your student email)"
          ></Input>
          {errors.email && (
            <p style={{ fontSize: "11px", color: "red" }}>
              {errors.email.message}
            </p>
          )}
        </VStack>

        <HStack spacing={"30px"} marginBottom={1.5}>
          <VStack alignItems={"flex-start"} spacing={"-130"}>
            <FormLabel fontSize={"sm"}>I study at</FormLabel>

            <Select
              {...register("institution")}
              placeholder="Select your University"
            >
              <option value="Covenant University">Covenant University</option>
              <option value="Landmark University">Landmark University</option>
              <option value="Babcock University">Babcock University</option>
              <option value="Lead City University">Lead City University</option>
              <option value="Crawford University">Crawford University</option>
            </Select>
            {errors.institution && (
              <p style={{ fontSize: "11px", color: "red" }}>
                {errors.institution.message}
              </p>
            )}
          </VStack>

          <VStack alignItems={"flex-start"} spacing={"-130"}>
            <FormLabel fontSize={"sm"}>I am</FormLabel>
            <Select
              {...register("userType")}
              placeholder="Select User Type"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="Student">a Student</option>
              <option value="Instructor">an Instructor</option>
            </Select>
            {errors.userType && (
              <p style={{ fontSize: "11px", color: "red" }}>
                {errors.userType.message}
              </p>
            )}
          </VStack>
        </HStack>

        <FormLabel fontSize={"sm"}>Password</FormLabel>
        <InputGroup size="md" marginBottom={1.5} width={"auto"}>
          <Input
            {...register("password")}
            id="password"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />{" "}
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
        <FormLabel fontSize={"sm"}>Confirm Password</FormLabel>
        <InputGroup size="md" mb={5}>
          <Input
            {...register("confirmPassword")}
            id="confirmPassword"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter your password"
          />
          {errors.confirmPassword && (
            <p style={{ fontSize: "11px", color: "red" }}>
              {errors.confirmPassword.message}
            </p>
          )}
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          colorScheme="brand"
          size={"lg"}
          width={"100%"}
          mb={2}
          type="submit"
          leftIcon={<Icon as={FaUserGraduate} />}
        >
          Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
        </Button>
      </form>
      <Text fontSize={"sm"}>
        Already have an account{" "}
        <Text _hover={{ textDecor: "underline" }}>
          <Link to={"/login"}>log in</Link>
        </Text>
      </Text>
    </Box>
  );
};

export default SignUpForm;
