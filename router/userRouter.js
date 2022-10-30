let express = require('express')

let router = express.Router()

router.get('/', (req, res) => {
  res.render('user')
})

router.get('/new', (req, res) => {
  // new user form
  res.render('userForm')
})

router.post('/', (req, res) => {
  // capture form data
})

router.get('/:id', (req, res) => {
  //   get single user details
    res.render('singalUserDetails')
})

router.get('/:id/edit', (req, res) => {
  //   edit form
})
router.put('/:id', (req, res) => {
  // update a user
})
router.delete('/:id', (req, res) => {
  // delete the user
})

module.exports = router
