import {Task} from "@/app/api/tasks/route";

const getTasks = async () => {
  const res = await fetch("http://localhost:300/api/tasks", {
    method: "GET",
    // cache:"no-store" SSR
    // next:{revalidate : 3600m} ISR
  });
  return await res.json();
};

const TaskPage = async () => {
  const tasks = (await getTasks()).tasks as Task[];
  return (
    <div>
      <div className='text-rose-300 text-4xl font-bold'>TaskPage</div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
