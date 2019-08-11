const router = require('express').Router();
const bcrypt = require('bcryptjs')
const Users = require('./users-model.js')

//get all users
router.get('/', (req, res) => {
      Users.findUsers()
        .then(users => {
          res.json(users);
        })
        .catch(err => res.send(err));   
  });

//add a user
  router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;
  
    Users.add(user)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

//login a user
  router.post('/login', (req,res) => {
    let {username, password} = req.body;

    Users.findBy({username})
        .first()
        .then(user => {
            if( user && bcrypt.compareSync(password, user.password)){
                //make sure the user is coming through
                console.log(user)
                res.status(200).json({message: `Welcome ${user.username}!`})
            } else {
                res.status(401).json({message: "Invalid Creds"})
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
  })

  module.exports = router;