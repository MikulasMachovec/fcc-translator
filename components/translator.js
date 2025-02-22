const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {


    validate(inputString){

    }

    aremicanToBritish(inputString){
        const inputArray = inputString.split(" ");
        let translation = []
        for(let i = 0; i < inputArray.length; i++ ){
            let word =inputArray[i].toLowerCase()

            if(americanOnly[word]){
                translation.push(americanOnly[word])
            } else if(americanToBritishSpelling[word]){
                translation.push(americanToBritishSpelling[word])
            } else if(americanToBritishTitles[word]){
                let translatedTitle = americanToBritishTitles[word]
                if(inputArray[i][0]=== inputArray[i][0].toUpperCase()){
                    translatedTitle = translatedTitle.charAt(0).toUpperCase() + translatedTitle.slice(1);
                }
                translation.push(translatedTitle)
            } else {
                translation.push(inputArray[i])
            }              
        }
        //return
        console.log(translation)
    }

    britishToAmerican(){}

}

module.exports = Translator;