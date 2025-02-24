const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const { text } = require('body-parser');
let translator = new Translator();

suite('Functional Tests', () => {
    test('Translation with text and locale fields',(done)=>{
        chai.request(server)
            .post('/api/translate')
            .send({text: 'Test text', locale: 'american-to-british'})
            .end((err,res)=>{
                assert.deepEqual(res.status, 200)
                assert.deepEqual(res.body,{text: "Test text", translation: 'Everything looks good to me!'})
                done()
            });
    });

    test('Translation with text and invalid locale fields',(done)=>{
        chai.request(server)
            .post('/api/translate')
            .send({text: 'Test text', locale: 'invalid-lang'})
            .end((err,res)=>{
                assert.deepEqual(res.status, 200)
                assert.deepEqual(res.body,{error: 'Invalid value for locale field'})
                done()
            });
    });

    test('Translation with missing text and locale fields',(done)=>{
        chai.request(server)
            .post('/api/translate')
            .send({text: undefined, locale: 'american-to-british'})
            .end((err,res)=>{
                assert.deepEqual(res.status, 200)
                assert.deepEqual(res.body,{error: 'Required field(s) missing'})
                done()
            });
    });

    test('Translation with text and missing locale fields',(done)=>{
        chai.request(server)
            .post('/api/translate')
            .send({text: "test text", locale: undefined})
            .end((err,res)=>{
                assert.deepEqual(res.status, 200)
                assert.deepEqual(res.body,{error: 'Required field(s) missing'})
                done()
            });
    });

    test('Translation with empty text and locale fields',(done)=>{
        chai.request(server)
            .post('/api/translate')
            .send({text: '', locale: 'american-to-british'})
            .end((err,res)=>{
                assert.deepEqual(res.status, 200)
                assert.deepEqual(res.body,{error: 'No text to translate'})
                done()
            });
    });

    test('Translation with text that needs no translation',(done)=>{
        chai.request(server)
            .post('/api/translate')
            .send({text: 'Test', locale: 'american-to-british'})
            .end((err,res)=>{
                assert.deepEqual(res.status, 200)
                assert.deepEqual(res.body,{text: 'Test', translation: 'Everything looks good to me!' })
                done()
            });
    });
});

/*
Translation with text that needs no translation: POST request to /api/translate
*/