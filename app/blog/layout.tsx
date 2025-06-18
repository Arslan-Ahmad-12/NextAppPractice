export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Blog Section
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            This layout wraps all blog-related pages
          </p>
        </div>
      </header>
      
      <nav className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-4xl mx-auto px-8 py-2">
          <div className="flex gap-4">
            <a 
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Blog Home
            </a>
            <a 
              href="/blog/posts/getting-started-with-nextjs"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Getting Started
            </a>
            <a 
              href="/blog/posts/advanced-routing-techniques"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Advanced Routing
            </a>
          </div>
        </div>
      </nav>
      
      <main>
        {children}
      </main>
    </div>
  );
} 