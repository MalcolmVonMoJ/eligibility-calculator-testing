const express = require('express')
const router = express.Router()

// Limits
const disposableCapital = 8000
const limitBasic = 2657
// Add your routes here - above the module.exports line


router.post('/finish', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names
	let income = Number(req.session.data['other-income-client-4']) + Number(req.session.data['other-income-client-3']) + Number(req.session.data['other-income-client-2']) + Number(req.session.data['other-income-client-1']) + Number(req.session.data['client-gross-income'])


let dependant = req.session.data['dependant']
let totalDependants = Number(req.session.data['dependant-child']) + Number(req.session.data['dependant-adult'])
  if (dependant == 'yes' && totalDependants > 4) {
	  	let limit = limitBasic + (totalDependants-4)*222
		  if (income > limit) {
				res.redirect('/finish-bad')
		  } else {
			res.redirect('/finish-good')
		  }
  } else {
	  if (income > limitBasic) {
				res.redirect('/finish-bad')
		  } else {
			res.redirect('/finish-good')
		  }
  }
})

router.post('/question2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names
	
  let answer = req.session.data['date-started']
  if (answer == 'beforeLAR') {
    res.redirect('/question2a')
  } else {
    res.redirect('/question2')
  }
})





router.post('/question5a', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names
	
  let answer = req.session.data['partner']
  if (answer == 'no') {
    res.redirect('/question5b')
  } else {
    res.redirect('/question5a')
  }
  })
router.post('/question6b', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names
	
  let total = Number(req.session.data['equity']) + Number(req.session.data['savings']) + Number(req.session.data['investments']) + Number(req.session.data['valuables']) + Number(req.session.data['other']);
 if (total > disposableCapital) {
res.redirect('/finish-bad')
} else {
    res.redirect('/question6b')
  }
})

router.post('/question3a', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let answer1 = req.session.data['benefits']
  
  if (answer1 == 'yes') {
    res.redirect('/finish-good')
  } else {
    res.redirect('/question3a')
  }
})
router.post('/question3', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let answer1 = req.session.data['benefits']
  let answer2 = req.session.data['NI-benefits']
  
  if (answer1 == 'yes' && answer2 === 'false') {
    res.redirect('/finish-good')
  } else {
    res.redirect('/question3')
  }
})


module.exports = router

