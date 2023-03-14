import {useState , useRef , useEffect} from 'react'

function myHook(){
    
    const [time , setTime] = useState(10)
    const [words , setWords] = useState('')
    const [wordCount , setWordCount] = useState(0)
    const [isTimeRunning , setIsTimeRunning] = useState(false)
    const textBoxRef = useRef(null)

    function handleChange(e){
        setWords(e.target.value)
    }
    
    function countWords(str) {
        const wordsArr = str.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    
    function startGame(){
        setWords('')
        setTime(5)
        setIsTimeRunning(prev => !prev)
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }
    function endGame(){
        setWordCount(countWords(words))
        setIsTimeRunning(false)
        
    }
    
    useEffect(()=>{
        if( isTimeRunning && time > 0){
            setWordCount(0)
            setTimeout(()=>{
                setTime(prev => prev -1)
            },1000)
        }else if(time === 0){
            endGame()
        }
    },[time , isTimeRunning])

    
    return {time , words , wordCount, countWords, handleChange , startGame , isTimeRunning ,textBoxRef}
}


export default myHook