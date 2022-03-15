const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./new/first.txt', 'utf8')
const second = readFileSync('./new/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
