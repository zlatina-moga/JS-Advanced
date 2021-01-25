function solve(name, population, treasury){
    const town = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury += this.population * this.taxRate
        },
        applyGrowth(percent){
            this.population += Math.floor(this.population * percent / 100)
        },
        applyRecession(percent){
            this.treasury -= Math.ceil(this.treasury * percent / 100)
        }
    }
    return town;
}
