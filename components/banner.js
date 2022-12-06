import { PhoneIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Banner() {
  return (
    <div className="relative hidden md:block bg-cyan-700 z-40">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-12 sm:px-4 sm:text-center">
          <div className="font-medium text-white ">
            <div className=" md:inline items-center">
              <span className="text-green-300 text-xs uppercase">
                <strong>Contact:</strong>
              </span>{" "}
              &nbsp;
              <span className="text-xs">1-800-1234-567 1-800-1234-567</span>
            </div>{" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;
            <div className=" md:inline items-center">
              <span className="text-green-300 text-xs uppercase">
                <strong>Email:</strong>
              </span>{" "}
              &nbsp;
              <span className="text-xs">demo@gmail.com</span>
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;
            <div className=" md:inline items-center">
              <span className="text-green-300 text-xs uppercase">
                <strong>Address:</strong>
              </span>{" "}
              &nbsp;
              <span className="text-xs">
                2130 Fulton Street San Diego CA 94117-1080 USA
              </span>
            </div>
          </div>
        </div>
        {/* <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
          <button
            type="button"
            className="flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white">
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
