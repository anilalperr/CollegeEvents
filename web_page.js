$(document).ready(function(){
    require(["esri/config", "esri/Map", "esri/views/MapView"], function(esriConfig, Map, MapView) {
        esriConfig.apiKey = "AAPKf56f41c3c3fe4987b2f4c84072150f20sI3IXY6IaRdrxOP0FD5wRpYbFqNbA8y8g9PtOAn8D8QEPwmKZb1Mdp0sexb1frQo";

        const map = new Map({
            basemap: "arcgis-topographic" // Basemap layer service
          });
    
        const view = new MapView({
        map: map,
        center: [-92.729362, 41.746952], // Longitude, latitude
        zoom: 15, // Zoom level
        container: "viewDiv" // Div element
        });
    });

    /*
    $("#viewDiv").hide();

    $("#home").click(function(){
        $(".texts").hide();
        $("#viewDiv").hide();

        $("#home_text").show()
    });

    $("#events").click(function(){
        $(".texts").hide();

        $("#events_text").show()
        $("#viewDiv").show();
    });

    $("#schedule").click(function(){
        $(".texts").hide();
        $("#viewDiv").hide();

        $("#schedule_text").show()
    });

    $("#rankings").click(function(){
        $(".texts").hide();
        $("#viewDiv").hide();

        $("#rankings_text").show()
    });

    $("#my_events").click(function(){
        $(".texts").hide();
        $("#viewDiv").hide();

        $("#my_events_text").show()
    });
    */
  });
