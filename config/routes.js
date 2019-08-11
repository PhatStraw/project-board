const usersRouter = require('../users/users-router.js')
const projectsRouter = require('../projects/projects-router.js')

module.exports = server => {
    server.use('/users', usersRouter);
    server.use('/projects', projectsRouter);
}