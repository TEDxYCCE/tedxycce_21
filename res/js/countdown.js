$('.countdown-timer').countdown({
    date: "May 8, 2021 10:00:00",

    render: function (data) {
        $(".countdown-timer .days .value").html(this.leadingZeros(data.days, 2));
        $(".countdown-timer .hours .value").html(this.leadingZeros(data.hours, 2));
        $(".countdown-timer .minutes .value").html(this.leadingZeros(data.min, 2));
        $(".countdown-timer .seconds .value").html(this.leadingZeros(data.sec, 2));
    }
});
