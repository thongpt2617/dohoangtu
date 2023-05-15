import { Flex, Text, IconButton } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import CourseSection from "@/views/CourseView/CourseSections/CourseSection";
import { ICourseDetails, ICourseLesson } from "@/types/course";
import type { FC } from "react";
import useMobile from "@/hooks/useMobile";

type CourseSectionsProps = {
  course: ICourseDetails;
  onLessonSelected: (lesson: ICourseLesson) => void;
};
const CourseSections: FC<CourseSectionsProps> = ({
  course,
  onLessonSelected = () => {},
}) => {
  const { sections } = course;
  const { isMobile } = useMobile();

  return (
    <Flex
      flexDir="column"
      position="sticky"
      top="0"
      zIndex="30"
      maxH="100vh"
      overflowY="auto"
    >
      {!isMobile && (
        <Flex
          p="1rem"
          border="1px"
          borderColor="gray.300"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontWeight="600">MỤC LỤC</Text>
          <IconButton
            aria-label="close"
            icon={<MdClose size="1.25rem" />}
            variant="ghost"
          />
        </Flex>
      )}
      {sections.map((sec) => (
        <CourseSection
          section={sec}
          key={sec.order}
          onLessonSelected={onLessonSelected}
        />
      ))}
    </Flex>
  );
};

export default CourseSections;
