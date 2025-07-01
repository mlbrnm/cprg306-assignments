export default function Item(props) {
  return (
    <li className="flex items-center justify-between p-4 mb-2 bg-white rounded shadow">
      <span className="font-semibold text-gray-800 w-80 truncate">
        {props.name}
      </span>
      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded w-24 text-center">
        {props.category}
      </span>
      <span className="mx-2 text-sm text-gray-600 w-24 text-center">
        Quantity: {props.quantity}
      </span>
    </li>
  );
}
