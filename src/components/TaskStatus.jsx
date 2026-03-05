const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-bold mb-3">In Progress</h2>

      {tasks.map(task => (
        <div key={task.id} className="mb-2">
          <p className="font-medium">{task.title}</p>
          <button
            onClick={() => onComplete(task)}
            className="bg-green-700 cursor-pointer btn-block text-white px-3 py-1 rounded mt-1"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;