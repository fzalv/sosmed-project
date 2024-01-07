import React from "react";
import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Box,
  Heading,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";

export default function posts() {
  return (
    <>
      <div className="container m-auto">
        <div class="w-screen flex items-center justify-center">
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />

                  <Box>
                    <Heading size="sm">Segun Adebayo</Heading>
                    <label>Creator, Chakra UI</label>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <label>
                With Chakra UI, I wanted to sync the speed of development with
                the speed of design. I wanted the developer to be just as
                excited as the designer to create a screen.
              </label>
            </CardBody>

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}>
              <Button flex="1" variant="ghost">
                Like
              </Button>
              <Button flex="1" variant="ghost">
                Comment
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
