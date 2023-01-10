$(document).ready(function(){
    $("#home").click(function(){
        $(".texts").hide();
        $("#home_text").show()
    });

    $("#events").click(function(){
        $(".texts").hide();
        $("#events_text").show()
    });

    $("#schedule").click(function(){
        $(".texts").hide();
        $("#schedule_text").show()
    });

    $("#rankings").click(function(){
        $(".texts").hide();
        $("#rankings_text").show()
    });

    $("#my_events").click(function(){
        $(".texts").hide();
        $("#my_events_text").show()
    });
  });