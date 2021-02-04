function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click', onClick1);
    document.getElementById('hoursBtn').addEventListener('click', onClick2);
    document.getElementById('minutesBtn').addEventListener('click', onClick3);
    document.getElementById('secondsBtn').addEventListener('click', onClick4);
    
    function onClick1(){
        let input = Number(daysInput.value)
        hoursInput.value = input * 24;
        minutesInput.value = input * 1440;
        secondsInput.value = input * 86400;
    }

    function onClick2(){
        let input = Number(hoursInput.value)
        const days = input / 24;
        daysInput.value = days
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;
    }

    function onClick3(){
        let input = Number(minutesInput.value)
        const days = input / 1440;
        daysInput.value = days;
        hoursInput.value = days * 24;
        secondsInput.value = days * 86400;
    }

    function onClick4(){
        let input = Number(secondsInput.value)
        const days = input / 86400;
        daysInput.value = days;
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440; 
    }
}