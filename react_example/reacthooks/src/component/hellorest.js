import { useEffect, useState } from "react"
import  axios from "axios"


function HelloRest(){

    const [users, setUsers] = useState({remoteUsers:[]})

    useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                console.log(response)
                setUsers(u=>response.data)
                console.log(users);
                
            })
            .catch(error=>{
                console.log(error)
            })
    }, [])

/*     const renderUsers=()=>{
        return (
            users.map(u=>{
                return(
                    <div>
                        {u.title}
                    </div>
                )
            })
        )
    }
 */
    return(
        <div>
            <h1>Get data from rest api!!!!</h1>
            <ol>
                {users.map(u=>{
                    <li key={u.id}>
                        {u.title}
                    </li>
                })}
            </ol>
        </div>
    )

}

export default HelloRest