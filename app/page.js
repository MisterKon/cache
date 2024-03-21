import Link from "next/link";

async function getBlogs() {
  const res = await fetch(
    "https://64435eec90738aa7c06fc4f6.mockapi.io/comments",
    { cache: "no-cache" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const blogs = await getBlogs();

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
