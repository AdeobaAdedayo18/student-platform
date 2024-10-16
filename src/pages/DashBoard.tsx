import NavBar from "../components/NavBar";
import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";

const DashBoard = () => {
  const tabColor = useColorModeValue("blue.600", "blue.300");
  return (
    <>
      <Box padding={"20px"}>
        <NavBar></NavBar>
        <Tabs isFitted variant="enclosed-colored" size={"sm"}>
          <TabList>
            <Tab _selected={{ color: tabColor, bg: "gray.300" }}>Courses</Tab>
            <Tab>Assignments</Tab>
            <Tab>Quiz</Tab>
            <Tab>Grades</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Heading>COURSES</Heading>
            </TabPanel>
            <TabPanel>
              <Heading>ASSIGNMENT</Heading>
            </TabPanel>
            <TabPanel>
              <Heading>QUIZ</Heading>
            </TabPanel>
            <TabPanel>
              <Heading>GRADES</Heading>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default DashBoard;
