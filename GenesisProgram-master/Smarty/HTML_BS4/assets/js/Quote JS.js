

$("#residential").hide();
$("#commercial").hide();
$("#corporate").hide();
$("#hybrid").hide();

$("#Building_Option").on("change", function(){
    var VarType = $("#Building_Option option:selected").val();

    if(VarType == "select"){
        $("#residential").hide();
        $("#commercial").hide();
        $("#corporate").hide();
        $("#hybrid").hide();
    }
    if(VarType == "Residential"){
        $("#residential").show();
        $("#commercial").hide();
        $("#corporate").hide();
        $("#hybrid").hide();
    }
    if(VarType == "Commercial"){
        $("#residential").hide();
        $("#commercial").show();
        $("#corporate").hide();
        $("#hybrid").hide();     
    }
    if(VarType == "Corporate"){
        $("#residential").hide();
        $("#commercial").hide();
        $("#corporate").show();
        $("#hybrid").hide();   
    }
    if(VarType == "Hybrid"){
        $("#residential").hide();
        $("#commercial").hide();
        $("#corporate").hide();
        $("#hybrid").show();  
    }
});
