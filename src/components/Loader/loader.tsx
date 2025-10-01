import { Loader as LoaderIcon } from "lucide-react";

const Spinner: React.FC<{ message?: string; size?: number }> = ({ message, size = 48 }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 pointer-events-none">
      <LoaderIcon className="animate-spin text-yellow-500" size={size} />
      {message && <p className="text-white mt-2 text-lg">{message}</p>}
    </div>
  );
};

export default Spinner;
