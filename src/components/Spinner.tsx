import React from "react";

export default function Spinner() {
  return (
    <div className="flex space-x-2 justify-center items-center h-full">
      <div className="h-4 w-4 bg-blue-600 rounded-full animate-bounce"></div>
      <div className="h-4 w-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.5s]"></div>
    </div>
  );
}
