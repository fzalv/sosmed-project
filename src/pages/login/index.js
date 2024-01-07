import dynamic from "next/dynamic";
import React from "react";
import { useState } from "react";
import {
  Input,
  FormControl,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import Link from "next/link";
const LayoutComponent = dynamic(() => import("/layout"));

export default function login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [input, setInput] = useState("");

  const isError = input === "";

  return (
    <>
      <LayoutComponent metaTitle="login">
        <div class="container mx-auto sm:container sm:mx-auto">
          <div class="bg-white">
            <p className="font-bold uppercase">sosmed app</p>

            <hr />

            <div class="max-w-full">
              <div className="mx-auto">
                <FormControl>
                  <div className="my-2">
                    <label>Email address</label>
                    <Input type="email" placeholder="Email Address..." />
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
                    <Button colorScheme="blue">LOGIN</Button>
                  </div>
                  <div className="my-2">
                    <label>
                      Do you have account ?{" "}
                      <Link href={"../register"}>Register Now</Link>
                    </label>
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
