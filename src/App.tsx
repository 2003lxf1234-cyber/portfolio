import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <Hero
        title="你好，我是开发者"
        subtitle="一名热爱技术的全栈开发者，专注于创建优雅、高效的 Web 应用。探索我的作品，了解我的技术之旅。"
        avatarUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio"
      />
      <Projects />
    </div>
  )
}

export default App
