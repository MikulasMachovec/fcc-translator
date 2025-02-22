'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const { text , locale} = req.body;
      console.log(text.toLowerCase())
      console.log(text.toUpperCase())
      if(!text){
        return res.json({ error : 'No text to translate'})
      }

      if(!text || !locale){
        return res.json({error: 'Required field(s) missing'})
      }

      if(locale === 'american-to-british'){
        translator.aremicanToBritish(text);
      } else if(locale === 'british-to-american'){
        translator.britishToAmerican(text);
      }else{
        return res.json({error: 'Invalid value for locale field'})
      }
      
    });
};
