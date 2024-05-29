

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


    var h = document.getElementById("userpass");
    document.getElementById("show").setAttribute("hidden","hidden");
        $('#userpass').keyup(function(){
    if (h.type === "password") {
     
       
        var empty = false;
        document.getElementById("show").removeAttribute("hidden");
        $('#userpass').each(function(){
            if($(this).val()== ''){
                empty = true;
                document.getElementById("show").setAttribute("hidden","hidden");
            }
        });
        if(empty){
            document.getElementById("show").setAttribute("hidden","hidden");
            
        }
        else{
            document.getElementById("show").removeAttribute("hidden");
            
        }
   
    } 
    else{
        var empty = false;
        document.getElementById("hide").removeAttribute("hidden");
        $('#userpass').each(function(){
            if($(this).val()== ''){
                empty = true;
                document.getElementById("hide").setAttribute("hidden","hidden");
            }
        });
        if(empty){
            document.getElementById("hide").setAttribute("hidden","hidden");
            
        }
        else{
            document.getElementById("hide").removeAttribute("hidden");
            
        }
    }
});
})()
    function showpassword() {
    var x = document.getElementById("userpass");
    if (x.type === "password") {
        x.type = "text";
        
    } else {
        x.type = "password";
    }
    document.getElementById("show").setAttribute("hidden","hidden");
    document.getElementById("hide").removeAttribute("hidden");
    }
    function hidepassword() {
    var y = document.getElementById("userpass");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
    document.getElementById("show").removeAttribute("hidden");
    document.getElementById("hide").setAttribute("hidden","hidden");
    }
