import React from 'react'

const FlagCard = ({id, name, flag, chooseFlagFunc, chooseFlag, wrongChoice}) => {
  return (
    <div 
  
        onClick={()=> chooseFlagFunc(name)}>
            <img 
                src={flag} 
                alt="/" 
                id={(chooseFlag === name && wrongChoice === false) ? "flag-border" : (chooseFlag === name && wrongChoice === true) ? "red-flag-border" : ""}
                className="w-[100px] h-[60px] rounded my-2 
                cursor-pointer shadow"

            />
    </div>
  )
}

export default FlagCard