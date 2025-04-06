'use client'
import { Card, CardHeader, Divider, CardBody, CardFooter, Form, Button, Input, Textarea, Avatar } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { contactSocialLinks } from "@/app/common/data/social-links";
import AnimatedSection from "./animatedSection";

export default function Contact() {

  const [submitted, setSubmitted] = React.useState(null);

  const onSubmit = (e:any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data? null : data);
  };
  

  return (
    <div>
      <AnimatedSection>
      <h1 className="text-4xl font-bold text-center dark:text-amber-50 mb-12">Connect with me</h1>
      <div className="flex flex-row gap-4 " >
      <Card className="max-w-[1400px] w-full ">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-2xl">Contact Me!</p>
            <p className="text-lg text-default-500">
              Feel free to send me a message. Give me feedback, or just say hi!
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="p-8 align-items-center justify-items-center">
          <Form className="w-full max-w-xs  " onSubmit={onSubmit}>
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
              className="bg-gradient-to-tr from-cyan-500 to-blue-500 text-white shadow-lg mt-6"
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
      <Card className="max-w-[1400px] w-full ">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className="text-2xl">Social Media</p>
            <p className="text-lg text-default-500">
              Connect with me on social media
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="p-8 align-items-center justify-items-center">
            {contactSocialLinks.map((link) => (
              <div key={link.title} className="flex items-center gap-3 mb-4">
                <Avatar
                  icon={<link.icon size={30}/>}
                  alt={link.title}
                  className="bg-gradient-to-r from-cyan-500 to-violet-500 text-black dark:bg-gray-700 dark:text-white"
                />
                <div className="flex flex-col">
                  <Link href={link.url} className="text-md font-bold hover:text-default-500 duration-300 ease-in-out">{link.title}</Link>
                  <p className="text-small text-default-500">{link.description}</p>
                </div>
                <Link
                  href={link.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </Link>
              </div>
            ))}
        </CardBody>
        </Card>
    </div>
    </AnimatedSection>
  </div>


    // </div>

  );
}