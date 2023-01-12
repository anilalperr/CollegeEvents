$(document).ready(function(){
    require(["esri/config", "esri/Map", "esri/views/MapView"], function(esriConfig, Map, MapView) {
        esriConfig.apiKey = "AAPKf56f41c3c3fe4987b2f4c84072150f20sI3IXY6IaRdrxOP0FD5wRpYbFqNbA8y8g9PtOAn8D8QEPwmKZb1Mdp0sexb1frQo";
        
        const map = new Map({
            basemap: "arcgis-topographic" // Basemap layer service
          });
    
        const view = new MapView({
        map: map,
        center: [-118.805, 34.027], // Longitude, latitude
        zoom: 13, // Zoom level
        container: "viewDiv" // Div element
        });
    });

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
