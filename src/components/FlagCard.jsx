import React from 'react'

const FlagCard = ({id, name, flag, chooseFlagFunc, chooseFlag, wrongChoice,  rightChoice}) => {
  return (
    <div 
        onClick={()=> chooseFlagFunc(name)}
        className='transition-all duration-300 ease-in-out opacity-100'
        id={ rightChoice === name ? "fadeAway": ""}
        >
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