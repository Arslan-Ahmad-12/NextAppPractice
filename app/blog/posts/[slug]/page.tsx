interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog Post</h1>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Route Information</h2>
          <ul className="space-y-2">
            <li><strong>Route:</strong> /blog/posts/[slug]</li>
            <li><strong>File:</strong> app/blog/posts/[slug]/page.tsx</li>
            <li><strong>Type:</strong> Nested Dynamic Route</li>
            <li><strong>Slug:</strong> {params.slug}</li>
          </ul>
        </div>
        
        <article className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow mb-6">
          <h3 className="text-2xl font-semibold mb-4">
            {params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </h3>
          <div className="text-gray-600 dark:text-gray-300 mb-4">
            <span>Published on: {new Date().toLocaleDateString()}</span>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            This is an example blog post with the slug "{params.slug}". 
            In a real application, you would fetch the actual blog post content 
            based on this slug from your database or CMS.
          </p>
          <p className="text-lg leading-relaxed">
            The URL structure /blog/posts/[slug] demonstrates nested routing in Next.js App Router, 
            where you can have multiple dynamic segments in your route hierarchy.
          </p>
        </article>

        <div className="flex gap-4">
          <a 
            href="/"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </a>
          <a 
            href="/blog/posts/getting-started-with-nextjs"
            className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            View "Getting Started" Post
          </a>
          <a 
            href="/blog/posts/advanced-routing-techniques"
            className="inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
          >
            View "Advanced Routing" Post
          </a>
        </div>
      </div>
    </div>
  );
} 