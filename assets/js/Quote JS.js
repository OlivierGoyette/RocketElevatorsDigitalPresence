    $("#ApartmentNumber").hide();       
    $("#FloorNumber").hide();         
    $("#BasementNumber").hide();          
    $("#ParkingNumber").hide();      
    $("#CagEleNumber").hide();          
    $("#OccupantNumber").hide();            
    $("#HoursNumber").hide();         
    $("#RecommendEleNumber").hide();              
    $("#RadioType ").hide();                   
    $("#RadioCost").hide();                 
    $("#MarketNumber").hide();                 
    $("#WithoutTaxeNumber").hide();        
    $("#TaxeTotalNumber").hide(); 
    $("#GrandTotal").hide();
    $("#distinct").hide();
    $("#tenant").hide();

    

    $("#Building_Option").on("change", function(){
        var VarType = $("#Building_Option option:selected").val();

        if(VarType == "select"){
            $("#ApartmentNumber").hide();       
            $("#FloorNumber").hide();         
            $("#BasementNumber").hide();          
            $("#ParkingNumber").hide();      
            $("#CagEleNumber").hide();          
            $("#OccupantNumber").hide();            
            $("#HoursNumber").hide();         
            $("#RecommendEleNumber").hide();              
            $("#RadioType ").hide();                   
            $("#RadioCost").hide();                 
            $("#MarketNumber").hide();                 
            $("#WithoutTaxeNumber ").hide();        
            $("#TaxeTotalNumber").hide();
            $("#GrandTotal").hide();
            $("#distinct").hide();
            $("#tenant").hide();
        }
        if(VarType == "Residential"){
            $("#ApartmentNumber").show();       
            $("#FloorNumber").show();         
            $("#BasementNumber").show();          
            $("#ParkingNumber").hide();      
            $("#CagEleNumber").hide();          
            $("#OccupantNumber").hide();            
            $("#HoursNumber").hide();         
            $("#RecommendEleNumber").show();              
            $("#RadioType ").show();                   
            $("#RadioCost").show();                 
            $("#MarketNumber").hide();                 
            $("#WithoutTaxeNumber ").show();        
            $("#TaxeTotalNumber").show();
            $("#GrandTotal").show();
            $("#distinct").hide();
            $("#tenant").hide();
        }
        if(VarType == "Commercial"){
            $("#ApartmentNumber").hide();       
            $("#FloorNumber").show();         
            $("#BasementNumber").show();          
            $("#ParkingNumber").show();      
            $("#CagEleNumber").show();          
            $("#OccupantNumber").hide();            
            $("#HoursNumber").hide();         
            $("#RecommendEleNumber").show();              
            $("#RadioType ").show();                   
            $("#RadioCost").show();                 
            $("#MarketNumber").hide();                 
            $("#WithoutTaxeNumber ").show();        
            $("#TaxeTotalNumber").show();
            $("#GrandTotal").show();
            $("#distinct").show();
            $("#tenant").hide();
        }
        if(VarType == "Corporate"){
            $("#ApartmentNumber").hide();       
            $("#FloorNumber").show();         
            $("#BasementNumber").show();          
            $("#ParkingNumber").show();      
            $("#CagEleNumber").hide();          
            $("#OccupantNumber").show();            
            $("#HoursNumber").hide();         
            $("#RecommendEleNumber").show();              
            $("#RadioType ").show();                   
            $("#RadioCost").show();                 
            $("#MarketNumber").hide();                 
            $("#WithoutTaxeNumber ").show();        
            $("#TaxeTotalNumber").show();
            $("#GrandTotal").show();
            $("#distinct").hide();
            $("#tenant").show();
        }
        if(VarType == "Hybrid"){
            $("#ApartmentNumber").hide();       
            $("#FloorNumber").show();         
            $("#BasementNumber").show();          
            $("#ParkingNumber").show();      
            $("#CagEleNumber").hide();          
            $("#OccupantNumber").show();            
            $("#HoursNumber").show();         
            $("#RecommendEleNumber").show();              
            $("#RadioType").show();                   
            $("#RadioCost").show();                 
            $("#MarketNumber").show();                 
            $("#WithoutTaxeNumber ").show();        
            $("#TaxeTotalNumber").show();
            $("#GrandTotal").show();
            $("#distinct").show();
            $("#tenant").hide();
        }
    });

            var AP_NB = document.getElementById('ApartmentNumberVar');              
            var FL_NB = document.getElementById('FloorNumberVar');
            var BS_NB = document.getElementById('BasementNumberVar');
            var PK_NB = document.getElementById('ParkingNumberVar');
            var CE_NB = document.getElementById('CagEleNumber1'); 
            var OC_NB = document.getElementById('OccupantNumberVar');
            var HS_NB = document.getElementById('HoursNumberVar'); 
            var RC_NB = document.getElementById('RecommendEleNumberVar');
            var RadioType = document.getElementById('RadioTypeVar');
            var EL_C = document.getElementById('ElevaCostVar');
            var TE_PR = document.getElementById('TotaElevatorPrice');
            var TT_IN = document.getElementById('Totinstal');
            var GT = document.getElementById('GrandTotal1');
            var type = document.getElementById('type');
            var ET_NP = document.getElementById('EstimInP');

    function calcul(){
        var RadioType = $("input[name = 'RadioType1']:checked").val();
        if(RadioType == "7565"){

            EL_C.value = RadioType;
            TE_PR.value = EL_C.value * RC_NB.value;
            ET_NP.value = TE_PR.value * 0.10;
            GT.value = parseInt(TE_PR.value) + parseInt(ET_NP.value);    
        }
        if(RadioType == "12345"){

            EL_C.value = RadioType;
            TE_PR.value = EL_C.value * RC_NB.value;
            ET_NP.value = TE_PR.value * 0.13;
            GT.value = parseInt(TE_PR.value) + parseInt(ET_NP.value);
        }
        if(RadioType == "15400"){

            EL_C.value = RadioType;
            TE_PR.value = EL_C.value * RC_NB.value;
            ET_NP.value = TE_PR.value * 0.16;
            GT.value = parseInt(TE_PR.value) + parseInt(ET_NP.value);  
        }
    }

function commercial()
        {
            RC_NB.value = CE_NB.value;
        };
function residential()
        {
            var ARE = AP_NB.value / FL_NB.value;
            CE_NB.value = Math.ceil(ARE / 6);
            console.log(CE_NB.value);

            var PTS = Math.ceil(FL_NB.value / 20);
            console.log(PTS);

            RC_NB.value = CE_NB.value * PTS;
            RC_NB.value = Math.ceil(RC_NB.value);
            console.log(RC_NB.value);
        };
function Corporate_Hybrid()
        { 
            var TH = parseInt(FL_NB.value) + parseInt(BS_NB.value);
           /* TH = Totol floor + basement */
            var MOCC = OC_NB.value * TH ;
            /* MOCC = Nb d'occuppants max */
            CE_NB.value = Math.ceil(MOCC / 1000);
            var PTS = Math.ceil (TH / 20);
            /*  PTS = Nb Colones Requises */
            var POOR = Math.ceil(CE_NB.value / PTS);
            POOR = Math.ceil(POOR) ;
            /* POOR = Moyenne # Elevator */
            var total = RC_NB.value = POOR * PTS;
            RC_NB.value = total;
        };

$("input").on('keyup click', function (){
        var VarType = $("#Building_Option option:selected").val();

            if(VarType == "Residential"){
                residential();
                calcul();
            }
            if(VarType == "Commercial"){
                commercial(); 
                calcul(); 
            }
            if(VarType == "Corporate"){
                Corporate_Hybrid();
                calcul();
            }
            if(VarType == "Hybrid"){
                Corporate_Hybrid();
                calcul();
            }  
});