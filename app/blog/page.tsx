export default function BlogPage() {
  const posts = [
    {
      slug: 'getting-started-with-nextjs',
      title: 'Getting Started with Next.js',
      excerpt: 'Learn the basics of Next.js App Router and how to create your first routes.',
      date: '2024-01-15'
    },
    {
      slug: 'advanced-routing-techniques',
      title: 'Advanced Routing Techniques',
      excerpt: 'Explore dynamic routes, nested layouts, and API routes in Next.js.',
      date: '2024-01-20'
    },
    {
      slug: 'understanding-app-router',
      title: 'Understanding App Router',
      excerpt: 'Deep dive into the App Router architecture and best practices.',
      date: '2024-01-25'
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">Blog Layout Example</h2>
          <p className="text-lg mb-4">
            This page demonstrates how layouts work in Next.js App Router. 
            Notice the header and navigation above - they're provided by the 
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono text-sm">
              app/blog/layout.tsx
            </code> file.
          </p>
          <ul className="space-y-2">
            <li><strong>Route:</strong> /blog</li>
            <li><strong>File:</strong> app/blog/page.tsx</li>
            <li><strong>Layout:</strong> app/blog/layout.tsx</li>
            <li><strong>Type:</strong> Static Route with Layout</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mb-6">Recent Posts</h3>
        <div className="grid gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">
                <a 
                  href={`/blog/posts/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {post.title}
                </a>
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <a 
                  href={`/blog/posts/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <a 
            href="/"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
} 