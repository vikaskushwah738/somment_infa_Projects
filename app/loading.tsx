export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        {/* Loader Container */}
        <div className="relative w-64 h-16 overflow-hidden">
          {/* Road Background */}
          <div className="absolute inset-0 bg-gray-800 rounded-md">
            <div className="absolute top-[calc(50%-0.125rem)] w-full h-1 bg-gray-600"></div>
            <div className="absolute top-[calc(50%+1rem)] w-full h-1 bg-gray-600"></div>
          </div>
  
          {/* Moving Cars */}
          <div className="absolute left-0 w-full h-full flex items-center justify-between animate-slide">
            <div className="w-6 h-6 bg-yellow-500 rounded-full shadow-lg"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full shadow-lg"></div>
            <div className="w-6 h-6 bg-red-500 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    );
  }
  
  