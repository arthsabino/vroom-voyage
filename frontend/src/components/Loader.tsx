interface LoaderProps {
  show: boolean;
  fixed?: boolean;
}
export default function Loader({ show, fixed }: LoaderProps) {
  return (
    <>
      {show && (
        <div
          className={`${
            fixed ? "fixed overflow-hidden opacity-50" : "absolute opacity-20"
          } top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black`}
        >
          <svg
            className="h-16 w-16 animate-spin text-primary"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
    </>
  );
}
