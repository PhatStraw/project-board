const db = require('../database/dbConfig.js');

module.exports = {
    addProject
}

function addProject(project){
    return db("projects").insert(project, "id");
}