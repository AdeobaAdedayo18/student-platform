import React from "react";
import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Switch,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Divider,
  useToast,
  Select,
  Icon,
  Flex,
  Badge,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import * as z from "zod";
import { FaMoon, FaRobot, FaSun } from "react-icons/fa";
import { keyframes } from "@emotion/react";
import { QuestionIcon } from "@chakra-ui/icons";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const schema = z
  .object({
    title: z
      .string()
      .min(1, "Title is required")
      .max(200, "Title must be 200 characters or less"),
    description: z.string().optional(),
    instructorSolution: z.string().optional(),
    codeArea: z.string().optional(),
    questionArea: z.string().optional(),
    useAiGrading: z.boolean(),
    aiGradingOption: z.string().optional(),
    maxScore: z.number().min(0).max(100),
    dueDate: z.string().min(1, "Please set your due date"),
  })
  .refine(
    (data) => {
      if (
        data.useAiGrading &&
        (!data.instructorSolution || data.instructorSolution.trim() === "")
      ) {
        return false;
      }
      return true;
    },
    {
      message: "Instructor solution is required when AI grading is enabled",
      path: ["instructorSolution"],
    }
  );

type AssignmentFormData = z.infer<typeof schema>;

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(129, 140, 248, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(129, 140, 248, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(129, 140, 248, 0);
  }
`;

const CreateAssignmentPage: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const boxBg = useColorModeValue("white", "gray.800");
  const accentColor = useColorModeValue("blue.500", "blue.300");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const inputBg = useColorModeValue("white", "gray.700");
  const inputBorder = useColorModeValue("gray.200", "gray.600");
  const badgeBg = useColorModeValue("purple.100", "purple.900");
  const badgeColor = useColorModeValue("purple.800", "purple.100");
  const toast = useToast();

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<AssignmentFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      useAiGrading: false,
      maxScore: 100,
    },
  });

  const useAiGrading = watch("useAiGrading");

  const onSubmit = (data: AssignmentFormData) => {
    console.log(data);
    toast({
      title: "Assignment created.",
      description: "We've created your assignment for you.",
      status: "success",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
    reset();
  };

  return (
    <Box minHeight="100vh" bg={bgColor} py={8} padding={10}>
      <Flex justify="space-between" align="center" mb={6}>
        <Button
          leftIcon={<FaArrowLeft />}
          onClick={() => navigate("/teacher-course")}
        >
          Back to Course
        </Button>
      </Flex>
      <Box
        maxWidth="800px"
        margin="auto"
        bg={boxBg}
        p={8}
        borderRadius="lg"
        boxShadow="xl"
        backgroundImage={
          colorMode === "dark"
            ? "linear-gradient(to bottom right, rgba(49, 130, 206, 0.1), rgba(0, 0, 0, 0))"
            : "none"
        }
      >
        <VStack spacing={8} as="form" onSubmit={handleSubmit(onSubmit)}>
          <Heading color={accentColor}>Create New Assignment</Heading>

          <FormControl isInvalid={!!errors.title}>
            <FormLabel htmlFor="title" color={textColor}>
              Assignment Title
            </FormLabel>
            <Input
              id="title"
              placeholder="Enter assignment title"
              {...register("title")}
              bg={inputBg}
              borderColor={inputBorder}
              _hover={{ borderColor: accentColor }}
              color={textColor}
            />
            {errors.title && (
              <p style={{ fontSize: "14px", color: "red" }}>
                {errors.title.message}
              </p>
            )}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="description" color={textColor}>
              Description
            </FormLabel>
            <Textarea
              id="description"
              placeholder="Enter assignment description"
              {...register("description")}
              bg={inputBg}
              borderColor={inputBorder}
              _hover={{ borderColor: accentColor }}
              color={textColor}
            />
          </FormControl>

          <FormControl isInvalid={!!errors.instructorSolution}>
            <FormLabel htmlFor="instructorSolution" color={textColor}>
              Instructor Solution
            </FormLabel>
            <Textarea
              id="instructorSolution"
              placeholder="Enter the solution"
              {...register("instructorSolution")}
              bg={inputBg}
              borderColor={inputBorder}
              _hover={{ borderColor: accentColor }}
              color={textColor}
            />
            {errors.instructorSolution && (
              <p style={{ fontSize: "15px", color: "red" }}>
                {errors.instructorSolution.message}
              </p>
            )}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="codeArea" color={textColor}>
              Code Area
            </FormLabel>
            <Textarea
              id="codeArea"
              placeholder="Enter starter code or instructions"
              {...register("codeArea")}
              bg={inputBg}
              borderColor={inputBorder}
              _hover={{ borderColor: accentColor }}
              color={textColor}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="questionArea" color={textColor}>
              Question Area
            </FormLabel>
            <Textarea
              id="questionArea"
              placeholder="Enter questions or additional instructions"
              {...register("questionArea")}
              bg={inputBg}
              borderColor={inputBorder}
              _hover={{ borderColor: accentColor }}
              color={textColor}
            />
          </FormControl>

          <Divider borderColor={inputBorder} />

          <Flex width="100%" justifyContent="space-between" alignItems="center">
            <FormControl display="flex" alignItems="center" width="auto">
              <FormLabel htmlFor="useAiGrading" mb="0" mr={2} color={textColor}>
                Use AI Grading
              </FormLabel>
              <Tooltip label="Enable AI-powered grading for this assignment">
                <QuestionIcon color="blue.500" />
              </Tooltip>
              <Controller
                name="useAiGrading"
                control={control}
                render={({ field: { onChange, value, ref } }) => (
                  <Switch
                    id="useAiGrading"
                    size="lg"
                    colorScheme="blue"
                    ml={4}
                    isChecked={value}
                    onChange={onChange}
                    ref={ref}
                  />
                )}
              />
            </FormControl>

            <Badge
              colorScheme="purple"
              fontSize="md"
              p={2}
              borderRadius="md"
              bg={badgeBg}
              color={badgeColor}
              animation={
                useAiGrading ? `${pulseAnimation} 2s infinite` : "none"
              }
              transition="all 0.3s"
              transform={useAiGrading ? "scale(1.05)" : "scale(1)"}
              boxShadow={
                useAiGrading
                  ? `0 0 10px ${
                      colorMode === "light"
                        ? "rgba(128, 90, 213, 0.6)"
                        : "rgba(233, 216, 253, 0.6)"
                    }`
                  : "none"
              }
            >
              <Icon as={FaRobot} mr={2} />
              AI-Powered Grading
            </Badge>
          </Flex>

          {useAiGrading && (
            <FormControl>
              <FormLabel htmlFor="aiGradingOption" color={textColor}>
                AI Grading Option
              </FormLabel>
              <Select
                id="aiGradingOption"
                {...register("aiGradingOption")}
                bg={inputBg}
                borderColor={inputBorder}
                _hover={{ borderColor: accentColor }}
                color={textColor}
              >
                <option value="strict">
                  Strict - Subtract marks for each error
                </option>
                <option value="moderate">
                  Moderate - Balance between strictness and leniency
                </option>
                <option value="lenient">
                  Lenient - Focus on overall understanding
                </option>
              </Select>
            </FormControl>
          )}

          <HStack width="100%" justifyContent="space-between">
            <FormControl width="200px">
              <FormLabel htmlFor="maxScore" color={textColor}>
                Max Score
              </FormLabel>
              <Controller
                name="maxScore"
                control={control}
                render={({ field }) => (
                  <NumberInput {...field} min={0} max={100}>
                    <NumberInputField
                      id="maxScore"
                      bg={inputBg}
                      borderColor={inputBorder}
                      _hover={{ borderColor: accentColor }}
                      color={textColor}
                    />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                )}
              />
            </FormControl>

            <FormControl isInvalid={!!errors.instructorSolution}>
              <FormLabel htmlFor="dueDate" color={textColor}>
                Due Date
              </FormLabel>
              <Input
                id="dueDate"
                type="datetime-local"
                {...register("dueDate")}
                bg={inputBg}
                borderColor={inputBorder}
                _hover={{ borderColor: accentColor }}
                color={textColor}
              />
              {errors.dueDate && (
                <p
                  style={{
                    fontSize: "14px",
                    color: "red",
                    position: "absolute",
                    bottom: "-20px",
                  }}
                >
                  {errors.dueDate.message}
                </p>
              )}
            </FormControl>
          </HStack>

          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            width="full"
            mt={4}
          >
            Create Assignment
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default CreateAssignmentPage;
