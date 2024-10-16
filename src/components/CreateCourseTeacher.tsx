import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  VStack,
  Input,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

const CreateCourseTeacher = () => {
  const [newCourseName, setNewCourseName] = useState("");

  const cardBgColor = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("purple.600", "purple.300");
  const btnBgColor = useColorModeValue("cyan.600", "cyan.400");

  const handleCourseCreation = () => {
    console.log("Creating course:", newCourseName);
    setNewCourseName("");
  };

  return (
    <>
      <Card
        bg={cardBgColor}
        shadow="lg"
        borderRadius="md"
        width={{ base: "sm", md: "sm" }}
      >
        <CardHeader>
          <Heading size="md" color={headingColor}>
            Create a New Course
          </Heading>
        </CardHeader>
        <CardBody>
          <VStack spacing={4}>
            <Input
              placeholder="Course Name"
              value={newCourseName}
              onChange={(e) => setNewCourseName(e.target.value)}
            />
            <Button
              bg={btnBgColor}
              color="white"
              onClick={handleCourseCreation}
              isDisabled={!newCourseName}
            >
              Create Course
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
};

export default CreateCourseTeacher;
