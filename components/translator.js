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
        let isChanged = false;
        const pattern = /^\d{1,2}:\d{2}$/
        for(let i = 0; i < inputArray.length; i++ ){
            let word =inputArray[i].toLowerCase()

            

            if(americanOnly[word]){
                isChanged = true;
                translation.push(`<span class="highlight">${americanOnly[word]}</span>`)
            } else if(americanToBritishSpelling[word]){
                isChanged = true;
                translation.push(`<span class="highlight">${americanToBritishSpelling[word]}</span>`)
            } else if(pattern.test(word)){
                isChanged = true;
                translation.push(`<span class="highlight">${word.replace(":",".")}</span>`)
            } else if(americanToBritishTitles[word]){
                isChanged = true;
                let translatedTitle = americanToBritishTitles[word]
                if(inputArray[i][0]=== inputArray[i][0].toUpperCase()){
                    translatedTitle = translatedTitle.charAt(0).toUpperCase() + translatedTitle.slice(1);
                }
                translation.push(`<span class="highlight">${translatedTitle}</span>`)
            } else {
                translation.push(inputArray[i])
            }              
        }
            let translationString = translation.join(" ")
            if(!isChanged) return "Everything looks good to me!"

        return translationString
    }

    britishToAmerican(inputString){
        const inputArray = inputString.split(" ");
        let translation = []
        let isChanged = false;
        const pattern = /^\d{1,2}:\d{2}$/
        for(let i = 0; i < inputArray.length; i++ ){
            let word =inputArray[i].toLowerCase()

            if(britishOnly[word]){
                isChanged = true;
                translation.push(`<span class="highlight">${britishOnly[word]}</span>`)
            } else if(Object.values(americanToBritishSpelling).includes(word)){
                isChanged = true;
                let spelling = Object.keys(americanToBritishSpelling)
                    .find(key => americanToBritishSpelling[key] === word)
                translation.push(`<span class="highlight">${spelling}</span>`)
            } else if(pattern.test(word)){
                isChanged = true;
                translation.push(`<span class="highlight">${word.replace(":",".")}</span>`)
            } else if(Object.values(americanToBritishTitles).includes(word)){
                isChanged = true;
                let translatedTitle = Object.keys(americanToBritishTitles)
                .find(key => americanToBritishTitles[key] === word)
                if(inputArray[i][0]=== inputArray[i][0].toUpperCase()){
                    translatedTitle = translatedTitle.charAt(0).toUpperCase() + translatedTitle.slice(1);
                }
                translation.push(`<span class="highlight">${translatedTitle}</span>`)
            } else {
                translation.push(inputArray[i])
            }              
        }
            let translationString = translation.join(" ")
            if(!isChanged) return "Everything looks good to me!"

        return translationString
    }

}

module.exports = Translator;