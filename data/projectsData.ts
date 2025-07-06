interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '自洽的程序员',
    description: `这本书是结合笔者近10年程序员生涯经历，分享如何解决工作过程中碰到的焦虑、倦怠、迷茫、抑郁等情绪，聚焦于解决具体问题，
    通过改变认知将我们从负面情绪的泥淖中走出来，做到更坦然，真诚的面对自己的内心，成为一个自洽的程序员。`,
    imgSrc: '/static/images/ziqia.png',
    href: 'https://www.dev-life.site/',
  },
  {
    title: 'Nova AI Toolkit',
    description: `A comprehensive platform integrating various AI tools.`,
    imgSrc: '/static/images/nova.png',
    href: 'https://novatoolkit.ai/',
  },
  {
    title: 'Query GPT',
    description: `Transform Natural Language into Perfect SQL.`,
    imgSrc: '/static/images/querygpt.png',
    href: 'https://query-gpt.com/',
  },
  {
    title: 'AI-Powered UI Prompt Explorer',
    description: `Explore UI themes and generate prompts in the same style for your designs.`,
    imgSrc: '/static/images/uiprompt.png',
    href: 'https://uiprompt.art/',
  },
  {
    title: 'TopSub',
    description: `一个可以非常方便的查看subreddit 热榜的工具`,
    imgSrc: '/static/images/topsub.png',
    href: 'https://topsub.cc/',
  },
  {
    title: 'SaaS Ideas',
    description: `Discover profitable niche ideas and specialized SaaS opportunities based on real Fiverr demand`,
    imgSrc: '/static/images/300.png',
    href: 'https://micro-saas-ideas.com/',
  },
]

export default projectsData
