import { Tab } from "@chakra-ui/react";

const TabStudent = () => {
  return (
    <>
      <Tab
        _selected={{ color: "white", bg: "teal.400" }}
        _hover={{ bg: "teal.200" }}
        fontWeight="bold"
        borderRadius="md"
        mx={2}
      >
        My Courses
      </Tab>
      <Tab
        _selected={{ color: "white", bg: "orange.400" }}
        _hover={{ bg: "orange.200" }}
        fontWeight="bold"
        borderRadius="md"
        mx={2}
      >
        Assignments
      </Tab>
      <Tab
        _selected={{ color: "white", bg: "purple.400" }}
        _hover={{ bg: "purple.200" }}
        fontWeight="bold"
        borderRadius="md"
        mx={2}
      >
        Quizzes
      </Tab>
      <Tab
        _selected={{ color: "white", bg: "blue.400" }}
        _hover={{ bg: "blue.200" }}
        fontWeight="bold"
        borderRadius="md"
        mx={2}
      >
        Code Playground
      </Tab>
      <Tab
        _selected={{ color: "white", bg: "green.400" }}
        _hover={{ bg: "green.200" }}
        fontWeight="bold"
        borderRadius="md"
        mx={2}
      >
        Grades
      </Tab>
    </>
  );
};

export default TabStudent;
