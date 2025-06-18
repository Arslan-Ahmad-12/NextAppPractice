import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Next.js Rendering Demo by Arslan.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the differences between Server-Side Rendering (SSR) and Client-Side Rendering (CSR)
            with these interactive blog posts featuring Arslan&apos;s introduction.
           </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            So there are two blog post below, when you click on SSR one content will be created by server and shown to the client without waiting for javascript to load,
            and when you click on CSR one, content will be created by client (After javascript loads content) and shown to the client. like first wait for the content to get loaded form javascript then show
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* SSR Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Server-Side Rendering</h2>
              <p className="text-blue-100">Rendered on the server for optimal performance</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Experience fast loading times and better SEO with server-side rendered content.
                Perfect for content-heavy pages and search engine optimization.
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-1">
                <li>✓ Better SEO performance</li>
                <li>✓ Faster initial page load</li>
                <li>✓ Better for low-end devices</li>
                <li>✓ Improved Core Web Vitals</li>
              </ul>
              <Link
                href="/ssr-blog"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                View SSR Blog →
              </Link>
            </div>
          </div>

          {/* CSR Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
              <h2 className="text-2xl font-bold text-white mb-2">Client-Side Rendering</h2>
              <p className="text-green-100">Rendered in the browser with interactive features</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Enjoy highly interactive user interfaces with dynamic content updates.
                Ideal for applications requiring real-time features and user interactions.
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-1">
                <li>✓ Highly interactive UI</li>
                <li>✓ Dynamic content updates</li>
                <li>✓ Real-time features</li>
                <li>✓ Rich user experiences</li>
              </ul>
              <Link
                href="/csr-blog"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                View CSR Blog →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">About me</h3>
            <p className="text-gray-700 mb-4">
              My name is <strong>Arslan</strong> and I am a software engineer and currently working on MERN stack.
            </p>
            <p className="text-sm text-gray-600">
              This demo showcases different rendering techniques in Next.js 13+ with the App Router.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}