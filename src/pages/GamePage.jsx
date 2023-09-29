import { useState, useEffect } from "react"
import FlagCard from "../components/FlagCard"
import CountryCard from "../components/CountryCard"



const GamePage = () => {
    const [countries, setCountries] = useState([])
    const [nameArray, setNameArray] = useState([])
    const [flagArray, setFlagArray] = useState([])
    const [gameOn, setGameOn] = useState(false)
    const [choiceOne, setChoiceOne] = useState(false)
    const [choiceTwo, setChoiceTwo] = useState(false)
    const [chooseFlag, setChooseFlag] = useState(null)
    const [chooseName, setChooseName] = useState(null)
    const [wrongChoice, setWrongChoice] = useState(false)
    const [rightChoice, setRightChoice] = useState('')

    useEffect(() => {
        if(gameOn) {
            shuffleArray()
        }

    }, [gameOn])

    const populateArray = async(e) => {
        const regionName = e.target.value
        const res = await fetch('https://restcountries.com/v3.1/region/' + regionName)
        const data = await res.json()
        setCountries(data)
    }

    const shuffleArray = () => {
        const nameArrayCopy = [...nameArray];
      
        for (let i = nameArrayCopy.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          
          const tempName = nameArrayCopy[i];
          nameArrayCopy[i] = nameArrayCopy[j];
          nameArrayCopy[j] = tempName;
        }
        setNameArray(nameArrayCopy);
        console.log(nameArray)
      };

   

    const randomCountry = () => {
        // Create a copy of the current countries array
        const countriesCopy = [...countries];
      
        const selectedCountries = [];
      
        for (let i = 0; i < 5; i++) {
          const randomIndex = Math.floor(Math.random() * countriesCopy.length);
          const randomCountry = countriesCopy[randomIndex];
      
          if (!randomCountry) {
            break; // Handle the case where there are no more countries available
          }
      
          // Add the random country to the selectedCountries array
          selectedCountries.push(randomCountry);
      
          // Remove the country from the copy to avoid duplicates
          countriesCopy.splice(randomIndex, 1);
        }
      
        // Make copies of the selected countries for both arrays
        const nameArrayCopy = [...nameArray, ...selectedCountries];
        const flagArrayCopy = [...flagArray, ...selectedCountries];
      
        // Update the state with the new arrays
        setNameArray(nameArrayCopy);
        setFlagArray(flagArrayCopy);
        setCountries(countriesCopy);
      };
      
   

    const startGame = () => {

        for (let i = 0; i < 5; i++) {
            randomCountry()  
        }

        setGameOn(true)
        
    }

    const chooseNameFunc = (countryName) => {
        setChooseName(countryName)
        setChoiceOne(true)
    }


    const chooseFlagFunc = (flagName) => {
        setChooseFlag(flagName)
        setChoiceTwo(true)
    }

    const deleteFromArray = () => {
        console.log(chooseName)
       setFlagArray(flagArray.filter(prev => prev.name.common !== chooseFlag))
       setNameArray(nameArray.filter(prev => prev.name.common !== chooseName))
    }


    const clearChoices = () => {
        setTimeout(() => {
            deleteFromArray()
            setChoiceOne('')
            setChoiceTwo('')
            setChooseFlag(null)
            setChooseName(null)
            setWrongChoice(false);
         

        }, 200)
          
    }

    useEffect(() => {
    if (choiceOne && choiceTwo) {
        if (chooseFlag === chooseName) {
            console.log("It's a match!");
            setRightChoice(chooseFlag)
            clearChoices();
            
        } else {
            console.log("It's not a match");
            setWrongChoice(true);
            clearChoices()
        }
    }
}, [choiceOne, choiceTwo]);


  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center'>

      <div 
        id={gameOn ? "hide" : "show"}
      >
            <select
                    onChange={populateArray} 
                    className="bg-zinc-700 border flex items-center 
                    justify-center text-white p-2 rounded text-center"

            >
                        <option>Choose a region</option>
                        <option value="Europe">Europe</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="Oceania">Oceania</option>
                        <option value="America">America</option>
            </select>

            <button 
                onClick={startGame}
                className="font-bold ml-5 cursor-pointer text-white border p-3 rounded mt-3">
                    Start Game
            </button>
        
        </div>

        <div className="flex items-center justify-around w-[20%]">
        {nameArray.length > 0? 
        <div className="flex flex-col justify-center items-center ">
            {nameArray.map((item, index)  => {
                return <CountryCard 
                            key={index} 
                            name={item.name.common}
                            id={index}
                            chooseName={chooseName}
                            chooseNameFunc={chooseNameFunc}
                            wrongChoice={wrongChoice}
                            rightChoice={rightChoice}
                        />
            })}
        </div>
        : <></>}



        {flagArray.length > 0 ? 
        <div className="flex flex-col justify-center items-center">
        {flagArray.map((item, index) => {
            return <FlagCard 
                        key={index} 
                        id={index} 
                        name={item.name.common} 
                        flag={item.flags.png}
                        chooseFlagFunc={chooseFlagFunc}
                        chooseFlag={chooseFlag}
                        wrongChoice={wrongChoice}
                        rightChoice={rightChoice}
                    />
        })}
        </div>
         : <></>}
         </div>
        </div>
  )
}

export default GamePage