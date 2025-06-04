import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
              <SocialIcon kind="bluesky" href={bluesky} />
            </div>
          </div>
          <div className="xl:col-span-2">
            <div className="prose max-w-none pb-8 pt-8 dark:prose-invert">{children}</div>
            <div className="border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col items-center py-8 sm:flex-row sm:justify-around">
                <div className="flex flex-col items-center">
                  <div className="mb-4 text-center">
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-300">
                      如果你觉得内容还不错，能否请我喝一杯咖啡？
                    </p>
                    <a
                      href="https://ko-fi.com/georgezhang55662"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-600"
                    >
                      ☕ 支持一杯咖啡
                    </a>
                  </div>
                  <Image
                    src="/static/images/qrcode.jpg"
                    alt="微信公众号二维码"
                    width={180}
                    height={180}
                    className="rounded-lg"
                  />
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    关注公众号「辣条加辣」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
