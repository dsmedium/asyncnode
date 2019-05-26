const user = getUser(1,(user)=>{
  console.log(user)
  repo = getRepo(user.name,(repo)=>{
    console.log(repo)
    file = getFile(repo.repos[1],(file)=>{
      console.log(file)
    })
  })
})

function getUser(id,callback){
  setTimeout(()=>{
    console.log('returning user')
    callback({id:id,naem:'nizami'})
  },1000)
}

function getRepo(name,callback){
  setTimeout(()=>{
    console.log('getting reppo')
    callback({name:name,repos:[1,2,3,4,5]})
  },1000)
}

function getFile(repo,callback){
  setTimeout(()=>{
    console.log('getting file')
    callback({repo:repo,file:[1,2,3,4]})
  },500)
}
