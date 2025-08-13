const history=[]
history.push("Telangana")
history.push("Maharashtra")
history.push("AP")
history.push("Tamil Nadu")
history.push("Kerala")
history.push("Orissa")
history.pop()
const log=[]
let n=history.length
for(i=0;i<n;i++){
    log.unshift(history.pop())
}
log.slice(0,5)
console.log(history)
console.log(log)