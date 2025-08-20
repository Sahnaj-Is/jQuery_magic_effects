 $(document).ready(function(){
            // Initial animations
            $("h1").hide().fadeIn(1500);
            $(".cool").hide().slideDown(1000);

            // Hide & Show
            $("#hide").click(function(){
                $(".boom").hide();
            });
            $("#show").click(function(){
                $(".boom").show();
            });

            // Mouse Enter
            $(".bc").mouseenter(function(){
                alert("Welcome to FIT Family");
            });

            // Mouse Leave
            $(".ml").mouseleave(function(){
                alert("Bye! 😭😭😭");
            });

            // Hide & Show with timing
            $("#hidee").click(function(){
                $(".asdf").hide(3000);
            });
            $("#showw").click(function(){
                $(".asdf").show(5000);
            });

            // Fade Toggle
            $("#bcbutton").click(function(){
                $("#div1").fadeToggle("fast");
                $("#div2").fadeToggle("slow");
                $("#div3").fadeToggle(2000);
            });

            // Click to slide
            $("#flif").click(function(){
                $("#panel").slideToggle(1000);
                $("#flif i").toggleClass("fa-chevron-down fa-chevron-up");
            });
        });