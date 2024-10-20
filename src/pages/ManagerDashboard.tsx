// ManagerDashboard.tsx
import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Container,
  Icon,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import {
  FaUserPlus,
  FaFileUpload,
  FaBuilding,
  FaCreditCard,
} from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";

const schema = z.object({
  name: z.string().min(1, { message: "This field is required" }),
  email: z.string().min(1, { message: "This field is required" }),
});

type FormData = z.infer<typeof schema>;

const ManagerDashboard: React.FC = () => {
  const [admins, setAdmins] = useState<string[]>([]);
  const [newAdmin, setNewAdmin] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FormData) => {
    console.log(data);
    handleAddAdmin();
    reset();
  };

  const bgColor = useColorModeValue("white", "gray.800");
  const headerColor = useColorModeValue("purple.600", "purple.300");
  const tabBgColor = useColorModeValue("purple.50", "gray.700");
  const hoverBgColor = useColorModeValue("purple.100", "gray.600");

  const handleAddAdmin = () => {
    if (newAdmin) {
      setAdmins([...admins, newAdmin]);
      setNewAdmin("");
      toast({
        title: "Admin added",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Here you would handle the file upload and processing
    toast({
      title: "File uploaded",
      description: "Admin list has been updated",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleSaveInstitutionDetails = () => {
    // Here you would save the institution details
    toast({
      title: "Institution details saved",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <Box bg={bgColor} minHeight="100vh" py={8}>
      <Container maxW="container.xl">
        <Heading mb={8} color={headerColor} fontSize="4xl" textAlign="center">
          Manager Dashboard
        </Heading>
        <Tabs variant="soft-rounded" colorScheme="purple">
          <TabList mb={8} justifyContent="center">
            <Tab _selected={{ bg: tabBgColor }} _hover={{ bg: hoverBgColor }}>
              <Icon as={FaUserPlus} mr={2} />
              Manage Admins
            </Tab>
            <Tab _selected={{ bg: tabBgColor }} _hover={{ bg: hoverBgColor }}>
              <Icon as={FaBuilding} mr={2} />
              Institution Details
            </Tab>
            <Tab _selected={{ bg: tabBgColor }} _hover={{ bg: hoverBgColor }}>
              <Icon as={FaCreditCard} mr={2} />
              Payment Information
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <VStack align="stretch" spacing={6}>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  <Flex gap={2}>
                    <Flex width={"100%"} flexDirection={"column"}>
                      <Input
                        placeholder="Enter admin email"
                        type="email"
                        {...register("email")}
                        value={newAdmin}
                        onChange={(e) => setNewAdmin(e.target.value)}
                        mr={2}
                        size="lg"
                      />
                      {errors.email && (
                        <p style={{ fontSize: "14px", color: "red" }}>
                          {errors.email.message}
                        </p>
                      )}
                    </Flex>

                    <Flex width={"100%"} flexDirection={"column"}>
                      <Input
                        placeholder="name"
                        {...register("name")}
                        mr={2}
                        size="lg"
                      />
                      {errors.name && (
                        <p style={{ fontSize: "14px", color: "red" }}>
                          {errors.name.message}
                        </p>
                      )}
                    </Flex>
                    <Button
                      colorScheme="purple"
                      width={"100%"}
                      size="lg"
                      type="submit"
                    >
                      Add Admin
                    </Button>
                  </Flex>
                </form>
                <Button
                  as="label"
                  htmlFor="file-upload"
                  colorScheme="teal"
                  size="lg"
                  leftIcon={<Icon as={FaFileUpload} />}
                >
                  Upload Admin List
                  <input
                    id="file-upload"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                </Button>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Admin Email</Th>
                      <Th>Status</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {admins.map((admin, index) => (
                      <Tr key={index}>
                        <Td>{admin}</Td>
                        <Td>
                          <Badge colorScheme="green">Active</Badge>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </VStack>
            </TabPanel>
            <TabPanel>
              <Button colorScheme="blue" onClick={onOpen} size="lg">
                Edit Institution Details
              </Button>
            </TabPanel>
            <TabPanel>
              <Heading size="lg" mb={4}>
                Payment Information
              </Heading>
              {/* Add payment information and management here */}
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Institution Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Institution Name</FormLabel>
                <Input
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                  size="lg"
                />
              </FormControl>
              {/* Add more institution details here */}
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={handleSaveInstitutionDetails}
              >
                Save
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default ManagerDashboard;
