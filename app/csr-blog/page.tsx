"use client";

import React, { useState, useEffect } from 'react';

export default function CSRBlogPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Simulate client-side loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Client-Side Rendered Blog Post
            </h1>
            <p className="text-green-100">
              This page is rendered on the client with interactive features
            </p>
            {currentTime && (
              <p className="text-green-200 text-sm mt-2">
                Current time: {currentTime}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="px-6 py-8">
            {!isLoaded ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                <span className="ml-3 text-gray-600">Loading content...</span>
              </div>
            ) : (
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
                  What is Client-Side Rendering (CSR)?
                </h3>
                <p className="text-gray-700 mb-4">
                  Client-Side Rendering is a technique where the HTML content is generated in the browser using JavaScript. This approach provides several benefits:
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Highly interactive user interfaces</li>
                  <li>Dynamic content updates without page refreshes</li>
                  <li>Rich user experiences with real-time features</li>
                  <li>Better for applications with frequent state changes</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Technical Details
                </h3>
                <p className="text-gray-700 mb-4">
                  This page is built using Next.js 13+ with the App Router. The component is a client component, which means:
                </p>

                <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 overflow-x-auto">
                  <pre className="text-sm">
                    {`"use client"; // This directive makes it a client component

import React, { useState, useEffect } from 'react';

export default function CSRBlogPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // This code runs in the browser
    setIsLoaded(true);
  }, []);
  
  return (
    <div>Your interactive content here</div>
  );
}`}
                  </pre>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <p className="text-green-800">
                    <strong>Note:</strong> This page was rendered on the client, enabling interactive features like the live clock above and smooth loading animations.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t">
            <p className="text-sm text-gray-600 text-center">
              Built with Next.js • Client-Side Rendering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 