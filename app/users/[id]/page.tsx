interface UserPageProps {
  params: {
    id: string;
  };
}

export default function UserPage({ params }: UserPageProps) {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">User Profile</h1>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Route Information</h2>
          <ul className="space-y-2">
            <li><strong>Route:</strong> /users/[id]</li>
            <li><strong>File:</strong> app/users/[id]/page.tsx</li>
            <li><strong>Type:</strong> Dynamic Route</li>
            <li><strong>User ID:</strong> {params.id}</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow mb-6">
          <h3 className="text-xl font-semibold mb-4">User Details</h3>
          <p className="mb-2"><strong>ID:</strong> {params.id}</p>
          <p className="mb-2"><strong>Name:</strong> User {params.id}</p>
          <p className="mb-2"><strong>Email:</strong> user{params.id}@example.com</p>
          <p className="mb-2"><strong>Status:</strong> Active</p>
        </div>

        <div className="flex gap-4">
          <a 
            href="/"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </a>
          <a 
            href="/users/123"
            className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            View User 123
          </a>
          <a 
            href="/users/456"
            className="inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors"
          >
            View User 456
          </a>
        </div>
      </div>
    </div>
  );
} 