'use client'

import AddComment from "@/app/components/AddComment"
import Post from "@/app/components/Post"
import { PostType } from "@/app/types/Post"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Image from "next/image"

type URL = {
  params: {
    slug: string
  }
}

const fetchDetails = async (slug: string) => {
  const res = await axios.get(`/api/posts/${slug}`)
  return res.data
}

const PostDetail = (url: URL) => {
  const {data, isLoading} = useQuery<PostType>({
    queryFn: () => fetchDetails(url.params.slug),
    queryKey: ['detail-post']
  })

  if (isLoading) return 'Loading...'

  return (
    <div>
      <Post
        name={data?.user.name}
        avatar={data?.user.image}
        postTitle={data?.title}
        id={data?.id}
        comments={data?.Comment}
      />
      <AddComment id={data?.id} />
      {data?.Comment?.map(comment => (
        <div key={comment.id} className="my-6 bg-white p-8 rounded-md">
          <div className="flex items-center gap-2">
            <Image
              width={24}
              height={24}
              src={comment.user?.image}
              alt="avatar"
            />
            <h3 className="font-bold">{comment?.user?.name}</h3>
            <h2 className="text-sm">{new Date(comment.createdAt!).toLocaleDateString()}</h2>
          </div>
          <div className="py-4">{comment.message}</div>
        </div>
      ))}
    </div>
  )
}

export default PostDetail