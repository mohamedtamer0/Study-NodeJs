var Alarm = require("./AlarmModule");
var alarm1 = new Alarm("WorkAlarm", 3);

alarm1.on("alarmFired", () => {
    console.log("WAKE UP FOR WORK...");
    alarm1.snooze(2);
});

alarm1.on("snoozeAlarmFired", () => {
    console.log("PLZ WAKE...");
    alarm1.stopSnooze();
})