
   (function(){

    document.querySelector("#btnSubmit").style.cursor = "not-allowed";
    $('form > div > input').keyup(function(){
        var empty = false;
        document.querySelector("#btnSubmit").style.cursor = "pointer";
        $('form > div > input').each(function(){
            if($(this).val()== ''){
                empty = true;
                document.querySelector("#btnSubmit").style.cursor = "not-allowed";
            }
        });
        if(empty){
            $('#btnSubmit').attr ('disabled','disabled');
            
        }
        else{
            $('#btnSubmit').removeAttr ('disabled');
            
        }
    });

    document.getElementById("show2").setAttribute("hidden","hidden");
    $('#pass1').keyup(function(){
        var empty = false;
        document.getElementById("show2").removeAttribute("hidden");
        $('#pass1').each(function(){
            if($(this).val()== ''){
                empty = true;
                document.getElementById("show2").setAttribute("hidden","hidden");
            }
        });
        if(empty){
            document.getElementById("show2").setAttribute("hidden","hidden");
            
        }
        else{
            document.getElementById("show2").removeAttribute("hidden");
            
        }
    });



    var h = document.getElementById("pass1");
    document.getElementById("show2").setAttribute("hidden","hidden");
        $('#pass1').keyup(function(){
    if (h.type === "password") {
     
       
        var empty = false;
        document.getElementById("show2").removeAttribute("hidden");
        $('#pass1').each(function(){
            if($(this).val()== ''){
                empty = true;
                document.getElementById("show2").setAttribute("hidden","hidden");
            }
        });
        if(empty){
            document.getElementById("show2").setAttribute("hidden","hidden");
            
        }
        else{
            document.getElementById("show2").removeAttribute("hidden");
            
        }
   
    } 
    else{
        var empty = false;
        document.getElementById("hide2").removeAttribute("hidden");
        $('#pass1').each(function(){
            if($(this).val()== ''){
                empty = true;
                document.getElementById("hide2").setAttribute("hidden","hidden");
            }
        });
        if(empty){
            document.getElementById("hide2").setAttribute("hidden","hidden");
            
        }
        else{
            document.getElementById("hide2").removeAttribute("hidden");
            
        }
    }
});



var j = document.getElementById("pass2");
    document.getElementById("show3").setAttribute("hidden","hidden");
        $('#pass2').keyup(function(){
    if (j.type === "password") {
     
       
        var emptys = false;
        document.getElementById("show3").removeAttribute("hidden");
        $('#pass2').each(function(){
            if($(this).val()== ''){
                emptys = true;
                document.getElementById("show3").setAttribute("hidden","hidden");
            }
        });
        if(emptys){
            document.getElementById("show3").setAttribute("hidden","hidden");
            
        }
        else{
            document.getElementById("show3").removeAttribute("hidden");
            
        }
   
    } 
    else{
        var emptys = false;
        document.getElementById("hide3").removeAttribute("hidden");
        $('#pass2').each(function(){
            if($(this).val()== ''){
                emptys = true;
                document.getElementById("hide3").setAttribute("hidden","hidden");
            }
        });
        if(emptys){
            document.getElementById("hide3").setAttribute("hidden","hidden");
            
        }
        else{
            document.getElementById("hide3").removeAttribute("hidden");
            
        }
    }
});
})()
    function showpassword2() {
    var x = document.getElementById("pass1");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    document.getElementById("show2").setAttribute("hidden","hidden");
    document.getElementById("hide2").removeAttribute("hidden");
    }
    function hidepassword2() {
    var y = document.getElementById("pass1");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
    document.getElementById("show2").removeAttribute("hidden");
    document.getElementById("hide2").setAttribute("hidden","hidden");
    }
    function showpassword3() {
    var x = document.getElementById("pass2");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
    document.getElementById("show3").setAttribute("hidden","hidden");
    document.getElementById("hide3").removeAttribute("hidden");
    }
    function hidepassword3() {
    var y = document.getElementById("pass2");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
    document.getElementById("show3").removeAttribute("hidden");
    document.getElementById("hide3").setAttribute("hidden","hidden");
    }

   
