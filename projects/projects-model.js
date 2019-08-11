const db = require('../database/dbConfig.js');

module.exports = {
    addProject,
    getProjects
}

function addProject(project){
    return db("projects").insert(project, "id");
}

function getProjects() {
    return db("projects");
}