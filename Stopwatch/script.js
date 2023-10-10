let [seconds , minutes, hours] = [0,0,0];
        let displayTime = document.getElementById("displayTime");
        let timer = null;
        const Stopwatch = ()=>{
            seconds++;
            if(seconds == 60){
                seconds = 0;
                minutes++;
                if(minutes == 60){
                    minutes = 0;
                    hours++ ;
                }
            }

            let h = hours < 10 ? "0" + hours : hours;
            let m = minutes < 10 ? "0" + minutes : minutes;
            let s = seconds < 10 ? "0" + seconds : seconds;


            displayTime.innerHTML = h + ":" + m + ":" + s;
        }

        const watchStart  = ()=>{
            if(timer!= null){
                clearInterval(timer);
            }
            timer = setInterval(Stopwatch,1000);
        }

        const watchStop = ()=>{
            clearInterval(timer);
        }

        const watchReset = ()=>{
            clearInterval(timer);
            seconds = 0 ;
            minutes = 0;
            hours = 0;
            displayTime.innerHTML = "00:00:00";
        }