import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  Icon,
  Badge,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  HStack,
  Avatar,
  Progress,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaBook,
  FaClipboard,
  FaGraduationCap,
  FaUser,
  FaSearch,
  FaBell,
} from "react-icons/fa";
import CoursePanelStudent from "../components/CoursePanelStudent";
import AssignmentPanelStudent from "../components/AssignmentPanelStudent";
import QuizPanelStudent from "../components/QuizPanelStudent";

const StudentDashboard: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.700");

  const textColor = useColorModeValue("gray.700", "white");
  const [activeTab, setActiveTab] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Static data (same as before)
  const courses = [
    {
      id: 1,
      title: "Introduction to React",
      instructor: "Jane Doe",
      progress: 60,
    },
    { id: 2, title: "Advanced Django", instructor: "John Smith", progress: 30 },
    {
      id: 3,
      title: "Machine Learning Basics",
      instructor: "Alice Johnson",
      progress: 45,
    },
  ];

  const assessments = [
    {
      id: 1,
      title: "React Project",
      dueDate: "2023-12-01",
      course: "Introduction to React",
      status: "Pending",
    },
    {
      id: 2,
      title: "Django REST Framework",
      dueDate: "2023-12-15",
      course: "Advanced Django",
      status: "Submitted",
    },
    {
      id: 3,
      title: "ML Model Implementation",
      dueDate: "2023-12-20",
      course: "Machine Learning Basics",
      status: "Pending",
    },
  ];

  const quizzes = [
    {
      id: 1,
      title: "React Basics Quiz",
      timeLimit: 30,
      course: "Introduction to React",
      score: null,
    },
    {
      id: 2,
      title: "Django Models Quiz",
      timeLimit: 20,
      course: "Advanced Django",
      score: 85,
    },
    {
      id: 3,
      title: "ML Algorithms Quiz",
      timeLimit: 45,
      course: "Machine Learning Basics",
      score: null,
    },
  ];

  const renderCourses = () => (
    <VStack spacing={4} align="stretch">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FaSearch color="gray.300" />}
        />
        <Input
          placeholder="Search courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      <Grid
        templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={4}
      >
        {courses
          .filter((course) =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((course) => (
            <GridItem key={course.id}>
              <Card>
                <CardHeader>
                  <Heading size="sm">{course.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Text fontSize="sm" color="gray.500">
                    Instructor: {course.instructor}
                  </Text>
                  <Progress
                    value={course.progress}
                    size="sm"
                    colorScheme="blue"
                    mt={2}
                  />
                </CardBody>
                <CardFooter>
                  <Text fontSize="xs">{course.progress}% Complete</Text>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
      </Grid>
    </VStack>
  );

  const renderProfile = () => (
    <Card>
      <CardHeader>
        <Heading size="md">Student Profile</Heading>
      </CardHeader>
      <CardBody>
        <VStack spacing={4} align="start">
          <HStack>
            <Avatar
              size="xl"
              name="John Doe"
              src="https://bit.ly/broken-link"
            />
            <Box>
              <Text fontSize="xl" fontWeight="bold">
                John Doe
              </Text>
              <Text>Student ID: 12345</Text>
              <Text>Email: john.doe@example.com</Text>
            </Box>
          </HStack>
          <Text fontWeight="bold">Institution: Example University</Text>
          <Text>Enrolled Courses: {courses.length}</Text>
          <Text>
            Completed Assessments:{" "}
            {assessments.filter((a) => a.status === "Submitted").length}
          </Text>
          <Text>
            Average Quiz Score:{" "}
            {quizzes
              .filter((q) => q.score !== null)
              .reduce((acc, q) => acc + q.score!, 0) /
              quizzes.filter((q) => q.score !== null).length}
            %
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );

  return (
    <Box bg={bgColor} minH="100vh" p={6}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Heading size="lg" color={textColor}>
          Student Dashboard
        </Heading>
        <Flex>
          <Button
            onClick={toggleColorMode}
            mr={4}
            aria-label="Toggle Color Mode"
          >
            <Icon as={colorMode === "light" ? FaMoon : FaSun} />
          </Button>
          <Button aria-label="Notifications" mr={4}>
            <Icon as={FaBell} />
          </Button>
          <Button aria-label="Profile">
            <Avatar
              size="sm"
              name="John Doe"
              src="https://bit.ly/broken-link"
            />
          </Button>
        </Flex>
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

        <TabPanels>
          <TabPanel>
            <CoursePanelStudent></CoursePanelStudent>
          </TabPanel>
          <TabPanel>
            <AssignmentPanelStudent></AssignmentPanelStudent>
          </TabPanel>
          <TabPanel>
            <QuizPanelStudent></QuizPanelStudent>
          </TabPanel>
          <TabPanel>{renderProfile()}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default StudentDashboard;
