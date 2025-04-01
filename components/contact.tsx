'use client'
import { Card, CardHeader, Divider, CardBody, CardFooter, Form, Button, Input, Textarea, Avatar } from "@heroui/react";
import Link from "next/link";
import React from "react";


export default function Contact() {

  const [submitted, setSubmitted] = React.useState(null);

  const onSubmit = (e:any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data? null : data);
  };

  return (
  //   <div className="max-w-[1400px] w-full grid content-around gap-6  justify-center md:grid-cols-2">
  // {/* <div className="flex flex-col gap-3 flex-1">
  //   <Card className="max-w-[1400px] w-full h-full">
  //     <span className="text-md">Social Links</span>
  //     <Divider />
  //     <CardBody className="flex flex-row gap-3 justify-center items-center">
  //       <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" />
  //       <span className="text-lg">LinkedIn</span>
  //     </CardBody>
  //     <Divider />
  //     <CardBody className="flex flex-row gap-3 justify-center items-center">
  //       <Avatar src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png" />
  //       <span className="text-lg">GitHub</span>
  //     </CardBody>
  //     <Divider />
  //     <CardBody className="flex flex-row gap-3 justify-center items-center">
  //       <Avatar src="https://plantscience.psu.edu/research/labs/roots/images/deeper-site/gitlab-logo/@@images/image.jpeg" />
  //       <span className="text-lg">GitLab</span>
  //     </CardBody>
  //   </Card>
  // </div> */}

  <div className="flex flex-col gap-3 align-self-center   justify-self-center" >
          <h1 className="text-8xl font-bold text-default-500">Contact Me</h1>

    <Card className="max-w-[1400px] w-full h-full">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Contact Me!</p>
          <p className="text-small text-default-500">
            Feel free to send me a message. Give me feedback, or just say hi!
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="p-8">
        <Form className="w-full max-w-xs" onSubmit={onSubmit}>
          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <Textarea
            isRequired
            errorMessage="Please enter a message"
            label="Message"
            labelPlacement="outside"
            name="message"
            placeholder="Enter your message"
            type="text"
          />
          <Button
            type="submit"
            className="bg-gradient-to-tr from-cyan-500 to-blue-500 text-white shadow-lg"
            radius="full"
            variant="shadow"
          >
            Submit
          </Button>
          {submitted && (
            <div className="text-small text-default-500">
              You submitted: <code>{JSON.stringify(submitted)}</code>
            </div>
          )}
        </Form>
      </CardBody>
    </Card>
  </div>
    // </div>

  );
}