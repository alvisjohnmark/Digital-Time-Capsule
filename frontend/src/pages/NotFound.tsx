import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        className="px-6 py-2 text-white bg-[#ff8a65] rounded-lg shadow  transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
