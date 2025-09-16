import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center max-w-lg w-full border border-blue-200">
        <div className="flex flex-col items-center mb-6">
          <svg
            width="80"
            height="80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-blue-400 mb-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <h1 className="text-6xl font-bold text-blue-900 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Page not found
          </h2>
        </div>
        <p className="text-gray-600 text-center mb-6">
          Oops! The page you are looking for does not exist.
          <br />
          Maybe you want to switch to a better energy provider?
        </p>
        <Link
          to="/"
          className="bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
