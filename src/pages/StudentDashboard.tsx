import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorMode,
  useColorModeValue,
  VStack,
  Tab,
  Icon,
  Tooltip,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FaBook, FaClipboard, FaGraduationCap, FaCode } from "react-icons/fa";
import AssignmentPanelStudent from "../components/AssignmentPanelStudent";
import CoursePanelStudent from "../components/CoursePanelStudent";
import GradePanelStudent from "../components/GradePanelStudent";
import Playground from "../components/Playground";
import QuizPanelStudent from "../components/QuizPanelStudent";
import { CgProfile } from "react-icons/cg";

const StudentDashboard = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const headingColor = useColorModeValue("purple.600", "purple.300");
  const tabBgColor = useColorModeValue("gray.200", "gray.800");

  const sidebarWidth = { base: "70px", md: "200px" };

  return (
    <Box minH="100vh" bg={bgColor}>
      <Flex direction="column" h="100vh">
        <HStack justifyContent="space-between" p={4}>
          <Heading size={{ base: "md", md: "lg" }} color={headingColor}>
            Student Dashboard
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
                <Tooltip label="My Courses" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaBook} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        My Courses
                      </Text>
                    </Flex>
                  </Tab>
                </Tooltip>
                <Tooltip label="Assignments" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaClipboard} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        Assignments
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
                        Playground
                      </Text>
                    </Flex>
                  </Tab>
                </Tooltip>
                <Tooltip label="Grades" placement="right">
                  <Tab>
                    <Flex alignItems="center">
                      <Icon as={FaGraduationCap} boxSize={5} mr={3} />
                      <Text display={{ base: "none", md: "block" }}>
                        Grades
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
                  <CoursePanelStudent />
                </TabPanel>
                <TabPanel>
                  <AssignmentPanelStudent />
                </TabPanel>
                <TabPanel>
                  <QuizPanelStudent />
                </TabPanel>
                <TabPanel>
                  <Playground />
                </TabPanel>
                <TabPanel>
                  <GradePanelStudent />
                </TabPanel>
              </TabPanels>
            </Box>
          </Tabs>
        </Flex>
      </Flex>
    </Box>
  );
};

export default StudentDashboard;
