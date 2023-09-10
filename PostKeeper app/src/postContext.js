// create post context here
import { createContext, useState, useContext} from "react";

const postContext=createContext();



// Create custom hook that returns context value here
function useValue(){
    const value=useContext(postContext);
    return value;
}

function customPostContext({children}){

    const [savedPosts, setSavedPosts] = useState([]);
    const [count,setCount]=useState(0);

    const [showSavedList, setShowSavedList] = useState(false);

    const countInc=async (posts)=>{
                const mahi=savedPosts.find((value)=>value.id===posts.id);
        if(!mahi){
            setCount(count+1);
        setSavedPosts([...savedPosts, posts]);
        }
        // setShowSavedList(true);
    }
    const reSet=()=>{
        setCount(0);
        setSavedPosts([]);
        setShowSavedList(false);
    }

    return(
        <postContext.Provider value={{savedPosts,countInc,count,reSet,setShowSavedList,showSavedList,savedPosts}}>
            {children}
        </postContext.Provider>
    )
}



// create a custom saved post provider here with add and reset functions








export {useValue};
export default customPostContext;