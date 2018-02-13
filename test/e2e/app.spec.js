const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

app.listen(8888);

const url = 'http://localhost:8888';

const nightmare = new Nightmare();
let pageObject = null;

describe('End to End Tests', () => {
    let pageObject = null;

    beforeEach(() => {
        pageObject = nightmare.goto(url);
    });

    it('should contain an <input> element with the name "principal"', () =>
        pageObject
            .evaluate(() => document.querySelector('input[name=principal]'))
            .then(input => 
                expect(input).to.exist));

    it('should contain an <input> element with the name "interestRate"', () =>
        pageObject
            .evaluate(() => document.querySelector('input[name=interestRate]'))
            .then(input => 
                expect(input).to.exist));

    it('should contain an <input> element with the name "loanTerm"', () =>
        pageObject
            .evaluate(() => document.querySelector('input[name=loanTerm]'))
            .then(input => 
                expect(input).to.exist));

    it('should contain a <select> element with the name "period"', () =>
        pageObject
            .evaluate(() => document.querySelector('select[name=period]'))
            .then(select => 
            expect(select).to.exist));    

    it('should contain a <button> element with the id "calculate"', () =>
        pageObject
            .evaluate(() => document.querySelector('button[id=calculate]'))
            .then(button => 
                expect(button).to.exist));

    it('should contain a <button> element with the text "Calculate"', () =>
        pageObject
            .evaluate(() => document.querySelector('button').innerText)
            .then(buttonText => {
                expect(buttonText).to.not.be.null;
                expect(buttonText).to.equal('Calculate');
            }));

    it('should contain a <p> element with the id "output"', () =>
        pageObject
            .evaluate(() => document.querySelector('p[id=output]'))
            .then(p => 
                expect(p).to.exist));

    it('should correctly calculate mortgage', () =>
        pageObject
        .wait()
        .type('input[name=principal]', 300000)
        .type('input[name=interestRate]', 3.75)
        .type('input[name=loanTerm]', 30)
        .click('button#calculate')
        .wait('#output')
        .evaluate(() => document.querySelector('#output').innerText)
        .then((outputText) => {
            expect(outputText).to.equal('$1389.35');
        })
        ).timeout(6500);


});