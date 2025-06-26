"use client";
import { title } from "@/components/primitives";
import { Card } from "@heroui/react";
import Link from "next/link";

const blogPosts = [
  {
    title: "How I Built My Portfolio with Next.js & Tailwind",
    description: "A breakdown of tools and techniques used in my developer portfolio.",
    slug: "portfolio-with-nextjs",
    date: "June 2025",
    enabled: true,
  },
  {
    title: "Angular vs. React: My Full-Stack Developer Perspective",
    description: "Comparing two powerful frontend frameworks through real-world use.",
    slug: "angular-vs-react",
    date: "June 2025",
    enabled: true,
  },
  {
    title: "Laravel Tips for Scalable Backend Architecture",
    description: "My go-to techniques for keeping Laravel projects clean and scalable.",
    slug: "laravel-backend-tips",
    date: "Coming Soon",
    enabled: false,
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center w-full px-4 md:px-12 pt-12 pb-96">
      <h1 className={title()}>Dev Blog {'(Coming Soon)'}</h1>
      <p className="text-default-500 text-center mt-2 mb-10 max-w-2xl">
        Insights, tutorials, and experiences from my journey as a full-stack developer.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl">
        {blogPosts.map((post) =>
          post.enabled ? (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
              <Card className="p-6 hover:shadow-lg transition duration-300 cursor-pointer">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-default-500 text-sm mb-4">{post.date}</p>
                <p className="text-default-700">{post.description}</p>
              </Card>
            </Link>
          ) : (
            <div
              key={post.slug}
              className="p-6 bg-gray-100 text-gray-400 rounded-xl border border-dashed border-gray-300 cursor-not-allowed opacity-60"
            >
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm mb-4">{post.date}</p>
              <p>{post.description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
