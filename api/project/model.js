const db = require("../../data/dbConfig");

async function get() {
  const projects = await db("projects");

  return projects.map((project) => {
    return {
      project_id: project.project_id,
      project_name: project.project_name,
      project_completed: project.project_completed ? true : false,
      project_description: project.project_description,
    };
  });
}

function insert(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => {
      return db("projects")
        .where("project_id", id)
        .first()
        .then((project) => {
          return {
            project_id: project.project_id,
            project_name: project.project_name,
            project_completed: project.project_completed ? true : false,
            project_description: project.project_description,
          };
        });
    });
}

module.exports = {
  get,
  insert,
};
