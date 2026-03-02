interface HeroProps {
  title: string
  subtitle: string
  avatarUrl?: string
}

function Hero({ title, subtitle, avatarUrl }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto text-center">
        {avatarUrl && (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <img
              src={avatarUrl}
              alt="头像"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-[3px]"
              style={{
                background: 'linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(135deg, #a855f7, #ec4899, #ef4444) border-box',
                border: '3px solid transparent'
              }}
            />
          </div>
        )}
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
        
        <div className="flex gap-4 mt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full font-medium text-white hover:opacity-90 transition-opacity duration-300"
          >
            查看作品
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 rounded-full font-medium text-gray-300 hover:border-gray-400 hover:text-white transition-colors duration-300"
          >
            联系我
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
