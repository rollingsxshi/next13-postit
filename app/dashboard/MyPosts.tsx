"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthPosts } from "../types/AuthPosts";
import EditPost from "./EditPost";

const fetchAuthPosts = async () => {
  const res = await axios.get("/api/posts/authPosts");
  return res.data;
};

const MyPosts = () => {
  const { data, isLoading } = useQuery<AuthPosts>({
    queryFn: fetchAuthPosts,
    queryKey: ["auth-posts"],
  });

  if (isLoading) return <h1>Your posts are loading...</h1>;

  return (
    <div>
      {data?.Post?.map((post) => (
        <EditPost
          key={post.id}
          id={post.id}
          title={post.title}
          avatar={data.image}
          name={data.name}
          comments={post.Comment}
        />
      ))}
    </div>
  );
};

export default MyPosts;
