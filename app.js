$(document).ready(function(){

    $("#go").click(function(){
      $("#go").prop("disabled", true);
          $("#reset").prop("disabled", true);
      $("#racetrack").css({"opacity": "0.4"});


      let count = 3;
      let countdownElement = $('#countdown');
      countdownElement.html(count);
      let countdownInterval = setInterval(function() {
        count--;
        if (count <= 0) {
          clearInterval(countdownInterval);
          countdownElement.html("");
          
          startRace(); 
          $("#racetrack").css({"opacity": "1"})
          return;
        }
        countdownElement.html(count);
      }, 1000);
  
    });

    
    let vreme1 = localStorage.getItem("vreme1");
    let mesto1 = localStorage.getItem("mesto1");
    let vreme2 = localStorage.getItem("vreme2");
    let mesto2 = localStorage.getItem("mesto2")

    if(vreme1 && mesto1){
      $("#prevouseCarResults1")
      .append(`<td id="raceInfo1" class="raceInfo"><span class="car1Local">Car 1 </span> Finished in: ` + `<span class="car1Color">${mesto1}</span>` + ` place with a time of: ` + `<span class="car1Color">${vreme1}</span>` + ` milliseconds!</td>`).css({"border": "1px solid white"});

      $("#localStorageContainer").css({"display": "block"})
    }
    if(vreme2 && mesto2){
      $("#prevouseCarResults2")
      .append(`<td id="raceInfo2" class="raceInfo"><span class="car2Local">Car 2 </span> Finished in: ` + `<span class="car2Color">${mesto2}</span>` + ` place with a time of: ` + `<span class="car2Color">${vreme2}</span>` + ` milliseconds!</td>`).css({"border": "1px solid white"});

      $("#localStorageContainer").css({"display": "block"})

    }

  
    function startRace() {
  
      let carWidth = $(".car").width();
      let raceTrackWidth = $(window).width() - carWidth;
  
      let raceTime1 = Math.floor( (Math.random() * 5000) + 1);
      let raceTime2 = Math.floor( (Math.random() * 5000) + 1);
      
        
      let isComplete = false;
      let place = "First";
  
      $("#car1").animate({
        left: raceTrackWidth,
      }, raceTime1, function (){
  
        checkIfComplete();
  
						
            $("#carResults1").append(`<tr><td id="raceInfo1" class="raceInfo">Finished in: ` + `<span class="car1Color">${place}</span>` + ` place with a time of: ` + `<span class="car1Color">${raceTime1}</span>`  + ` milliseconds!</td></tr>`).css({"border": "1px solid white"});


         localStorage.setItem("vreme1", raceTime1);
         localStorage.setItem("mesto1", place)   
  
      });

      

  
      $("#car2").animate({
        left: raceTrackWidth,
      }, raceTime2, function (){
  
        checkIfComplete();
  
        $("#carResults2").append(`<tr> <td id="raceInfo2" class="raceInfo">Finished in: ` + `<span class="car2Color">${place}</span>` + ` place with a time of: ` + `<span class="car2Color">${raceTime2}</span>` + ` milliseconds!</td></tr>`).css({"border": "1px solid white"});
  
        localStorage.setItem("vreme2", raceTime2);
         localStorage.setItem("mesto2", place)   
        
      });

  

     

      function checkIfComplete() {
        if (isComplete == false) {
          isComplete = true;
          $("#racetrack").css({"opacity": "0.4"})

          $("#countdown").append("<img src='./images/finish.gif' id='Finish-Line' />");
         
          $("#reset").prop("disabled",false)
        } else {
          place = "Second";
          

          
        }
      }
  
    }
  
    $("#reset").click(function(){
      $(".car").css("left", "0"),
      $(".raceInfo tr").text(""),
      $("img[id='Finish-Line']").remove(); 
      $("#go").prop("disabled", false)
      $("#racetrack").css({"opacity": "1"})

    });
  
  });
  