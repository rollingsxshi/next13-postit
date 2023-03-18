"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface Props {
  id?: string
}

interface Comment {
  postId?: string
  title: string
}

const AddComment = ({ id }: Props) => {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false)

  let commentToastId: string

  const queryClient = useQueryClient()
  const { mutate } = useMutation(
    async (data: Comment) => axios.post('/api/posts/addComment', {data}),
    {
      onSuccess: data => {
        setTitle('')
        setIsDisabled(false)
        queryClient.invalidateQueries(['detail-post'])
        toast.dismiss(commentToastId)
        toast.success("Comment added successfully ✅", {id: commentToastId})
      },
      onError: err => {
        setIsDisabled(false)
        if (err instanceof AxiosError) {
          toast.dismiss(commentToastId)
          toast.error(err?.response?.data.message, {id: commentToastId})
        }
      }
    }
  )

  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsDisabled(true)
    commentToastId = toast.loading('Adding your comment', {id: commentToastId})
    mutate({title, postId: id})
  }

  return (
    <form onSubmit={submitComment} className="my-8">
      <h3>Add a comment</h3>
      <div className="flex flex-col my-2">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          name="title"
          type="text"
          className="p-4 text-lg rounded-md my-2"
        />
        <div className="flex items-center gap-2">
          <button
            disabled={isDisabled}
            type="submit"
            className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
          >
            Add comment 🚀
          </button>
          <p className={`font-bold ${title.length > 300 ? "text-red-700" : "text-gray-700"}`}>
            {`${title.length}/300`}
          </p>
        </div>
      </div>
    </form>
  );
};

export default AddComment;
