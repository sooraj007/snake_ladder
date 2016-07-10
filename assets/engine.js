$(document).ready(function() {
	debugger;
alert("aih");
    // game mechanics function

    function randomPoint() {
        this.player1Flag = 1;
        this.player2Flag = 0;

        this.roll = function() {

            $('#roll').click(function() {

                var randVal = Math.floor(Math.random() * (1 - 6 + 1) + 1);

                var diceVal = $('#dice').val(randVal);
                return this.loop;

            });
             
         
        }

        //iterate function
        this.loop = function() {

            $('.boardTable td').each(function(index) {
                var start = $(this).text();
                if (start == 1) {
                    $(this).append('<div class="player1"></div>');
                    $(this).append('<div class="player2"></div>');

                }

            });
        }

    }

    var sl = new randomPoint();

    //return loop function inside randompoint

    sl.roll().loop();





});
