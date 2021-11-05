const db = require("../../data/dbConfig");

const get = () => {
  return db("resources");
};

const create = (resource) => {
  return db("resources")
    .insert(resource)
    .then(([id]) => {
      return db("resources").where("resource_id", id).first();
    });
};

module.exports = {
  get,
  create,
};
