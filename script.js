$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Inflight WiFi Service","Departure and Arrival Time Convenience:","Ease of Online Booking","Food and Drink","Online Boarding","Seat Comfort","Inflight Entertainment","On-board Service","Leg Room Service","Baggage Handling","Check-in Service"," Inflight Service","Cleanliness","Departure Delay in Minutes","Arrival Delay in Minutes"],
        typeSpeeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Inflight WiFi Service","Departure and Arrival Time Convenience:","Ease of Online Booking","Food and Drink","Online Boarding","Seat Comfort","Inflight Entertainment","On-board Service","Leg Room Service","Baggage Handling","Check-in Service"," Inflight Service","Cleanliness","Departure Delay in Minutes","Arrival Delay in Minutes"],
        typeSpeeed: 100,
        backSpeed: 60,
        loop: true
    });

});
