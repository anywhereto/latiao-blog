import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export const metadata = genPageMetadata({ title: '服务条款' })

// 临时的静态内容，稍后会改为使用contentlayer
const termsContent = {
  title: '服务条款',
  date: '2024-01-01',
  lastmod: '2024-01-01',
}

export default function Page() {
  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <div>
                <PageTitle>服务条款</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
                <p>
                  <strong>最后更新时间：2025年6月8日</strong>
                </p>

                <p>欢迎使用辣条博客！本服务条款（以下简称"条款"）适用于您对本网站的访问和使用。</p>

                <h2>1. 接受条款</h2>
                <p>
                  通过访问和使用本网站，您表示同意遵守并受本条款的约束。如果您不同意本条款，请不要使用本网站。
                </p>

                <h2>2. 网站描述</h2>
                <p>辣条博客是一个个人博客网站，主要分享：</p>
                <ul>
                  <li>读书笔记和思考</li>
                  <li>技术学习心得</li>
                  <li>职场经验和感悟</li>
                  <li>个人生活感悟</li>
                </ul>

                <h2>3. 用户行为准则</h2>
                <p>在使用本网站时，您同意：</p>
                <ul>
                  <li>不发布任何非法、有害、威胁、辱骂、诽谤、粗俗、淫秽或其他令人反感的内容</li>
                  <li>不侵犯他人的知识产权或其他权利</li>
                  <li>不传播垃圾信息或进行商业推广</li>
                  <li>不干扰网站的正常运行</li>
                </ul>

                <h2>4. 知识产权</h2>
                <h3>4.1 网站内容</h3>
                <p>
                  本网站上的所有内容，包括但不限于文章、图片、视频、音频等，均受版权法保护。除非另有说明，所有内容的版权归博主所有。
                </p>

                <h3>4.2 用户内容</h3>
                <p>
                  如果您在本网站发布内容（如评论），您保证拥有发布该内容的权利，并授予本网站使用该内容的许可。
                </p>

                <h3>4.3 合理使用</h3>
                <p>您可以：</p>
                <ul>
                  <li>个人学习和研究目的下引用本网站内容</li>
                  <li>在遵循署名原则的前提下分享文章链接</li>
                  <li>根据开源协议使用相关代码</li>
                </ul>

                <h2>5. 免责声明</h2>
                <h3>5.1 内容准确性</h3>
                <p>
                  虽然我们力求提供准确和最新的信息，但不保证网站内容的完全准确性、完整性或及时性。
                </p>

                <h3>5.2 外部链接</h3>
                <p>本网站可能包含指向第三方网站的链接。我们不对这些外部网站的内容负责。</p>

                <h3>5.3 技术故障</h3>
                <p>我们不对因技术故障、网络中断或其他不可控因素导致的服务中断承担责任。</p>

                <h2>6. 隐私保护</h2>
                <p>
                  我们重视您的隐私。关于我们如何收集、使用和保护您的个人信息，请参阅我们的隐私政策。
                </p>
                <p>基本原则：</p>
                <ul>
                  <li>我们不会收集不必要的个人信息</li>
                  <li>我们不会将您的信息出售给第三方</li>
                  <li>我们会采取合理措施保护您的信息安全</li>
                </ul>

                <h2>7. 服务变更和终止</h2>
                <h3>7.1 服务变更</h3>
                <p>我们保留随时修改或终止服务的权利，恕不另行通知。</p>

                <h3>7.2 内容删除</h3>
                <p>我们保留删除任何违反本条款内容的权利。</p>

                <h2>8. 条款修改</h2>
                <p>
                  我们可能会不时更新这些条款。修改后的条款将在网站上发布，继续使用网站即表示您接受修改后的条款。
                </p>

                <h2>9. 适用法律</h2>
                <p>
                  本条款受中华人民共和国法律管辖。如发生争议，应通过友好协商解决；协商不成的，可向有管辖权的人民法院提起诉讼。
                </p>

                <h2>10. 联系我们</h2>
                <p>如果您对这些条款有任何疑问，请通过以下方式联系我们：</p>
                <ul>
                  <li>邮箱：pekingzcc@gmail.com</li>
                  <li>
                    GitHub：
                    <a
                      href="https://github.com/zhangchenchen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/zhangchenchen
                    </a>
                  </li>
                </ul>

                <hr />
                <p>感谢您使用辣条博客！希望您在这里度过愉快的阅读时光。</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
