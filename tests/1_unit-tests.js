const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {
    suite('American to british translation',()=>{
        test('Mangoes are my favorite fruit.',()=>{
            const text = 'Mangoes are my favorite fruit.'
            const translation = 'Mangoes are my <span class="highlight">favourite</span> fruit.'
            assert.strictEqual(translator.aremicanToBritish(text),translation)
        });

        test('I ate yogurt for breakfast.',()=>{
            const text = 'I ate yogurt for breakfast.'
            const translation = 'I ate <span class="highlight">yoghurt</span> for breakfast.'
            assert.strictEqual(translator.aremicanToBritish(text),translation)
        });

        test('We had a party at my friend\'s condo.',()=>{
            const text = 'We had a party at my friend\'s condo.'
            const translation = 'Everything looks good to me!'
            assert.strictEqual(translator.aremicanToBritish(text),translation)
        });

        test('Can you toss this in the trashcan for me?',()=>{
            const text = 'Can you toss this in the trashcan for me?'
            const translation = 'Can you toss this in the <span class="highlight">bin</span> for me?'
            assert.strictEqual(translator.aremicanToBritish(text),translation)
        });

        test('The parking lot was full.',()=>{
            const text = 'The parking lot was full.'
            const translation = 'Everything looks good to me!'
            assert.strictEqual(translator.aremicanToBritish(text),translation)
        });

        test('Like a high tech Rube Goldberg machine.',()=>{
            const text = 'Like a high tech Rube Goldberg machine.'
            const translation = 'Everything looks good to me!'
            assert.strictEqual(translator.aremicanToBritish(text),translation)
        });

        test('To play hooky means to skip class or work.',()=>{
            const text = 'To play hooky means to skip class or work.'
            const translation = 'Everything looks good to me!'
            assert.strictEqual(translator.aremicanToBritish(text),translation)
        });

        test('No Mr. Bond, I expect you to die.',()=>{
            const text = 'No Mr. Bond, I expect you to die.'
            const translation = 'No <span class="highlight">Mr</span> Bond, I expect you to die.'
            assert.strictEqual(translator.aremicanToBritish(text),translation)
        });

        test('Dr. Grosh will see you now.',()=>{
            const text = 'Dr. Grosh will see you now.'
            const translation = '<span class="highlight">Dr</span> Grosh will see you now.'
            assert.strictEqual(translator.aremicanToBritish(text),translation)
        });
    
        test('Lunch is at 12:15 today.',()=>{
            const text = 'Lunch is at 12:15 today.'
            const translation = 'Lunch is at <span class="highlight">12.15</span> today.'
            assert.strictEqual(translator.aremicanToBritish(text),translation)
        });

    })

});
/* 
Translate I ate yogurt for breakfast. to British English
Translate  to British English
Translate  to British English
Translate  to British English
Translate  to British English
Translate  to British English
Translate  to British English
Translate  to British English
Translate  to British English

Translate We watched the footie match for a while. to American English
Translate Paracetamol takes up to an hour to work. to American English
Translate First, caramelise the onions. to American English
Translate I spent the bank holiday at the funfair. to American English
Translate I had a bicky then went to the chippy. to American English
Translate I've just got bits and bobs in my bum bag. to American English
Translate The car boot sale at Boxted Airfield was called off. to American English
Translate Have you met Mrs Kalyani? to American English
Translate Prof Joyner of King's College, London. to American English
Translate Tea time is usually around 4 or 4.30. to American English

Highlight translation in Mangoes are my favorite fruit.
Highlight translation in I ate yogurt for breakfast.
Highlight translation in We watched the footie match for a while.
Highlight translation in Paracetamol takes up to an hour to work.
*/