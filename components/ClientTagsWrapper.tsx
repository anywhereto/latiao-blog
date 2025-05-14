'use client'

import { useEffect, useState } from 'react'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'

interface ClientTagsWrapperProps {
  posts: CoreContent<Blog>[]
  initialDisplayPosts: CoreContent<Blog>[]
  pagination: {
    currentPage: number
    totalPages: number
  }
  title: string
}

export default function ClientTagsWrapper({
  posts,
  initialDisplayPosts,
  pagination,
  title,
}: ClientTagsWrapperProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // 在服务器端渲染时仅显示基本内容，避免水合错误
  if (!isClient) {
    return (
      <div className="min-h-screen">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {title}
        </h1>
        <div className="mt-4 text-gray-500">加载内容中...</div>
      </div>
    )
  }

  // 客户端渲染完整内容
  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={title}
    />
  )
} 