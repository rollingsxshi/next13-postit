"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";

// fetch all posts
const allPosts = async () => {
  const res = await axios.get("/api/posts/getPosts");
  return res.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: allPosts,
    queryKey: ["posts"],
  });

  if (error) return error;
  if (isLoading) return "Loading...";

  return (
    <main>
      <CreatePost />
      {data?.map((post) => (
        <Post
          key={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          id={post.id}
        />
      ))}
    </main>
  );
}
