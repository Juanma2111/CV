export default function ProgressBar({ label, level }) {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-xl">{label}</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-6">
                <div
                    className="bg-gradient-to-r from-purple-950 to-indigo-600 h-6 rounded-full transition-all duration-700 text-right"
                    style={{ width: `${level}%` }}
                >
                    <span className="text-white text-base align-top mr-2">
                        {level}%
                    </span>
                </div>
            </div>
        </div>
    );
}
