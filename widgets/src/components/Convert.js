import React, {useState, useEffect} from "react";
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState("");
    const [debouncedText, setDebouncedText] = useState(text) // debounce is being created to prevent multple request from the input
    // deounce function
    useEffect(() => {
        const timerId = setTimeout(()=> {
            setDebouncedText(text); // this sets the text inputstate after 500ms of no stoppage 
        },500);
        return () => {
            clearTimeout(timerId) // this resets the timer if there's acrivity in the input bar 
        }
    }, [text]);
    // making request and the response cna be seen in the network section of the console
    useEffect(() => {
        const doTranslation = async () => {
           const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',{} , {
            params: {
                q: debouncedText, // this was was updated from text because of the timer added
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })
        setTranslated(data.data.translations[0].translatedText)// the first data is the axios response variable while the rest is gooten from the api  
        }
        doTranslation();
    },[language, debouncedText]);   

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div> 
    );
}

export default Convert;