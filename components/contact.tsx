"use client";
import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  Form,
  Button,
  Input,
  Textarea,
  Avatar,
} from "@heroui/react";
import Link from "next/link";
import React from "react";

import AnimatedSection from "./animatedSection";
import { BorderBeam } from "./magicui/border-beam";
import { WordRotate } from "./magicui/word-rotate";
import { TextAnimate } from "./magicui/text-animate";

import { contactSocialLinks } from "@/app/common/data/social-links";
export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    const email = String(data.email || "").trim();
    const message = String(data.message || "").trim();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${email || "website visitor"}`,
    );
    const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:stanrainiersalazar@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section>
      <AnimatedSection>
        <WordRotate
          className="mb-12 text-center text-4xl font-bold text-foreground sm:text-5xl"
          words={["Connect with me", "Get in touch", "Contact me"]}
        />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Card className="relative w-full overflow-hidden rounded-3xl border border-divider bg-content1/85 shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
            <CardHeader className="flex flex-col gap-3 px-6 pb-4 pt-6 sm:px-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-default-500">
                  Contact Form
                </p>
                <h3 className="text-2xl font-semibold text-foreground lg:text-3xl">
                  <TextAnimate animation="slideUp">Let&apos;s Work Together</TextAnimate>
                </h3>
                <p className="text-sm text-default-600 lg:text-base">
                  <TextAnimate animation="slideUp">
                    Send your message and your default mail app will open with
                    everything prefilled.
                  </TextAnimate>
                </p>
              </div>
            </CardHeader>
            <Divider className="bg-divider" />
            <CardBody className="px-6 pb-7 pt-6 sm:px-8">
              <Form className="w-full space-y-4" onSubmit={onSubmit}>
                <Input
                  isRequired
                  errorMessage="Please enter a valid email"
                  label="Your Email"
                  labelPlacement="outside"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
                <Textarea
                  isRequired
                  errorMessage="Please enter a message"
                  label="Message"
                  labelPlacement="outside"
                  maxRows={8}
                  minRows={5}
                  name="message"
                  placeholder="Tell me about your project..."
                  type="text"
                />

                <Button
                  className="mt-2 w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  radius="full"
                  type="submit"
                >
                  Open Email Draft
                </Button>
                {submitted && (
                  <p className="text-sm text-default-500">
                    Email app opened with your message draft.
                  </p>
                )}
              </Form>
            </CardBody>
            <BorderBeam duration={8} size={100} />
          </Card>

          <Card className="relative w-full overflow-hidden rounded-3xl border border-divider bg-content1/85 shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
            <CardHeader className="flex flex-col gap-3 px-6 pb-4 pt-6 sm:px-8">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-default-500">
                  Socials
                </p>
                <h3 className="text-2xl font-semibold text-foreground lg:text-3xl">
                  <TextAnimate animation="slideUp">Find Me Online</TextAnimate>
                </h3>
                <p className="text-sm text-default-600 lg:text-base">
                  <TextAnimate animation="slideUp">
                    Connect with me through my social channels and professional
                    profiles.
                  </TextAnimate>
                </p>
              </div>
            </CardHeader>
            <Divider className="bg-divider" />
            <CardBody className="space-y-3 px-6 pb-7 pt-6 sm:px-8">
              {contactSocialLinks.map((link) => (
                <div
                  key={link.title}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-divider bg-content2/70 px-4 py-3 sm:flex-row sm:items-center"
                >
                  <Avatar
                    alt={link.title}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    icon={<link.icon size={30} />}
                  />
                  <div className="flex flex-1 flex-col">
                    <Link
                      className="text-base font-semibold text-foreground transition duration-300 ease-in-out hover:text-primary text-center sm:text-left"
                      href={link.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <TextAnimate animation="slideUp">
                        {link.title}
                      </TextAnimate>
                    </Link>
                    <p className="text-sm text-default-500 text-center sm:text-left">
                      <TextAnimate animation="slideUp">
                        {link.description}
                      </TextAnimate>
                    </p>
                  </div>
                </div>
              ))}
            </CardBody>
            <BorderBeam duration={8} size={100} />
          </Card>
        </div>
      </AnimatedSection>
    </section>
  );
}
