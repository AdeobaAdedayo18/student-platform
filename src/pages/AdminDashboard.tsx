// AdminDashboard.tsx
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
  useToast,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Icon,
  useColorModeValue,
  Badge,
  Avatar,
  HStack,
  Text,
  Tooltip,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  useColorMode,
} from "@chakra-ui/react";
import { FaUserPlus, FaChartBar, FaHeadset, FaTrash } from "react-icons/fa";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";
import { useForm } from "react-hook-form";
import EditManagerProfile from "../components/EditManagerProfile";

interface User {
  id: number;
  name: string;
  email: string;
  role: "teacher" | "student";
}

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  userType: z.string().min(1, { message: "User type is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email format"),
});

type FormData = z.infer<typeof schema>;

const AdminDashboard: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "student" as "teacher" | "student",
  });
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const toast = useToast();
  const headingColor = useColorModeValue("teal.600", "teal.300");
  const sidebarWidth = { base: "70px", md: "200px" };
  const tabBgColor = useColorModeValue("teal.50", "gray.700");

  const onSubmit = (data: FormData) => {
    handleAddUser();
    console.log(data);

    reset();
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
      setNewUser({ name: "", email: "", role: "student" });
      toast({
        title: `${
          newUser.role.charAt(0).toUpperCase() + newUser.role.slice(1)
        } added`,
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleRemoveUser = (user: User) => {
    setUserToDelete(user);
    setIsDeleteDialogOpen(true);
  };

  const confirmRemoveUser = () => {
    if (userToDelete) {
      setUsers(users.filter((user) => user.id !== userToDelete.id));
      toast({
        title: "User removed successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    setIsDeleteDialogOpen(false);
    setUserToDelete(null);
  };

  return (
    <Box minH="100vh">
      <Flex direction="column" h="100vh">
        <HStack justifyContent="space-between" p={4}>
          <Heading size={{ base: "md", md: "lg" }} color={headingColor}>
            Admin Dashboard
          </Heading>
          <HStack>
            <EditManagerProfile />
            <Button onClick={toggleColorMode} variant="outline">
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>
        </HStack>

        <Flex flex={1} overflow="hidden">
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
                <Tooltip label="Add Users" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaUserPlus} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        Add Users
                      </Text>
                    </Flex>
                  </Tab>
                </Tooltip>
                <Tooltip label="Analytics" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaChartBar} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        Analytics
                      </Text>
                    </Flex>
                  </Tab>
                </Tooltip>
                <Tooltip label="Technical Support" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaHeadset} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        Technical Support
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Flex gap={2}>
                        <Flex width="100%" flexDirection="column">
                          <Input
                            placeholder="Name"
                            {...register("name")}
                            value={newUser.name}
                            onChange={(e) =>
                              setNewUser({ ...newUser, name: e.target.value })
                            }
                            size="lg"
                          />
                          {errors.name && (
                            <Text fontSize="sm" color="red.500">
                              {errors.name.message}
                            </Text>
                          )}
                        </Flex>

                        <Flex width="100%" flexDirection="column">
                          <Input
                            type="email"
                            placeholder="Email"
                            {...register("email")}
                            value={newUser.email}
                            onChange={(e) =>
                              setNewUser({ ...newUser, email: e.target.value })
                            }
                            size="lg"
                          />
                          {errors.email && (
                            <Text fontSize="sm" color="red.500">
                              {errors.email.message}
                            </Text>
                          )}
                        </Flex>

                        <Select
                          {...register("userType")}
                          value={newUser.role}
                          onChange={(e) =>
                            setNewUser({
                              ...newUser,
                              role: e.target.value as "teacher" | "student",
                            })
                          }
                          size="lg"
                        >
                          <option value="student">Student</option>
                          <option value="teacher">Teacher</option>
                        </Select>

                        <Button
                          colorScheme="teal"
                          width="100%"
                          size="lg"
                          type="submit"
                        >
                          Add User
                        </Button>
                      </Flex>
                    </form>

                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th>User</Th>
                          <Th>Email</Th>
                          <Th>Role</Th>
                          <Th>Action</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {users.map((user) => (
                          <Tr key={user.id}>
                            <Td>
                              <Flex align="center">
                                <Avatar size="sm" name={user.name} mr={2} />
                                {user.name}
                              </Flex>
                            </Td>
                            <Td>{user.email}</Td>
                            <Td>
                              <Badge
                                colorScheme={
                                  user.role === "teacher" ? "purple" : "green"
                                }
                              >
                                {user.role}
                              </Badge>
                            </Td>
                            <Td>
                              <Button
                                colorScheme="red"
                                size="sm"
                                onClick={() => handleRemoveUser(user)}
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
                  <Heading size="lg" mb={4}>
                    Analytics
                  </Heading>
                  {/* Add analytics content here */}
                </TabPanel>

                <TabPanel>
                  <Heading size="lg" mb={4}>
                    Technical Support
                  </Heading>
                  {/* Add technical support content here */}
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
              Remove User
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to remove {userToDelete?.name}? This action
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

export default AdminDashboard;
