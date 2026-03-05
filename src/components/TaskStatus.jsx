const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-bold mb-3">In Progress</h2>

      {tasks.map(task => (
        <div key={task.id} className="mb-2">
          <p>{task.title}</p>
          <button
            onClick={() => onComplete(task)}
            className="bg-blue-500 text-white px-3 py-1 rounded mt-1"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;