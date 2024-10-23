import { EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiLock, FiLogOut } from "react-icons/fi";
import { z } from "zod";

// Static data
const staticManager = {
  name: "John Doe",
  email: "john.doe@example.com",
  contact: "07037828718",
};

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  contact: z
    .string()
    .min(1, { message: "Contact is required" })
    .regex(/^\d+$/, { message: "Contact must contain only numbers" })
    .min(11, { message: "Contact must be 11 digits" })
    .max(11, { message: "Contact must be 11 digits" }),
});

type FormManagerProfile = z.infer<typeof schema>;

const EditManagerProfile = () => {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [manager, setManager] = useState(staticManager);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormManagerProfile>({
    resolver: zodResolver(schema),
    defaultValues: manager,
  });

  const onSubmit = (data: FormManagerProfile) => {
    // Simulate a delay to show loading state

    setManager(data);
    setIsEditProfileOpen(false);
    console.log(data);

    toast({
      title: "Profile updated successfully!",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const handleEditProfile = () => {
    setIsEditProfileOpen(true);
  };

  const handleChangePassword = () => {
    toast({
      title: "Password change functionality",
      description: "This feature is not implemented in this demo",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logout functionality",
      description: "This feature is not implemented in this demo",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <>
      <Modal
        isOpen={isEditProfileOpen}
        onClose={() => {
          setIsEditProfileOpen(false);
          reset();
        }}
        size="md"
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Edit Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel>Name</FormLabel>
                  <Input {...register("name")} size="md" />
                  {errors.name && (
                    <Text fontSize="sm" color="red.500">
                      {errors.name.message}
                    </Text>
                  )}
                </FormControl>

                <FormControl isInvalid={!!errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input {...register("email")} type="email" size="md" />
                  {errors.email && (
                    <Text fontSize="sm" color="red.500">
                      {errors.email.message}
                    </Text>
                  )}
                </FormControl>

                <FormControl isInvalid={!!errors.contact}>
                  <FormLabel>Contact</FormLabel>

                  <Input {...register("contact")} size="md" />

                  {errors.contact && (
                    <Text fontSize="sm" color="red.500">
                      {errors.contact.message}
                    </Text>
                  )}
                </FormControl>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                type="submit"
                mr={3}
                isLoading={isSubmitting}
                loadingText="Saving..."
              >
                Save
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setIsEditProfileOpen(false);
                  reset();
                }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Button variant="outline">
            <Avatar size="sm" name={manager.name} />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          bg={useColorModeValue("white", "gray.800")}
          borderColor={useColorModeValue("gray.200", "gray.600")}
          boxShadow="lg"
          _focus={{ boxShadow: "none" }}
          width="250px"
        >
          <PopoverArrow bg={useColorModeValue("white", "gray.800")} />
          <PopoverCloseButton />
          <PopoverHeader
            borderBottomWidth="1px"
            fontWeight="bold"
            fontSize="md"
            p={4}
          >
            Profile
          </PopoverHeader>
          <PopoverBody p={4}>
            <VStack align="stretch" spacing={4}>
              <Box>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  Name
                </Text>
                <Text fontSize="md" fontWeight="medium">
                  {manager.name}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  Email
                </Text>
                <Text fontSize="md" fontWeight="medium">
                  {manager.email}
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.600", "gray.400")}
                >
                  Contact
                </Text>
                <Text fontSize="md" fontWeight="medium">
                  {manager.contact}
                </Text>
              </Box>
              <Button
                leftIcon={<EditIcon />}
                colorScheme="blue"
                size="sm"
                onClick={handleEditProfile}
                width="full"
              >
                Edit Profile
              </Button>
              <Button
                leftIcon={<FiLock />}
                colorScheme="blue"
                size="sm"
                onClick={handleChangePassword}
                width="full"
              >
                Change Password
              </Button>
              <Button
                leftIcon={<FiLogOut />}
                colorScheme="red"
                size="sm"
                onClick={handleLogout}
                width="full"
              >
                Logout
              </Button>
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default EditManagerProfile;
