import React from "react";
import {
  Box,
  Flex,
  VStack,
  Heading,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
  IconButton,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import {
  FaBook,
  FaClipboard,
  FaGraduationCap,
  FaCode,
  FaTachometerAlt,
} from "react-icons/fa";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import AssignmentPanelStudent from "../components/AssignmentPanelStudent";
import CoursePanelStudent from "../components/CoursePanelStudent";
import GradePanelStudent from "../components/GradePanelStudent";
import Playground from "../components/Playground";
import QuizPanelStudent from "../components/QuizPanelStudent";

const StudentDashboardc = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTab, setSelectedTab] = React.useState("dashboard");

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const sidebarBg = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");

  const NavItem = ({
    icon,
    children,
    tabKey,
  }: {
    icon: React.ElementType;
    children: React.ReactNode;
    tabKey: string;
  }) => {
    const isActive = selectedTab === tabKey;
    const bgActive = useColorModeValue("purple.100", "purple.800");
    const colorActive = useColorModeValue("purple.800", "purple.100");

    return (
      <Flex
        align="center"
        px="4"
        py="3"
        cursor="pointer"
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        bg={isActive ? bgActive : "transparent"}
        color={isActive ? colorActive : textColor}
        _hover={{
          bg: bgActive,
          color: colorActive,
        }}
        onClick={() => setSelectedTab(tabKey)}
      >
        <Icon mr="4" fontSize="16" as={icon} />
        {children}
      </Flex>
    );
  };

  const SidebarContent = (
    <VStack
      h="full"
      w="full"
      borderRight="1px"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      bg={sidebarBg}
    >
      <Flex h="20" alignItems="center" justifyContent="space-between" px="4">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          StudentEDU
        </Text>
      </Flex>
      <VStack as="nav" spacing="1" w="full">
        <NavItem icon={FaTachometerAlt} tabKey="dashboard">
          Dashboard
        </NavItem>
        <NavItem icon={FaBook} tabKey="courses">
          My Courses
        </NavItem>
        <NavItem icon={FaClipboard} tabKey="assignments">
          Assignments
        </NavItem>
        <NavItem icon={FaGraduationCap} tabKey="quizzes">
          Quizzes
        </NavItem>
        <NavItem icon={FaCode} tabKey="playground">
          Playground
        </NavItem>
        <NavItem icon={FaGraduationCap} tabKey="grades">
          Grades
        </NavItem>
      </VStack>
    </VStack>
  );

  return (
    <Box minH="100vh" bg={bgColor}>
      <Box
        display={{ base: "none", md: "block" }}
        w="64"
        position="fixed"
        left="0"
        h="full"
      >
        {SidebarContent}
      </Box>
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Box w="full" h="full">
            {SidebarContent}
          </Box>
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 64 }} p="4">
        <Flex alignItems="center" justifyContent="space-between" mb="8">
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            variant="outline"
            aria-label="open menu"
            icon={<HamburgerIcon />}
          />
          <Heading size="lg" color={textColor}>
            {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
          </Heading>
          <Flex alignItems="center">
            <IconButton
              mr="2"
              aria-label={`Switch to ${
                colorMode === "light" ? "dark" : "light"
              } mode`}
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            />
            <Avatar
              size="sm"
              name="Student Name"
              src="https://bit.ly/broken-link"
            />
          </Flex>
        </Flex>
        <Box>
          {selectedTab === "dashboard" && (
            <Text>Welcome to your dashboard!</Text>
          )}
          {selectedTab === "courses" && <CoursePanelStudent />}
          {selectedTab === "assignments" && <AssignmentPanelStudent />}
          {selectedTab === "quizzes" && <QuizPanelStudent />}
          {selectedTab === "playground" && <Playground />}
          {selectedTab === "grades" && <GradePanelStudent />}
        </Box>
      </Box>
    </Box>
  );
};

export default StudentDashboardc;
