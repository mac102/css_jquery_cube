var moveClassNames = [
    'back',
    'right',
    'top',
    'bottom',
    'front',
    'left'
];
$( document ).ready(function() {
    $(".cube > div").click(function() {
        var move_class = searchClassToMove();
        for(var i=0; i < moveClassNames.length; i++) {
            if ($(".cube").hasClass("show-"+moveClassNames[i])) {
                while(moveClassNames[i] == move_class) {
                    move_class = searchClassToMove();
                }
                $(".cube").removeClass("show-"+moveClassNames[i]);
                break;
            } 
        }
        $('.cube').addClass("show-"+move_class);
    });
    
    function searchClassToMove() {
        return moveClassNames[Math.floor(Math.random()*moveClassNames.length)];
    }
});
