import React from "react";

const SpinnerLoader = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="inline w-5 h-8 animate-spin dark:text-gray-200 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100 50.0001 100C22.3859 100 0 78.2051 0 50.5908C0 22.9766 22.3859 0.181641 50.0001 0.181641C77.6142 0.181641 100 22.9766 100 50.5908ZM9.09091 50.5908C9.09091 73.0924 27.4983 91.4998 50.0001 91.4998C72.5019 91.4998 90.9093 73.0924 90.9093 50.5908C90.9093 28.0892 72.5019 9.68164 50.0001 9.68164C27.4983 9.68164 9.09091 28.0892 9.09091 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0401C96.1702 38.3604 97.5693 36.3775 97.0693 34.1749C96.5693 31.9723 94.5693 30.6816 92.3667 30.6816C90.1641 30.6816 88.8734 32.0817 88.1937 34.2843C87.5141 36.4869 88.8142 38.8861 91.0168 39.5657L93.9676 39.0401Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default SpinnerLoader;
