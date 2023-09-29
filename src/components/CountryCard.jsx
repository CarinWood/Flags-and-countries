import React from 'react'

const CountryCard = ({name, id, chooseName, chooseNameFunc, wrongChoice, rightChoice}) => {
    console.log(wrongChoice)
  return (
    <div    
        onClick={()=>chooseNameFunc(name)}
        className='transition-all duration-300 ease-in-out opacity-100'
        id={ rightChoice === name ? "fadeAway": ""}
        >
            <p
            id={(chooseName === name && wrongChoice === false) ? "border" : (chooseName === name     && wrongChoice) ? "red-border": ""}
            className="w-[100px] h-[60px] rounded my-2 
            cursor-pointer shadow border flex 
            items-center justify-center text-sm"
            >
            {name}
            </p>
    </div>
  )
}

export default CountryCard