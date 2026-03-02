import ProjectCard from './ProjectCard'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: '电商平台',
    description: '一个功能完整的电商平台，支持商品浏览、购物车、订单管理等核心功能，采用响应式设计。',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
  },
  {
    id: 2,
    title: '任务管理应用',
    description: '简洁高效的任务管理工具，支持拖拽排序、标签分类、截止日期提醒等功能。',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop',
    tags: ['Vue.js', 'TypeScript', 'Firebase'],
    link: '#',
  },
  {
    id: 3,
    title: '数据可视化仪表盘',
    description: '实时数据可视化仪表盘，支持多种图表类型，数据自动刷新，响应式布局。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    tags: ['React', 'D3.js', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 4,
    title: '社交媒体应用',
    description: '具有实时聊天、动态发布、用户关注等功能的社交媒体平台原型。',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop',
    tags: ['Next.js', 'PostgreSQL', 'Socket.io'],
    link: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              项目作品
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            以下是我近期完成的一些项目，展示了我在前端开发和技术应用方面的能力。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
