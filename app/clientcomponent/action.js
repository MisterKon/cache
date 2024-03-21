"use server";

export async function Action(prevState, formData) {
  const res = await fetch(
    "https://64435eec90738aa7c06fc4f6.mockapi.io/comments",
    { cache: "no-cache" }
    // { cache: "no-cache, no-store, must-revalidate, reload" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return { message: res.json() };
}
