'use client'
import { Card, CardHeader, Divider, CardBody, CardFooter, Form, Button, Input, Textarea, Avatar, Spacer } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { contactSocialLinks } from "@/app/common/data/social-links";
import AnimatedSection from "./animatedSection";
import { BorderBeam } from "./magicui/border-beam";
import { WordRotate } from "./magicui/word-rotate";
import { TextAnimate } from "./magicui/text-animate";
import { BoxReveal } from "./magicui/box-reveal";
export default function Contact() {

  const [submitted, setSubmitted] = React.useState(null);

  const onSubmit = (e:any) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data? null : data);
  };
  

  return (
    <div >
      <AnimatedSection>
      <WordRotate className="text-5xl font-bold text-center dark:text-amber-50 mb-12"
      words={['Connect with me', 'Get in touch', 'Contact me']} >
      </WordRotate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4" >
      <Card className="max-w-[1400px] w-full ">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <p className=" text-lg mb-2 lg:text-2xl ">
              <TextAnimate animation="slideUp" >
                  Contact Me!
              </TextAnimate>
            </p>
            <p className="text-md text-default-500 lg:text-lg">
              <TextAnimate animation="slideUp" >
                Feel free to send me a message. Give me feedback, or just say hi!
              </TextAnimate>
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="p-8 align-items-center justify-items-center">
          <Form className="w-full max-w-xs  " onSubmit={onSubmit}>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
          </BoxReveal>
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>

            <Textarea
              isRequired
              errorMessage="Please enter a message"
              label="Message"
              labelPlacement="outside"
              name="message"
              placeholder="Enter your message"
              type="text"
            />
            </BoxReveal>

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
        <BorderBeam duration={8} size={100} />
      </Card>
      <Card className="max-w-[1400px] w-full ">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">

            <p className="text-lg mb-2 lg:text-2xl"> <TextAnimate animation="slideUp" >Social Media</TextAnimate></p>
            <p className="text-md text-default-500 lg:text-lg">
              <TextAnimate animation="slideUp" >Connect with me on social media</TextAnimate>
            </p>
            
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="p-8 align-items-center justify-items-center">
            {contactSocialLinks.map((link) => (
              <div key={link.title} className="flex items-center gap-3 mb-4 sm:flex-row flex-col">
                <Avatar
                  icon={<link.icon size={30}/>}
                  alt={link.title}
                  className="bg-gradient-to-r from-cyan-500 to-violet-500 text-black dark:bg-gray-700 dark:text-white"
                />
                <div className="flex flex-col">
                  <Link href={link.url} className="text-md font-bold hover:text-default-500 duration-300 ease-in-out">
                    <TextAnimate animation="slideUp" >
                      {link.title}
                    </TextAnimate>
                 </Link>
                  <p className="text-small text-default-500">
                    <TextAnimate animation="slideUp" >
                      {link.description}
                    </TextAnimate>
                  </p>
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
        <BorderBeam duration={8} size={100} />
        </Card>
    </div>
    </AnimatedSection>
  </div>


    // </div>

  );
}