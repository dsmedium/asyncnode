console.log('before')
const user = getUser(1,(user)=>{
  console.log(user)
  const repo = getRepo(user.name,(repo)=>{
    console.log(repo)
  })

})
// console.log(user)
console.log('after')

function getUser(id,callback){
  setTimeout(()=>{
    console.log('getting repos')
    callback ({id:id,name:'nizami'})
  },1000)
}

function getRepo(name,callback){
  setTimeout(()=>{
    console.log('getting repose')
    callback({name:name,repo:[1,2,2,3,4,5]})
  },1000)
}
