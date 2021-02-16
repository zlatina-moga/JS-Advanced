const dealership = require('./dealership');
const expect = require('chai').expect;


describe('test', () => {
    describe('newCarCost', () => {
        //model is supported - reduced price
        it('returns original price when model unsupported', () => {
            expect(dealership.newCarCost('a', 1)).to.equal(1)
        })
         //model is not supported
        it('returns discounted price', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000)
        })
    
    })
    describe('carEquipment', () => {
        //single element, single pick;
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a'])
        })
        //test overloading
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).to.deep.equal(['a', 'c'])
        })
        it('single element, single pick', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [1])).to.deep.equal(['b'])
        })

    })
    describe('euroCategory', () => {
        //category is below thershold
        it('category is below thershold', () => {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })
        //category is above thershold
        it('category is above thershold', () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })
        it('category is at thershold', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
        })
        //edge case - at thershold
    })
})