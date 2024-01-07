import React from "react";
import {
  Flex,
  Avatar,
  Box,
  HStack,
  Textarea,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

export default function profile() {
  return (
    <>
      <div className="container mx-auto">
        <div class="w-screen flex items-center justify-center my-2">
          <Card maxW="md">
            <CardBody>
              <div className="flex justify-center">
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </div>
              <div className="flex justify-center">
                <label>John Sins</label>
              </div>
              <div className="flex justify-center">
                <Flex>
                  <Box>
                    <HStack spacing="24px">
                      <p>Email</p>
                      <p>Hobby</p>
                      <p>Date of Birth</p>
                      <p>Phone</p>
                    </HStack>
                  </Box>
                </Flex>
              </div>
              <div className="flex justify-center">
                <Flex>
                  <Box>
                    <HStack spacing="24px">
                      <p className="text-xs">tes@g.com</p>
                      <p className="text-xs">Memancing</p>
                      <p className="text-xs">01-01-2023</p>
                      <p className="text-xs">08123548987</p>
                    </HStack>
                  </Box>
                </Flex>
              </div>
            </CardBody>
          </Card>
        </div>
        <div class="w-screen flex items-center justify-center  my-2">
          <Card maxW="md">
            <CardBody>
              <Textarea placeholder="Here is a sample placeholder" />

              <Button colorScheme="blue" className="w-full">
                POST
              </Button>
            </CardBody>
          </Card>
        </div>
        <div class="w-screen flex items-center justify-center  my-2">
          <Card maxW="md">
            <CardHeader>
              <Flex spacing="4">
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />

                  <Box>
                    <p>Segun Adebayo</p>
                    <p>Creator, Chakra UI</p>
                  </Box>
                </Flex>
                <Menu>
                  <MenuButton as={Button}>:</MenuButton>
                  <MenuList>
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </CardHeader>
            <CardBody>
              <p>
                With Chakra UI, I wanted to sync the speed of development with
                the speed of design. I wanted the developer to be just as
                excited as the designer to create a screen.
              </p>
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
