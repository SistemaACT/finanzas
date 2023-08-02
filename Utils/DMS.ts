type Data = string | Date | number | object | string[] | number[] | Date[] | object[]



export async function RunScript( spaceName:string,functionName:string,data:Object){

    let res

    try{
       res =  await fetch("https://script.google.com/macros/s/AKfycbwdPtinrkNmeis0c7jjNC0pH7NjIOrEYgLO10T7sL9HYzKKyQxP4uKLrJ70CFs_DaMqXg/exec",{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            body: JSON.stringify({spaceName:spaceName,functionName:functionName ,data:data, APIKey: "0VFMuTAoUW0NJgEbK5vT"}) // body data type must match "Content-Type" header
        })

    }catch(error){
        throw(error)
    }
    
    return await res.json()

}
