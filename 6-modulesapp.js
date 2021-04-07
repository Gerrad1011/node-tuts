//Modules -Encapsulated Code (only share minimum)

const names=require('./2-modules')
const sayHi=require('./3-utils')
const data=require('./4-alternative')
require('./5-mind-grenade')

sayHi('Calvin')
sayHi('Harry')
sayHi(names.john)
sayHi(names.peter)