/**
 * OS Module for interacting with OS/environment
 */
const os = require('os')

// info about current system
const user = os.userInfo()
// method returns system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)