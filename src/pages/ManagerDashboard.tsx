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
  Text,
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
  Icon,
  useColorModeValue,
  Badge,
  HStack,
  useColorMode,
  Tooltip,
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
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CgProfile } from "react-icons/cg";

const schema = z.object({
  name: z.string().min(1, { message: "This field is required" }),
  email: z.string().min(1, { message: "This field is required" }),
});

type FormData = z.infer<typeof schema>;

const ManagerDashboardb = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [admins, setAdmins] = useState<string[]>([]);
  const [newAdmin, setNewAdmin] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const headingColor = useColorModeValue("purple.600", "purple.300");
  const sidebarWidth = { base: "70px", md: "200px" };
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
    <Box minH="100vh">
      <Flex direction={"column"} h="100vh">
        <HStack justifyContent="space-between" p={4}>
          <Heading size={{ base: "md", md: "lg" }} color={headingColor}>
            Hello Azu
          </Heading>
          <HStack>
            <Button variant="outline">
              <CgProfile />
            </Button>
            <Button onClick={toggleColorMode} variant="outline">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </HStack>
        <Flex flex={1} overflow={"hidden"}>
          <Tabs
            variant="soft-rounded"
            size="md"
            orientation="vertical"
            display="flex"
            flexDirection="row"
            h="100%"
            width="100%"
          >
            <VStack
              spacing={4}
              bg={tabBgColor}
              height="100%"
              p={4}
              borderRadius="md"
              alignItems="flex-start"
              minW={sidebarWidth}
              transition="min-width 0.3s ease, opacity 0.3s ease, bg 0.3s ease"
              overflowY="auto"
            >
              <TabList>
                <Tooltip label="Manage Admins" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaUserPlus} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        Manage Admins
                      </Text>
                    </Flex>
                  </Tab>
                </Tooltip>
                <Tooltip label="Institution Details" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaBuilding} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        Institution Details
                      </Text>
                    </Flex>
                  </Tab>
                </Tooltip>
                <Tooltip label="Payment Information" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaCreditCard} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        Payment Information
                      </Text>
                    </Flex>
                  </Tab>
                </Tooltip>
              </TabList>
            </VStack>

            <Box
              flex={1}
              overflowY="auto"
              p={4}
              width={{
                base: `calc(100% - ${sidebarWidth.base})`,
                md: `calc(100% - ${sidebarWidth.md})`,
              }}
            >
              <TabPanels>
                <TabPanel>
                  <VStack align="stretch" spacing={6}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                      <Flex gap={2}>
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
            </Box>
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
        </Flex>
      </Flex>
    </Box>
  );
};

export default ManagerDashboardb;
