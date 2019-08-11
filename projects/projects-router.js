const router = require("express").Router();
const Projects = require('./projects-model.js');
const Users = require('../users/users-model.js')

//add Project
router.post("/:id/addproject", (req, res) => {
    console.log('here')
    const id = req.params.id
    Users.findById(id)
        .then(user => {
            Projects.addProject({...req.body, user_id: user.id})
            .then(project => {
                res.status(201).json(project);
            })
            .catch(err => {
                res.status(500).json(err);
            });      
        })
        .catch(err => {
            res.status(500).json(err);
        });  
  });

//Get Projects
router.get("/", restricted, (req, res) => {
    Projects.getProjects()
      .then(Projects => {
        res.status(200).json(Projects);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;