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
  Container,
  Icon,
  useColorModeValue,
  Badge,
  Avatar,
} from "@chakra-ui/react";
import { FaUserPlus, FaFileUpload, FaTrash } from "react-icons/fa";

import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { z } from "zod";
import { useForm } from "react-hook-form";

interface User {
  id: number;
  name: string;
  email: string;
  role: "teacher" | "student";
}

const schema = z.object({
  name: z.string().min(1, { message: "This field is required" }),
  userType: z.string().min(1, { message: "This field is required" }),
  email: z.string().min(1, { message: "This field is required" }),
});

type FormData = z.infer<typeof schema>;

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "student" as "teacher" | "student",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const toast = useToast();

  const bgColor = useColorModeValue("white", "gray.800");
  const headerColor = useColorModeValue("teal.600", "teal.300");
  const tabBgColor = useColorModeValue("teal.50", "gray.700");
  const hoverBgColor = useColorModeValue("teal.100", "gray.600");

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
      });
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Here you would handle the file upload and processing
    toast({
      title: "File uploaded",
      description: "User list has been updated",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleRemoveUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
    toast({
      title: "User removed",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box bg={bgColor} minHeight="100vh" py={8}>
      <Container maxW="container.xl">
        <Heading mb={8} color={headerColor} fontSize="4xl" textAlign="center">
          Admin Dashboard
        </Heading>
        <Tabs variant="soft-rounded" colorScheme="teal">
          <TabList mb={8} justifyContent="center">
            <Tab _selected={{ bg: tabBgColor }} _hover={{ bg: hoverBgColor }}>
              <Icon as={FaUserPlus} mr={2} />
              Manage Users
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <VStack align="stretch" spacing={6}>
                <Flex>
                  <Input
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) =>
                      setNewUser({ ...newUser, name: e.target.value })
                    }
                    mr={2}
                    size="lg"
                  />
                  <Input
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                    mr={2}
                    size="lg"
                  />
                  <Select
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        role: e.target.value as "teacher" | "student",
                      })
                    }
                    mr={2}
                    size="lg"
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </Select>
                  <Button
                    colorScheme="teal"
                    onClick={handleAddUser}
                    size="lg"
                    width={"100%"}
                  >
                    Add User
                  </Button>
                </Flex>
                <Button
                  as="label"
                  htmlFor="file-upload"
                  colorScheme="blue"
                  size="lg"
                  leftIcon={<Icon as={FaFileUpload} />}
                >
                  Upload User List
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
                            onClick={() => handleRemoveUser(user.id)}
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
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
