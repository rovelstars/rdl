export default function Sidebar() {
  return (
    <div className="flex flex-col items-center w-16 h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
      <a className="flex items-center justify-center mt-3" href="#">
        <i className="fad fa-user text-white" />
      </a>
      <div className="flex flex-col items-center mt-3 border-t border-gray-700">
        <a
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
          href="#"
        >
          <i className="fad fa-user text-white" />
        </a>
      </div>
    </div>
  );
}
