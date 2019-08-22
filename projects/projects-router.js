const router = require("express").Router();
const Projects = require('./projects-model.js');
const Users = require('../users/users-model.js')

//middleware
const restrictedMiddleware = require('../auth/middleware/restricted-middleware.js')

//add Project
router.post("/addproject", restrictedMiddleware, (req, res) => {
  console.log('req.user',req.user)
    Projects.addProject({...req.body, user_id: req.user.id})
      .then(project => {
          res.status(201).json(project);
      })
      .catch(err => {
          res.status(500).json({err: 'couldnt add user'});
      });          
  });

//Get Projects
router.get("/", (req, res) => {
    Projects.getProjects()
      .then(Projects => {
        console.log(Projects)
        res.status(200).json(Projects);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;