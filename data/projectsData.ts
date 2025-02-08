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
    title: 'Free Things To Do',
    description: `Find the best free things to do in your area. Perfect for families, students, 
    and anyone looking for cost-free entertainment..`,
    imgSrc: '/static/images/free-things-to-do.png',
    href: 'https://freethingstodo.net/',
  },
  {
    title: 'TransAddr',
    description: `Transform addresses between different language formats.`,
    imgSrc: '/static/images/trans.png',
    href: 'https://www.transaddr.com/',
  },
]

export default projectsData
