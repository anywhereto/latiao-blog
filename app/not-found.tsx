import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 pt-16">
      <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 md:text-8xl">
        404
      </h1>
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          页面不见了 (＞﹏＜)
        </h2>
        <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
          抱歉，您要访问的页面可能已经被删除或者移动到了其他地方。
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="rounded-lg bg-primary-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-600 dark:hover:bg-primary-400"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}
