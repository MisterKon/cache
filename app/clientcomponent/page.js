"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";

export default function Page() {
  const [blogs, setBlogState] = useState([
    {
      name: "",
      avatar: "",
    },
  ]);

  const getBlog = async (slug) => {
    try {
      const res = await fetch(
        "https://64435eec90738aa7c06fc4f6.mockapi.io/comments",
        { cache: "no-cache" }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await res.json();
      setBlogState(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    console.log("testest loglog");
    getBlog();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2 my-4">
      {blogs.map((blog, index) => (
        <div key={index} className="card bg-base-100 shadow-xl">
          <figure>
            <img src={blog.avatar} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{blog.name}</h2>
            <p>{blog.createdAt}</p>
            <div className="card-actions justify-end">
              <Link href={`/blog/${blog.id}`} className="btn btn-primary">
                Read blog
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
