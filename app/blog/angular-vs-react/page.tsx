'use client';

import React from "react";
import { Button, Card, Link } from "@heroui/react";
import { FaChevronLeft } from "react-icons/fa";


export default function AngularVsReactPage() {
  return (
    <div className=" min-h-screen py-16">
        <Link href="/blog">
            <Button variant="light" className="mb-2" startContent={<FaChevronLeft />} href="/blog"> 
                Back
            </Button>
        </Link>
      <main className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold text-indigo-600 mb-2">
            Angular vs. React: My Junior Full-Stack Developer Perspective
          </h1>
          <p className="text-sm text-default-600">
            Stan Rainier Salazar &middot; June 27, 2025
          </p>
        </div>

        {/* Card Content */}
        <Card className="bg-white shadow-xl rounded-2xl p-10 text-gray-800">
          {/* Intro */}
          <p className="text-lg leading-relaxed mb-8">
            In this blog post, I want to share my experience and thoughts on Angular and React, two of the most widely used frontend frameworks today.
            I’ve spent more time building production apps with Angular, but I’ve also explored React and gained insights on both strengths and trade-offs.
            This is not about which one is better universally, but which one fits better based on the project, developer experience, and ecosystem support.
          </p>

          {/* Section: Angular Strengths */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-500">Why I Prefer Angular's Structure</h2>
            <p>
              One thing I deeply appreciate about Angular is its file and project structure. The CLI generates everything cleanly, components, services, 
              modules, all separated in a scalable way. This organization becomes increasingly valuable as the project grows. 
            </p>
            <p className="mt-4">
              Angular’s use of **services** and **observables** is a huge plus for me. Services promote clear separation of concerns, while observables 
              give you powerful asynchronous handling built in with RxJS. This makes data flow predictable and easier to manage in complex applications.
            </p>
          </section>

          {/* Section: React Strengths */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-500">Where React Excels</h2>
            <p>
              On the other hand, React is incredibly well-supported in terms of libraries and community. The ecosystem around React is massive.
              From UI libraries like Shadcn, MUI, Chakra, to routing solutions, and especially in state management with tools like Zustand, Jotai, and Redux Toolkit.
              It’s highly flexible and lets you pick exactly what you want.
            </p>
            <p className="mt-4">
              Another strength of React is how mature it is for **Server-Side Rendering (SSR)** through frameworks like Next.js. If SEO, performance, or
              hybrid rendering is important, React currently dominates with solutions that are easy to integrate and widely adopted.
            </p>
          </section>

          {/* Section: Real Talk – Popularity & Frustrations */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-500">Frustrations & Trade-offs</h2>
            <p>
              One frustrating thing for me as someone more experienced in Angular is seeing how it’s not as popular anymore compared to React.
              It often gets overlooked even though it provides a complete solution out of the box, routing, form handling, HTTP, testing, all built-in.
            </p>
            <p className="mt-4">
              React, while flexible, also requires more decisions upfront. You have to choose your own tools for routing, styling, testing, and more. 
              This makes React very customizable, but also fragmented for beginners or solo developers.
            </p>
          </section>

          {/* Section: CLI, Developer Experience */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-500">CLI & Developer Experience</h2>
            <p>
              Angular CLI is one of its strongest features in my opinion. It scaffolds everything you need with a single command and keeps your architecture clean.
              I’ve found it especially useful in large enterprise-scale projects where structure and maintainability are essential.
            </p>
            <p className="mt-4">
              React doesn’t offer an official CLI beyond Create React App (which is now deprecated), but modern frameworks like **Next.js** and tools like **Vite** 
              provide excellent alternatives. Still, Angular’s convention-over-configuration approach is something I personally enjoy.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-500">Conclusion</h2>
            <p>
              If I were to build a **large-scale, scalable web app** today, I’d lean toward Angular simply because of my experience and how well it enforces structure.
              The built-in tools like services, modules, and observables make it ideal for organized development.
            </p>
            <p className="mt-4">
              That said, React has my respect, its ecosystem, UI libraries, and community-driven innovation are hard to ignore. I plan to continue improving my
              React skills and experimenting with state management and SSR tools in future projects.
            </p>
          </section>

          {/* Footer Note */}
          <p className="text-sm text-gray-500 mt-12 italic">
            Thanks for reading, feel free to share your thoughts or message me if you’ve had similar experiences with Angular or React.
          </p>
        </Card>
      </main>
    </div>
  );
}
