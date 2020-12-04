import { useState } from "react";


function HelloHookComponent (){

    const [myCounter, meetingWithAliens] = useState(8)

  /*   const teleportNow=()=>{
        meetingWithAliens(currentState=>currentState + 1)
    }	 */

/*     function meetMe(cs){
        return cs+1
    }

    const teleportNow=()=>{
        meetingWithAliens(meetMe)
    }	
 */

/*     const teleportNow=()=>{
        meetingWithAliens(function(cs){
            return cs+1
        })
    } */

/*     const teleportNow=()=>{
        meetingWithAliens((cs)=>{
            return cs+1
        })
    } */

    const teleportNow=()=>{
        meetingWithAliens(cs=>cs+1)
    }
   

    return(
        <div>
            <h1>my JSX from functional component</h1>
            <button onClick={teleportNow}>
                {myCounter}
            </button>
            <br></br>
            <br></br>
            <button onClick={()=>meetingWithAliens(myCounter+1)}>
                {myCounter}
            </button>
        </div>
    )


}

export default HelloHookComponent