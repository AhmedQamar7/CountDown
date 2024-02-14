import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "UserInput",
    message: "Please enter the amount of seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter a number";
        }
        else if (input > 60) {
            return "Please enter a number less than 60";
        }
        return true;
    }
});
let input = res.UserInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currenTime = new Date();
        const TimeDif = differenceInSeconds(intervalTime, currenTime);
        if (TimeDif <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        const minute = Math.floor((TimeDif % (3600 * 24)) / 3600);
        const sec = Math.floor(TimeDif % 60);
        console.log(`${minute.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`);
    }), 1000);
}
startTime(input);
