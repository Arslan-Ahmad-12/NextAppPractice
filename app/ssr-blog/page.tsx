import React from 'react';

export default function SSRBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Server-Side Rendered Blog Post
            </h1>
            <p className="text-blue-100">
              This page is rendered on the server
            </p>
          </div>

          {/* Content */}
          <div className="px-6 py-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                About Me
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  My name is <strong>Arslan</strong> and I am a software engineer and currently working on MERN stack.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What is Server-Side Rendering (SSR)?
              </h3>
              <p className="text-gray-700 mb-4">
                Server-Side Rendering is a technique where the HTML content is generated on the server before being sent to the client. This approach provides several benefits:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Better SEO performance as search engines can easily crawl the content</li>
                <li>Faster initial page load for users</li>
                <li>Better performance on low-end devices</li>
                <li>Improved Core Web Vitals scores</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Technical Details
              </h3>
              <p className="text-gray-700 mb-4">
                This page is built using Next.js 13+ with the App Router. The component is a server component by default, which means:
              </p>
              
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
                <pre className="text-sm">
{`// This is a server component (no "use client" directive)
export default function SSRBlogPage() {
  // This code runs on the server
  return (
    <div>Your content here</div>
  );
}`}
                </pre>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-blue-800">
                  <strong>Note:</strong> This page was rendered on the server at request time, providing optimal performance and SEO benefits.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t">
            <p className="text-sm text-gray-600 text-center">
              Built with Next.js • Server-Side Rendering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}