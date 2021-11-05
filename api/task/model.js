const db = require("../../data/dbConfig");

const get = async () => {
  const tasks = await db("tasks as t")
    .leftJoin("projects as p", "t.task_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description")
    .orderBy("t.task_id", "asc");
  return tasks.map((task) => {
    return {
      task_id: task.task_id,
      task_notes: task.task_notes,
      task_completed: task.task_completed ? true : false,
      task_description: task.task_description,
      project_id: task.project_id,
      project_description: task.project_description,
      project_name: task.project_name,
    };
  });
};
const create = (task) => {
  return db("tasks")
    .insert(task)
    .then(([id]) => {
      return db("tasks")
        .where("task_id", id)
        .first()
        .then((task) => {
          return {
            task_id: task.task_id,
            task_notes: task.task_notes,
            task_completed: task.task_completed ? true : false,
            task_description: task.task_description,
            project_id: task.project_id,
          };
        });
    });
};

module.exports = {
  get,
  create,
};
