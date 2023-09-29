import React from 'react'

const CountryCard = ({name, id, chooseName, chooseNameFunc, wrongChoice}) => {
    console.log(wrongChoice)
  return (
    <div    
        onClick={()=>chooseNameFunc(name)}
        >
            <p
            id={(chooseName === name && wrongChoice === false) ? "border" : (chooseName === name && wrongChoice) ? "red-border": ""}
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