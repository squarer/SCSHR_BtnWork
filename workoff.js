const loginAndPressSelector = require('./src/LoginAndPressSelector')

//登入然後打下班下班
loginAndPressSelector('#BtnOffWork')
	.then(console.log)
	.catch(console.error)
