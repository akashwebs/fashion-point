import React from "react";

const LoadingComponets = () => {
  return (
    <div>
      <div>
        <p>Answer is generating. Please Wait....</p>
        <progress className="progress w-100"></progress>
      </div>
      <div role="status" class="max-w-lg animate-pulse">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[430px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px]"></div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingComponets;
