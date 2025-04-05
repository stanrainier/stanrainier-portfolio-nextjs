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
    <div>
      <h1 className="text-4xl font-bold   dark:text-amber-50">Contact Me</h1>
      <div className="flex flex-col gap-3 align-self-start justify-self-center" >
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
  </div>


    // </div>

  );
}