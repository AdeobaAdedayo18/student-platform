// ManagerDashboard.tsx
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { FaBuilding, FaCreditCard, FaTrash, FaUserPlus } from "react-icons/fa";
import { z } from "zod";
import unilog from "../assets/START YOUR CODING JOURNEY TODAY (1).svg";
import EditManagerProfile from "../components/EditManagerProfile";
import EditInstitutionProfile from "../components/EditInstitutionProfile";

const schema = z.object({
  email: z.string().min(1, { message: "This field is required" }),
});

type FormData = z.infer<typeof schema>;

const ManagerDashboard = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const initialInstitution = {
    logo: "https://example.com/logo.png", // Replace with an actual logo URL
    name: "Example University",
    phone: "+1 (123) 456-7890",
    email: "info@exampleuniversity.edu",
  };
  const [admins, setAdmins] = useState<string[]>([]);
  const [newAdmin, setNewAdmin] = useState("");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [adminToDelete, setAdminToDelete] = useState<string | null>(null);
  const cancelRef = React.useRef<HTMLButtonElement>(null);
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

  const handleRemoveUser = (admin) => {
    setAdminToDelete(admin);
    setIsDeleteDialogOpen(true);
  };

  const confirmRemoveUser = () => {
    if (adminToDelete) {
      toast({
        title: "Admin Successfully removed from list",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    setIsDeleteDialogOpen(false);
    setAdminToDelete(null);
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
        position: "top",
      });
    }
  };

  return (
    <Box minH="100vh">
      <Flex direction={"column"} h="100vh">
        <HStack justifyContent="space-between" p={4}>
          <Heading size={{ base: "md", md: "lg" }} color={headingColor}>
            Hello Azu
          </Heading>
          <HStack>
            <EditManagerProfile />
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

                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>Admin Email</Th>
                          <Th>Status</Th>
                          <Th>Action</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {admins.map((admin, index) => (
                          <Tr key={index}>
                            <Td>
                              <Flex align="center">
                                <Avatar size="sm" name={admin} mr={2} />
                                {admin}
                              </Flex>
                            </Td>
                            <Td>
                              <Badge colorScheme="green">Active</Badge>
                            </Td>
                            <Td>
                              <Button
                                colorScheme="red"
                                size="sm"
                                onClick={() => handleRemoveUser(admin)}
                                leftIcon={<Icon as={FaTrash} />}
                              >
                                Remove
                              </Button>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </VStack>
                </TabPanel>
                <TabPanel>
                  <EditInstitutionProfile />
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
        </Flex>
      </Flex>
      <AlertDialog
        isOpen={isDeleteDialogOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsDeleteDialogOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remove Admin
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to remove {adminToDelete}? This action
              cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelRef}
                onClick={() => setIsDeleteDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button colorScheme="red" onClick={confirmRemoveUser} ml={3}>
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default ManagerDashboard;
