import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-8 bg-gradient-to-br from-gray-700 to-gray-800 min-h-screen">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-white drop-shadow-lg mb-8 text-center">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
