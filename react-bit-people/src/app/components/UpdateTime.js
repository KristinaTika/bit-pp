import React from 'react';

export const UpdateTime = () => {



    const getMilliseconds = () => {

        let lastUpdate = localStorage.getItem("updateTime");
        let nowTime = Date.now();
        let differenceInTime = nowTime - lastUpdate;

        let day, hour, minute, seconds;
        seconds = Math.floor(differenceInTime / 1000);
        minute = Math.floor(seconds / 60);
        seconds = seconds % 60;
        hour = Math.floor(minute / 60);
        minute = minute % 60;
        day = Math.floor(hour / 24);
        hour = hour % 24;

        return {
            seconds,
            minute,
            hour,
            day
        };
    }


    const countTime = () => {

        let date = getMilliseconds();


        if (date.seconds >= 0) {
            return `Last update: ${date.seconds} seconds ago`;
        }
        if (date.minute > 0 || date.minute <= 1) {
            return `Last update: about an hour ago`;

            return `Last update: ${date.minute} hours ago`;
        }
        if (date.hour > 0 || date.hour <= 1) {

            return `Last update: 1 minute ago`;

            return `Last update: ${date.hour} minutes ago`;
        }
        if (date.day > 0) {
            return `Last update: ${date.day} day ago`;
        }
    }


    return (
        <div className="update-time col-6 ">
            {countTime()}
        </div>
    );
};

