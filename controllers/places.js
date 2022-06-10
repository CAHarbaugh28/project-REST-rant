const router = require('express').Router()

router.get('/', (req,res) => {
    let places = [{
        name: 'Jeffersons',
        city: 'Lawrence',
        state: 'KS',
        cuisines: 'American',
        pic: '/images/jeffersons.jpeg'
      }, {
        name: 'Hawaiian Bros',
        city: 'Lawrence',
        state: 'KS',
        cuisines: 'Hawaiian',
        pic: '/images/hawaiian-bros.jpeg'
      }]
      
    res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router