import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, AddIcon } from "@chakra-ui/icons";
import { FaBook, FaClipboard, FaGraduationCap, FaUser } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import CoursePanelTeacher from "../components/CoursePanelTeacher";
import AssignmentPanelTeacher from "../components/AssignmentPanelTeacher";
import GradePanelTeacher from "../components/GradePanelTeacher";

const TeacherDashboard = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [activeTab, setActiveTab] = useState<number>(0);

  const bgColor = useColorModeValue("gray.50", "gray.700");
  const cardBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("purple.600", "purple.300");

  // Mock data (replace with actual data fetching in the future)
  const courses = [
    { id: 1, title: "Introduction to React", students: 25 },
    { id: 2, title: "Advanced Python", students: 15 },
  ];

  const assessments = [
    {
      id: 1,
      title: "React Basics Quiz",
      course: "Introduction to React",
      dueDate: "2023-06-30",
    },
    {
      id: 2,
      title: "Python Project",
      course: "Advanced Python",
      dueDate: "2023-07-15",
    },
  ];

  const students = [
    { id: 1, name: "John Doe", course: "Introduction to React", grade: 85 },
    { id: 2, name: "Jane Smith", course: "Advanced Python", grade: 92 },
  ];

  const renderProfile = () => (
    <Card bg={cardBg}>
      <CardHeader>
        <Heading size="md">Teacher Profile</Heading>
      </CardHeader>
      <CardBody>
        <HStack spacing={8} alignItems="flex-start">
          <Avatar size="2xl" name="Teacher Name" />
          <VStack align="stretch" spacing={4} flex={1}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input defaultValue="Teacher Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input defaultValue="teacher@example.com" />
            </FormControl>
            <FormControl>
              <FormLabel>Institution</FormLabel>
              <Input defaultValue="Example University" isReadOnly />
            </FormControl>
          </VStack>
        </HStack>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">Update Profile</Button>
      </CardFooter>
    </Card>
  );

  return (
    <Box bg={bgColor} minH="100vh" p={6}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading size="lg" color={headingColor}>
          Teacher Dashboard
        </Heading>
        <HStack>
          <Button onClick={toggleColorMode} variant="outline">
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Button variant="outline">
            <CgProfile />
          </Button>
        </HStack>
      </Flex>

      <Tabs
        variant="soft-rounded"
        colorScheme="blue"
        onChange={(index) => setActiveTab(index)}
      >
        <TabList>
          <Tab>
            <Flex alignItems="center">
              <FaBook style={{ marginRight: "8px" }} />
              Courses
            </Flex>
          </Tab>
          <Tab>
            <Flex alignItems="center">
              <FaClipboard style={{ marginRight: "8px" }} />
              Assessments
            </Flex>
          </Tab>
          <Tab>
            <Flex alignItems="center">
              <FaGraduationCap style={{ marginRight: "8px" }} />
              Quizzes
            </Flex>
          </Tab>
          <Tab>
            <Flex alignItems="center">
              <FaUser style={{ marginRight: "8px" }} />
              Profile
            </Flex>
          </Tab>
        </TabList>
        <TabPanels mt={4}>
          <TabPanel>
            <CoursePanelTeacher></CoursePanelTeacher>
          </TabPanel>
          <TabPanel>
            <AssignmentPanelTeacher></AssignmentPanelTeacher>
          </TabPanel>
          <TabPanel>
            <GradePanelTeacher />
          </TabPanel>
          <TabPanel>{renderProfile()}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TeacherDashboard;
