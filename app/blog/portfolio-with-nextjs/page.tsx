'use client';

import React from "react";
import { Button, Card, Link } from "@heroui/react";
import { FaChevronLeft } from "react-icons/fa";

export default function PortfolioBuildPage() {
  return (

    <div className=" min-h-screen py-16" >
        <Link href="/blog">
            <Button variant="light" className="mb-2" startContent={<FaChevronLeft />} href="/blog"> 
                Back
            </Button>
        </Link>
      <main className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold text-indigo-600 mb-2">
            How I Built My Portfolio with Next.js & Tailwind
          </h1>
          <p className="text-sm text-default-600">
            <span className="font-medium">Stan Rainier Salazar</span> &middot; June 27, 2025
          </p>
        </div>

        {/* Card Content */}
        <Card className="bg-white shadow-xl rounded-2xl p-10 text-gray-800">
          {/* Intro */}
          <p className="text-lg leading-relaxed mb-8">
            In this post, I’m sharing the process behind building my developer portfolio using <strong>Next.js</strong> and <strong>Tailwind CSS</strong>. 
            This includes the stack I chose, how I structured the layout, and the lessons I learned while bringing it all together.
          </p>

          {/* Section: Why This Stack */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-500">Why Next.js & Tailwind?</h2>
            <p>
              I chose Next.js for its powerful routing, built-in server-side rendering, and modern app directory support. It’s fast, scalable, and ideal 
              for SEO-friendly personal sites. Tailwind CSS complements this by enabling utility-first styling, which sped up my development time and 
              gave me full control over the UI without writing custom CSS files.
            </p>
          </section>

          {/* Section: Tech Stack */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-500">Tech Stack</h2>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li><strong>Next.js 13+</strong> – App directory structure and dynamic routing</li>
              <li><strong>Tailwind CSS</strong> – Utility-first styling</li>
              <li><strong>TypeScript</strong> – Type safety and better DX</li>
              <li><strong>Shadcn/UI</strong> – Headless components for accessible UI</li>
              <li><strong>Framer Motion</strong> – Subtle animations and transitions</li>
              <li><strong>Vercel</strong> – Seamless deployment and CI/CD</li>
            </ul>
          </section>

          {/* Section: Layout */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-500">Page Structure & Layout</h2>
            <p>
              I structured the layout as a simple single-page scroll: Hero → About → Projects → Contact. With Tailwind’s grid and flex utilities, 
              the design is fully responsive across breakpoints. Custom components helped maintain consistent UI and faster iteration.
            </p>
          </section>

          {/* Section: Features */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-500">Features</h2>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Dark mode toggle using Tailwind’s <code>dark:</code> variant</li>
              <li>Scroll-based section highlighting in the navbar</li>
              <li>Reusable components with consistent styling</li>
              <li>SEO-ready metadata and Open Graph tags</li>
              <li>Optimized images using Next.js </li>
            </ul>
          </section>

          {/* Section: Challenges */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-500">Challenges & Lessons Learned</h2>
            <p>
              Responsiveness was a key challenge especially managing layout across devices using Tailwind's breakpoints. I also had to balance performance 
              with visuals by deferring non-essential assets and optimizing media. Next.js' modular routing helped me stay organized with scalable code structure.
            </p>
          </section>

          {/* Section: Conclusion */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3 text-indigo-500">Conclusion</h2>
            <p>
              Building this portfolio gave me full control over design and functionality. The stack allowed for rapid development, clean structure, 
              and a professional look. It’s a solid setup for any developer looking to showcase their work in a modern, performant way.
            </p>
          </section>

          {/* Footer Note */}
          <p className="text-sm text-gray-500 mt-12 italic">
            Thanks for reading — feel free to draw inspiration or reach out with any questions!
          </p>
        </Card>
      </main>
    </div>
  );
}
