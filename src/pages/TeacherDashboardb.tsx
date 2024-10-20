import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  useColorMode,
  useColorModeValue,
  Flex,
  HStack,
  Heading,
  Button,
  Tabs,
  VStack,
  TabList,
  Tooltip,
  Tab,
  Text,
  Icon,
  Box,
  TabPanels,
  TabPanel,
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaBook, FaClipboard, FaGraduationCap, FaCode } from "react-icons/fa";
import AssignmentPanelStudent from "../components/AssignmentPanelStudent";
import CoursePanelStudent from "../components/CoursePanelStudent";
import GradePanelStudent from "../components/GradePanelStudent";
import Playground from "../components/Playground";
import QuizPanelStudent from "../components/QuizPanelStudent";
import GradePanelTeacher from "../components/GradePanelTeacher";
import AssignmentPanelTeacher from "../components/AssignmentPanelTeacher";
import CoursePanelTeacher from "../components/CoursePanelTeacher";

const TeacherDashboardb = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const headingColor = useColorModeValue("purple.600", "purple.300");
  const tabBgColor = useColorModeValue("gray.200", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const sidebarWidth = { base: "70px", md: "200px" };
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
    <Box minH="100vh" bg={bgColor}>
      <Flex direction="column" h="100vh">
        <HStack justifyContent="space-between" p={4}>
          <Heading size={{ base: "md", md: "lg" }} color={headingColor}>
            Teacher Dashboard
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
                <Tooltip label="Courses" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaBook} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        Courses
                      </Text>
                    </Flex>
                  </Tab>
                </Tooltip>
                <Tooltip label="Assessments" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaClipboard} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        Assessments
                      </Text>
                    </Flex>
                  </Tab>
                </Tooltip>
                <Tooltip label="Quizzes" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaGraduationCap} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        Quizzes
                      </Text>
                    </Flex>
                  </Tab>
                </Tooltip>
                <Tooltip label="Playground" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaCode} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        Profile
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
                  <CoursePanelTeacher />
                </TabPanel>
                <TabPanel>
                  <AssignmentPanelTeacher />
                </TabPanel>

                <TabPanel>
                  <GradePanelTeacher />
                </TabPanel>
                <TabPanel>{renderProfile()}</TabPanel>
              </TabPanels>
            </Box>
          </Tabs>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TeacherDashboardb;
