import { FaSpinner } from 'react-icons/fa';

export default function AdminLoading() {
    return (
        <div className="flex justify-center  ">
            <div className="relative top-1/2">
                <FaSpinner className="animate-spin h-12 w-12 text-gray-600" />
            </div>
        </div>
    );
}