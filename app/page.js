import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <div className="flex flex-col gap-4">
          <Link
            href="/week-2"
            className="block text-center py-2 px-4 rounded bg-gray-700 hover:bg-gray-600 transition"
          >
            Week 2
          </Link>
          <Link
            href="/week-3"
            className="block text-center py-2 px-4 rounded bg-gray-700 hover:bg-gray-600 transition"
          >
            Week 3
          </Link>
          <Link
            href="/week-4"
            className="block text-center py-2 px-4 rounded bg-gray-700 hover:bg-gray-600 transition"
          >
            Week 4
          </Link>
        </div>
      </div>
    </div>
  );
}
