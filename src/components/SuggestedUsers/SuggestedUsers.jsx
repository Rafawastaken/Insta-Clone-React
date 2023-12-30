import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";

import { VStack, Box, Flex, Text, Link } from "@chakra-ui/react";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex w={"full"} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser
        name="First User"
        followers={1325}
        avatar="https://bit.ly/dan-abramov"
      />
      <SuggestedUser
        name="Second User"
        followers={4050}
        avatar="https://bit.ly/ryan-florence"
      />
      <SuggestedUser
        name="Third User"
        followers={445}
        avatar="https://bit.ly/code-beast"
      />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        Built by{" "}
        <Link
          href="https://github.com/rafawastaken"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
          fontWeight={"medium"}
        >
          Rafawastaken
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
