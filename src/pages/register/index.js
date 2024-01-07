import React from "react";
import dynamic from "next/dynamic";
import {
  FormControl,
  Input,
  InputRightElement,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const LayoutComponent = dynamic(() => import("/layout"));

export default function register() {
  // -----    BUAT PASSWORD
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  // -----    ##############

  return (
    <>
      <LayoutComponent metaTitle="register">
        <div class="container mx-auto sm:container sm:mx-auto">
          <div class="bg-white">
            <p className="font-bold uppercase">sosmed app</p>

            <hr />

            <div class="max-w-full">
              <div className="mx-auto">
                <FormControl>
                  <div className="my-2">
                    <label>Nama</label>
                    <Input type="text" />
                  </div>
                  <div className="my-2">
                    <label>Email</label>
                    <Input type="email" />
                  </div>
                  <div className="my-2">
                    <label>Date of Birth</label>
                    <Input type="text" />
                  </div>
                  <div className="my-2">
                    <label>Phone Number</label>
                    <Input type="number" />
                  </div>
                  <div className="my-2">
                    <label>Hobby</label>
                    <Input type="text" />
                  </div>
                  <div className="my-2">
                    <label>Password</label>
                    <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </div>
                  <div className="my-2">
                    <Button colorScheme="blue">REGISTER</Button>
                  </div>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </LayoutComponent>
    </>
  );
}
