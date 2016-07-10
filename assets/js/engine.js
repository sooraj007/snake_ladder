$(document).ready(function() {

    // game mechanics function

    var player1Flag = 1;
    var player2Flag = 0;
    var pointDefault = 1;

    localStorage.setItem("player1", 0);
    localStorage.setItem("player2", 0);

    //iterate function
    function randomPoint(pointDefault) {

        $('.boardTable td').each(function(index) {
            var start = $(this).attr('id');
            if (start == pointDefault) {
                $(this).append('<div class="player1"></div>');
                $(this).append('<div class="player2"></div>');



            }


        });
    }
    // var ep = 0;

    function animatePoint(pointDefault) {
        //alert("Player1: " + player1Flag + "  , Player2: " + player2Flag);
        //ep = ep + pointDefault;
        //ep = 17;

        if (player1Flag == 1) {
            var ep = parseInt(localStorage.getItem("player1")) + pointDefault;
            console.log("player1");
            var player = ".player1";

        } else if (player2Flag == 1) {
            console.log("player2");
            var ep = parseInt(localStorage.getItem("player2")) + pointDefault;
            var player = ".player2";

        }

        $('.boardTable td').each(function(index) {
            var start = $(this).attr('id');


            if (start == ep) {

                var x = $(this).position().left + 45;
                var y = $(this).position().top + 40;



                $(player).animate({ "left": x + "px" }, 1000);
                $(player).animate({ "top": y + "px" }, 1000, function() {

                    setTimeout(function() {

                        switch (ep) {
                            case 2:
                                x = $('#15').position().left + 49;
                                y = $('#15').position().top + 40;
                                $(player).animate({ "left": x + "px" }, 900);
                                $(player).animate({ "top": y + "px" }, 900);
                                ep = 15;
                                break;

                            case 17:
                                x = $('#4').position().left + 49;
                                y = $('#4').position().top + 40;
                                $(player).animate({ "left": x + "px" }, 900);
                                $(player).animate({ "top": y + "px" }, 900);
                                ep = 4;
                                break;

                            case 5:
                                x = $('#7').position().left + 49;
                                y = $('#7').position().top + 40;
                                $(player).animate({ "left": x + "px" }, 900);
                                $(player).animate({ "top": y + "px" }, 900);
                                ep = 7;
                                break;

                            case 9:
                                x = $('#27').position().left + 49;
                                y = $('#27').position().top + 40;
                                $(player).animate({ "left": x + "px" }, 900);
                                $(player).animate({ "top": y + "px" }, 900);
                                ep = 27;
                                break;

                            case 18:
                                x = $('#29').position().left + 49;
                                y = $('#29').position().top + 40;
                                $(player).animate({ "left": x + "px" }, 900);
                                $(player).animate({ "top": y + "px" }, 900);
                                ep = 29;
                                break;

                            case 24:
                                x = $('#16').position().left + 49;
                                y = $('#16').position().top + 40;
                                $(player).animate({ "left": x + "px" }, 900);
                                $(player).animate({ "top": y + "px" }, 900);
                                ep = 16;
                                break;

                            case 20:
                                x = $('#6').position().left + 49;
                                y = $('#6').position().top + 40;
                                $(player).animate({ "left": x + "px" }, 900);
                                $(player).animate({ "top": y + "px" }, 900);
                                ep = 6;
                                break;

                            case 25:
                                x = $('#35').position().left + 49;
                                y = $('#35').position().top + 40;
                                $('.player1').animate({ "left": x + "px" }, 900);
                                $('.player1').animate({ "top": y + "px" }, 900);
                                ep = 35;
                                break;

                            case 32:
                                x = $('#30').position().left + 49;
                                y = $('#30').position().top + 49;
                                $(player).animate({ "left": x + "px" });
                                $(player).animate({ "top": y + "px" });
                                ep = 30;
                                break;

                            case 34:
                                x = $('#12').position().left + 49;
                                y = $('#12').position().top + 40;
                                $(player).animate({ "left": x + "px" });
                                $(player).animate({ "top": y + "px" });
                                ep = 12;
                                break;

                        }

                        setTimeout(function() {
                            if (player1Flag == 1) {

                                localStorage.setItem("player1", ep);

                                player1Flag = 0;
                            } else {
                                player1Flag = 1;
                            }


                            if (player2Flag == 1) {
                                console.log("player2");
                                localStorage.setItem("player2", ep);

                                player2Flag = 0;
                            } else {
                                player2Flag = 1;
                            }
                        }, 3);
                    }, 1);
                });



            }

        });




    }

    $('#roll').click(function() {

        var randVal = Math.floor(Math.random() * (6 - 1 + 1) + 1);

        var diceVal = $('#dice').val(randVal);
        animatePoint(randVal);

    });

    //return loop function inside randompoint
    randomPoint(pointDefault);






});
