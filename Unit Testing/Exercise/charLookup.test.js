let {assert} = require('chai');
let {charLookup, lookupChar} = require('./charLookup.js');

describe ('charLookup', () => {
    it ('should return undefined with incorrect first param', () => {
        assert.equal(undefined, lookupChar(5, 0))
    })

    it ('should return undefined with incorrect second param', () => {
        assert.equal(undefined, lookupChar('string', 'otherString'))
    })

    it ('should return undefined with incorrect integer second param', () => {
        assert.equal(undefined, lookupChar('string', 1.5))
    })

    it ('should return incorrect index with incorrect first param length', () => {
        assert.equal('Incorrect index', lookupChar('string', 7))
    })

    it ('should return incorrect index with second param less than 0', () => {
        assert.equal('Incorrect index', lookupChar('string', -1))
    })

    it ('should return correct character', () => {
        assert.equal('i', lookupChar('string', 3))
    })
})