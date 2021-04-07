//os module

const os = require('os')

const userinfo=os.userInfo()
//userinfo
console.log(`Userinfo :${userinfo}`)

//uptime
console.log(`The system uptime is ${os.uptime()} seconds`)

//homedir
console.log(`Home Directory ${os.homedir()}`)

//architecht
console.log(`CPU architect ${os.arch()}`)

//cpus
console.log(`CPU model :${os.cpus()[0].model}`)

//networkInterfaces
console.log(`Network Interface : ${os.networkInterfaces()}`)

//hostname
console.log(`Hostname: ${os.hostname()}`)

//platfrom
console.log(`Platform: ${os.platform()}`)