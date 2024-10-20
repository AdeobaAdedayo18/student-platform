import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  useToast,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
  Image,
  HStack,
  Box,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import imageSample from "../assets/START YOUR CODING JOURNEY TODAY (2).svg";
import CreateCourseModal, { CourseFormData } from "../pages/CreateCourseModal";

const teacherCourses = [
  {
    id: 1,
    name: "Advanced JavaScript",
    studentsEnrolled: 40,
    image: "https://example.com/javascript-course-image.jpg",
    duration: "10 weeks",
  },
  {
    id: 2,
    name: "React & Redux",
    studentsEnrolled: 35,
    image: "https://example.com/react-redux-course-image.jpg",
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: 2,
    name: "React & Redux",
    studentsEnrolled: 35,
    image: "https://example.com/react-redux-course-image.jpg",
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: 2,
    name: "React & Redux",
    studentsEnrolled: 35,
    image: "https://example.com/react-redux-course-image.jpg",
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: 2,
    name: "React & Redux",
    studentsEnrolled: 35,
    image: "https://example.com/react-redux-course-image.jpg",
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: 2,
    name: "React & Redux",
    studentsEnrolled: 35,
    image: "https://example.com/react-redux-course-image.jpg",
    duration: "8 weeks",
    level: "Intermediate",
  },
  // ... other courses
];

const CoursePanelTeacher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const handleCreateCourse = (courseData: CourseFormData) => {
    console.log("Creating course:", courseData);
    // TODO: Implement API call to create course
    toast({
      title: "Course created.",
      description: "Your course has been created.",
      status: "success",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
    onClose();
  };

  const cardBgColor = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("purple.600", "purple.300");
  const btnBgColor = useColorModeValue("cyan.600", "cyan.400");

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Heading size="md">Courses</Heading>
        <Button leftIcon={<AddIcon />} colorScheme="purple" onClick={onOpen}>
          Create Course
        </Button>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {teacherCourses.map((course) => (
          <Card
            key={course.id}
            bg={cardBgColor}
            shadow="lg"
            borderRadius="md"
            overflow="hidden"
          >
            {/* <Image
              src={course.image}
              alt={course.name}
              objectFit="cover"
              height="200px"
            /> */}
            <Image
              src={imageSample}
              alt={course.name}
              objectFit="cover"
              height="200px"
            />
            <CardBody>
              <VStack align="start" spacing={2}>
                <Heading size="md" color={headingColor}>
                  {course.name}
                </Heading>
                <Text fontSize="sm" color="gray.500" fontWeight={"700"}>
                  Students Enrolled: {course.studentsEnrolled}
                </Text>
                <HStack spacing={4}>
                  <Box
                    bg={useColorModeValue("gray.100", "#bee3f8")}
                    px={2}
                    py={1}
                    borderRadius="md"
                  >
                    <Text
                      fontSize="xs"
                      color={useColorModeValue("", "gray.800")}
                    >
                      {course.duration}
                    </Text>
                  </Box>
                  {/* <Box bg="gray.100" px={2} py={1} borderRadius="md">
                    <Text fontSize="xs">{course.level}</Text>
                  </Box> */}
                </HStack>
              </VStack>
            </CardBody>
            <CardFooter>
              <Button colorScheme="purple" width="100%">
                Enter Course
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      <CreateCourseModal
        isOpen={isOpen}
        onClose={onClose}
        onCreateCourse={handleCreateCourse}
      />
    </>
  );
};

export default CoursePanelTeacher;
