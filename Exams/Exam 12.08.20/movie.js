class Movie {
    constructor (movieName, ticketPrice){
        ticketPrice = Number(ticketPrice)
        this.movieName = movieName;
        this.ticketPrice = ticketPrice;
        this.screenings = [];
        this.totalProfit = 0;
        this.totalTickets = 0;
    }
    newScreening(date, hall, description){
        let sameDateAndHall = this.screenings.find(d => d.date === date && d.hall === hall);

        if (sameDateAndHall){
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        }

        let screening = {date, hall, description};
        this.screenings.push(screening);
        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets){
        let sameDateAndHall = this.screenings.find(d => d.date === date && d.hall === hall);

        if (!sameDateAndHall){
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }
        
        let currentProfit = soldTickets * this.ticketPrice;
        this.totalProfit += currentProfit;
        this.totalTickets += soldTickets;

        if (sameDateAndHall){
            let index = this.screenings.findIndex(d => d.date === date);
            let screeningInfo = this.screenings.find(d => d.date === date)
            this.screenings.splice(index, 1);
            return `${this.movieName} movie screening on ${screeningInfo.date} in ${screeningInfo.hall} hall has ended. Screening profit: ${currentProfit}`
        }
    }

    toString () {
        let result = `${this.movieName} full information:\n`;
        result += `Total profit: ${this.totalProfit}$\nSold Tickets: ${this.totalTickets}\n`
        
        if (this.screenings.length > 0){
            result += `Remaining film screenings:\n`;
            const sorted = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
            sorted.forEach(r => {
                result += `${r.hall} - ${r.date} - ${r.description}\n`
            })
        } else {
            result += `No more screenings!`
        }
        return result.trim();
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
