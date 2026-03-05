const TicketCard = ({ ticket, onAdd }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold text-lg">{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p>Customer: {ticket.customer}</p>
      <p>Priority: {ticket.priority}</p>

      <button
        onClick={() => onAdd(ticket)}
        className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
      >
        Add to Task
      </button>
    </div>
  );
};

export default TicketCard;