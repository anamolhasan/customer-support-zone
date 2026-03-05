const ResolvedList = ({ resolved }) => {
  return (
    <div className="border p-4 rounded mt-4">
      <h2 className="text-xl font-bold mb-2">Resolved</h2>

      {resolved.map(ticket => (
        <p key={ticket.id}>{ticket.title}</p>
      ))}
    </div>
  );
};

export default ResolvedList;