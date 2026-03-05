const TicketCard = ({ ticket, onAdd }) => {
  return (
    <button
      onClick={() => onAdd(ticket)}
      className="border p-4 rounded shadow relative bg-white cursor-pointer shadow-2xl hover:shadow-amber-50"
    >
      <div className="flex justify-between">
        <h3 className="font-bold text-lg text-black">{ticket.title}</h3>
        <span
          className={`px-2 py-1 text-xs rounded font-semibold ${
            ticket.status === "Open"
              ? "bg-green-100 text-green-700"
              : ticket.status === "In-Progress"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-100 text-gray-700"
          }`}
        >
          {ticket.status}
        </span>
      </div>
      <p className="text-sm mt-1 text-gray-600 text-left">{ticket.description}</p>

      <div className="flex justify-between items-center mt-2 text-black"></div>

      <div className="flex justify-between items-center mt-1 text-black">
        <div className="flex gap-2 items-center">
          <p>#100{ticket.id}</p>
          <span
            className={`px-2 py-1 text-xs rounded font-semibold ${
              ticket.priority === "High"
                ? "bg-red-100 text-red-700"
                : ticket.priority === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
            }`}
          >
            {ticket.priority} PRIORITY
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <p className="text-sm">{ticket.customer}</p>
          <p className="text-xs text-gray-500">
            Created: {new Date(ticket.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* <button
    onClick={() => onAdd(ticket)}
    className="mt-3 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
  >
    Add to Task
  </button> */}
    </button>
  );
};

export default TicketCard;
