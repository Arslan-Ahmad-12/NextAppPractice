export default function AboutPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-4">
          This is an example route to help you understand Next.js App Router routing.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Route Information</h2>
          <ul className="space-y-2">
            <li><strong>Route:</strong> /about</li>
            <li><strong>File:</strong> app/about/page.tsx</li>
            <li><strong>Type:</strong> Static Route</li>
          </ul>
        </div>
        <a 
          href="/"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
} 