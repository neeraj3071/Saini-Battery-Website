
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 py-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild>
          <Link to="/">Return to Home Page</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
