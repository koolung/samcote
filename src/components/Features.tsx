export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Clean Design',
      description:
        'A minimalist approach with black and white colors that ensures clarity and focus.',
      icon: '📐',
    },
    {
      id: 2,
      title: 'Fast Performance',
      description:
        'Built with Next.js for optimal speed, SEO, and user experience.',
      icon: '⚡',
    },
    {
      id: 3,
      title: 'Responsive Layout',
      description:
        'Seamlessly adapts to all screen sizes from mobile to desktop.',
      icon: '📱',
    },
    {
      id: 4,
      title: 'Modern Stack',
      description:
        'Powered by React, TypeScript, and Tailwind CSS for maintainability.',
      icon: '🚀',
    },
    {
      id: 5,
      title: 'Accessible',
      description:
        'Designed with accessibility in mind for all users.',
      icon: '♿',
    },
    {
      id: 6,
      title: 'SEO Optimized',
      description:
        'Built-in optimizations for search engines and social sharing.',
      icon: '🔍',
    },
  ]

  return (
    <section
      id="features"
      className="bg-gray-50 border-t-2 border-b-2 border-black py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
