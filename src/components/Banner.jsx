const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Ticket Overview</h2>

      <div className="flex justify-center gap-10">
        <p>In Progress: {inProgressCount}</p>
        <p>Resolved: {resolvedCount}</p>
      </div>
    </div>
  );
};

export default Banner;