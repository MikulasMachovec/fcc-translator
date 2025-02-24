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

    });

    suite('British to american translation',()=>{
        test('We watched the footie match for a while.',()=>{
            const text = 'We watched the footie match for a while.'
            const translation = 'We watched the <span class="highlight">soccer</span> match for a while.'
            assert.strictEqual(translator.britishToAmerican(text),translation)
        });

        test('Paracetamol takes up to an hour to work.',()=>{
            const text = 'Paracetamol takes up to an hour to work.'
            const translation = '<span class="highlight">Tylenol</span> takes up to an hour to work.'
            assert.strictEqual(translator.britishToAmerican(text),translation)
        });

        test('First, caramelise the onions.',()=>{
            const text = 'First, caramelise the onions.'
            const translation = 'First, <span class="highlight">caramelize</span> the onions.'
            assert.strictEqual(translator.britishToAmerican(text),translation)
        });

        test('I spent the bank holiday at the funfair.',()=>{
            const text = 'I spent the bank holiday at the funfair.'
            const translation = 'Everything looks good to me!'
            assert.strictEqual(translator.britishToAmerican(text),translation)
        });

        test('I had a bicky then went to the chippy.',()=>{
            const text = 'I had a bicky then went to the chippy.'
            const translation = 'I had a <span class="highlight">cookie</span> then went to the chippy.'
            assert.strictEqual(translator.britishToAmerican(text),translation)
        });

        test('I\'ve just got bits and bobs in my bum bag.',()=>{
            const text = 'I\'ve just got bits and bobs in my bum bag.'
            const translation = 'Everything looks good to me!'
            assert.strictEqual(translator.britishToAmerican(text),translation)
        });

        test('The car boot sale at Boxted Airfield was called off.',()=>{
            const text = 'The car boot sale at Boxted Airfield was called off.'
            const translation = 'Everything looks good to me!'
            assert.strictEqual(translator.britishToAmerican(text),translation)
        });

        test('Have you met Mrs Kalyani?',()=>{
            const text = 'Have you met Mrs Kalyani?'
            const translation = 'Have you met <span class="highlight">Mrs.</span> Kalyani?'
            assert.strictEqual(translator.britishToAmerican(text),translation)
        });

        test('Prof Joyner of King\'s College, London.',()=>{
            const text = 'Prof Joyner of King\'s College, London.'
            const translation = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
            assert.strictEqual(translator.britishToAmerican(text),translation)
        });

        test('Tea time is usually around 4 or 4.30.',()=>{
            const text = 'Tea time is usually around 4 or 4.30.'
            const translation = 'Everything looks good to me!'
            assert.strictEqual(translator.britishToAmerican(text),translation)
        });

    });    

    suite('Highlight translation',()=>{
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

        test('We watched the footie match for a while.',()=>{
            const text = 'We watched the footie match for a while.'
            const translation = 'We watched the <span class="highlight">soccer</span> match for a while.'
            assert.strictEqual(translator.britishToAmerican(text),translation)
        });

        test('Paracetamol takes up to an hour to work.',()=>{
            const text = 'Paracetamol takes up to an hour to work.'
            const translation = '<span class="highlight">Tylenol</span> takes up to an hour to work.'
            assert.strictEqual(translator.britishToAmerican(text),translation)
        });
    })

});
