$( document ).ready(function(){
$(".opties").hide();
$(".subvergelijk").hide();

$('.col50.col_visualisatie').hide();

// Een limit voor checkbox selectie
$('.vergelijk input[type=radio]').change(function(e){
    // console.log(this);
    $(".opties").hide();
    $(".subvergelijk").hide();
    // $('.' + $(this).parent().text()).show();

    
    if ($(".subvergelijk." + $(this).parent().text())[0]){
        $(".subvergelijk." + $(this).parent().text()).show();
    } else {
        if ($(".opties." + $(this).parent().text())[0]){
            $(".opties." + $(this).parent().text()).show();
        } else {}    
    }    

})

$('.vergelijk input[type=radio]').change(function(e){
    // console.log(this);
    $(".opties").hide();
    $(".opties input").prop('checked', false);
    $(".subvergelijk input").prop('checked', false);
    $(".subvergelijk").hide();
    // $('.' + $(this).parent().text()).show();

    
    if ($(".subvergelijk." + $(this).parent().text())[0]){
        $(".subvergelijk." + $(this).parent().text()).show();
    } else {
        if ($(".opties." + $(this).parent().text())[0]){
            $(".opties." + $(this).parent().text()).show();
        } else {}    
    }    

})

$('.subvergelijk input[type=radio]').change(function(e){
    console.log($(this).parent().text());
    // $('.' + $(this).parent().text()).show();

    
    if ($(".opties." + $(this).parent().text())[0]){
        $(".opties." + $(this).parent().text()).show();
        console.log("Bestaat");
    } else {
        $(this).prop('checked', false);
        alert("Bij deze categorie is nog geen selectie mogelijk, kies een andere categorie.");
        console.log("Bestaat niet");  
    }    

})

$(".ichom_filter").hide();

$( ".resultaat" ).on( "click", function() {
    // $(".ichom_filter").hide();
    // $(".menu_link").removeClass("activearrow");
    // $(".menu_link.active").removeClass("activearrow");
    $('.col50.col_visualisatie').hide();
   if ($('.opties .check_container input[type=checkbox]:checked').length < 2) {
        alert("Kies minimaal 2 opties om te vergelijken.");
   }else{
    if ($('.opties .check_container input[type=checkbox]:checked').length > 2) {
        alert("Kies maximaal 2 opties om te vergelijken.");
    }else{
      $(".ichom_filter").hide();  
        if ($(".menu_link.active").text() == "Vergelijken") {
            // console.log("HAHAHAHAHAHAHAHA");
            var inhoud_active_link = $(".menu_link.active").text();
            $(".menu_link.active").html( "<b>" + inhoud_active_link + "<br><i class='fa fa-chevron-down'></i></b>");
            $(".menu_link.active").removeClass('activearrow');
        }
        // Wanneer je op resultaat klikt en je voldoet aanbovenstaande criteria, dan haal je de waardes op uit de aangevinkte keuzes.
        // De waardes gebruik ik daarna om de juiste data te laten zien.
        
            // $('.opties input[type="checkbox"]:checked').each(function() {
            //    console.log($(this).parent().text());
            // });
        var gekozen = $('.vergelijk input[type=radio]:checked').parent().text() +": "+ $('.subvergelijk input[type=radio]:checked').parent().text() +" "+ $('.opties input[type="checkbox"]:checked').parent().text() +" ( selectie: "+ $('.selectie input[type="checkbox"]:checked').parent().text() +")";
        var substr_behandeling = "Behandeling";
        var substr_chemotherapie = "Chemotherapie";
        var substr_radiotherapie = "Radiotherapie";
        var substr_populatie = "Populatie";
        var substr_geslacht = "Geslacht";
        var substr_man = "Man";
        var substr_vrouw = "Vrouw";
        var result_behandeling = gekozen.indexOf(substr_behandeling) > -1;
        var result_chemotherapie = gekozen.indexOf(substr_chemotherapie) > -1;
        var result_radiotherapie = gekozen.indexOf(substr_radiotherapie) > -1;
        var result_populatie = gekozen.indexOf(substr_populatie) > -1;
        var result_geslacht = gekozen.indexOf(substr_geslacht) > -1;
        var result_man = gekozen.indexOf(substr_man) > -1;
        var result_vrouw = gekozen.indexOf(substr_vrouw) > -1;

        if ($(".subvergelijk input[type=radio]").is(':checked') && $(".selectie input[type=checkbox]").is(':checked')) {
            var titel_inhoud = $('.subvergelijk input[type=radio]:checked').parent().text() +": "+ $('.opties input[type="checkbox"]:checked').parent().text() +" ( selectie: "+ $('.selectie input[type="checkbox"]:checked').parent().text() +")";
            $(".vergelijken .page-title").html(titel_inhoud);
        }else{
            if ($(".subvergelijk input[type=radio]").is(':checked')) {
            var titel_inhoud = $('.vergelijk input[type=radio]:checked').parent().text() +": "+ $('.subvergelijk input[type=radio]:checked').parent().text() +" "+ $('.opties input[type="checkbox"]:checked').parent().text() +" ( selectie: "+ $('.selectie input[type="checkbox"]:checked').parent().text() +")";
            $(".vergelijken .page-title").html(titel_inhoud);

            }
        }

        if ($(".subvergelijk input[type=radio]").is(':checked') && $(".selectie input[type=checkbox]").is(':checked')) {
            console.log('geselecteerd');
            var titel_inhoud = $('.subvergelijk input[type=radio]:checked').parent().text() +": "+ $('.opties input[type="checkbox"]:checked').parent().text() +" ( selectie: "+ $('.selectie input[type="checkbox"]:checked').parent().text() +")";
            $(".vergelijken .page-title").html(titel_inhoud);
        }else{
            if ($(".subvergelijk input[type=radio]").is(':checked')) {
                var titel_inhoud = $('.subvergelijk input[type=radio]:checked').parent().text() +": "+ $('.opties input[type="checkbox"]:checked').parent().text();
                $(".vergelijken .page-title").html(titel_inhoud);
            }else{
                if ($(".selectie input[type=checkbox]").is(':checked')) {
                    var titel_inhoud = $('.vergelijk input[type=radio]:checked').parent().text() +": "+ $('.subvergelijk input[type=radio]:checked').parent().text() +" "+ $('.opties input[type="checkbox"]:checked').parent().text() +" ( selectie: "+ $('.selectie input[type="checkbox"]:checked').parent().text() +")";
                    $(".vergelijken .page-title").html(titel_inhoud);                  
                }else{
                    var titel_inhoud = $('.vergelijk input[type=radio]:checked').parent().text() +": "+ $('.subvergelijk input[type=radio]:checked').parent().text() +" "+ $('.opties input[type="checkbox"]:checked').parent().text();
                    $(".vergelijken .page-title").html(titel_inhoud); 
                }
            }
        }
        
        var dataset_selectie = "";

        if (result_behandeling == true && result_chemotherapie == true && result_radiotherapie == true) {
            console.log('TRUE');
            dataset_selectie = seedData_behandeling_chemotherapie_radiotherapie;
            $("#container_staaf").hide();
            $("#container_lines_pain").css("display","contents");

            }else{console.log('Behandeling chemotherapie radiotherapie niet gekozen');
                // $("#container_lines_pain").hide();
                // $("#container_staaf").hide();
            };
        if (result_populatie == true && result_geslacht == true && result_man == true && result_vrouw == true) {

            dataset_selectie = seedData_populatie_geslacht_man_vrouw;
            $("#container_lines_pain").hide();
            $("#container_staaf").css("display","contents");
            }else{console.log('Populatie geslacht man vrouw niet gekozen');
                // $("#container_staaf").hide();
                // $("#container_lines_pain").hide();
            };

            $( ".content-vergelijken svg" ).children().remove();

            svgfunc(dataset_selectie);

            $('.arc').children( ".newPath" ).remove();
            // add class to the one we clicked
            $(this).addClass("active");


        // $( "#cc" ).on( "click", function() {

        //   $( "svg" ).children().remove();

        //   svgfunc(seedData_behandeling_chemotherapie_radiotherapie);

        //   $('.arc').children( ".newPath" ).remove();

        //       $("button").removeClass("active");
        //       // add class to the one we clicked
        //       $(this).addClass("active");

        //       $('.stippellijn').removeClass('animated');
        //       $('.stippellijn').removeClass('fadeInLeft');
        //       $('.deelcontent').css( "display", "none" );

        // });


    }
   }
});


// Wanneer je de pagina opent wordt automatisch het eerste linkje geactiveerd. Wanneer er op een link
// geclicked is, krijgt deze de class naam 'active' (hier zitten styling elementen aan, zie main.css).
    $( document ).ready(function() {$(".menu_link_1").trigger("click");});
    
    $( ".menu_link" ).on( "click", function() {

        $(".menu_link").removeClass("active");
        $(this).addClass("active");

// Wanneer je op een menu linkje klikt (let op dit zijn niet de header linkjes) wordt de tekst uit het linkje gehaald,
// hiervan worden spaties veranderd in underscores. Daarna worden alle elementen weggehaald, alleen het element met dezelfde
// naam als net opgehaald wordt weergegeven. Bijvoorbeeld. Klik op linkje 'ICHOM', dan zie je het element verschijnen met de
// ICHOM circel

        var inhoud_link = $(this).text();
        var inhoud_link_unders = $(this).text().split(' ').join('_');
        console.log(inhoud_link_unders);

        $(".item").hide();
        // $(".item").css("display","none");
        
        $("." + inhoud_link_unders).show(); 


        if (inhoud_link_unders == "Vergelijken") {
            $(this).html( "<b>" + inhoud_link + "<br><i class='fa fa-chevron-up'></i></b>" );
            $(this).css("padding-bottom","5px");

            if ($( this ).hasClass( "active" )){ 
                $(this).toggleClass('activearrow');
            }

            if ($( this ).hasClass( "activearrow" )){
                $(this).html( "<b>" + inhoud_link + "<br><i class='fa fa-chevron-up'></i></b>" ); 

                $(".ichom_filter").show();
            }

            else{
                $(this).html( "<b>" + inhoud_link + "<br><i class='fa fa-chevron-down'></i></b>" );
                $(".ichom_filter").hide();
            }

                // console.log('fa geklikttt');
                // console.log("");
                // if ($("")) {
                //     console.log("down");
                //     $(this).html( "<b>" + inhoud_link + "<br><i class='fa fa-chevron-up'></i></b>" ); 
                // }else{
                //     console.log("up");
                //     $(this).html( "<b>" + inhoud_link + "<br><i class='fa fa-chevron-down'></i></b>" );
                // }

            // $('fa-chevron-down').css("padding-bottom","5px");
            
        }else{
            $( ".menu_link" ).each(function( i ) {
                var inhoud_link_noarrow = $(this).text();
                $(".menu_link.active").removeClass('activearrow');
                $(this).html( "<b>" + inhoud_link_noarrow + "</b>" );
                // console.log(inhoud_link_noarrow);
            });
            $(".ichom_filter").hide();

            $(".menu_link").css("padding-bottom","14px");
        }


    });



// Wanneer h4 elementen geen content hebben geef ik een margin top aan het p element om
// deze gelijk uit te lijnen met p elementen waar wel een h4 element boven staat.
    $('h4').each(function () {

        if ($(this).text() == '') {

            if(window.innerHeight > window.innerWidth){
                // $(this).empty();
                $( this ).parent().children( 'p' ).css( "margin-top", "0em" );
            }else{
                // $(this).empty();
                $( this ).parent().children( 'p' ).css( "margin-top", "5em" );
            }
        }

    });


    $('#donut-chart-vergelijken').on( "click", function() {
        console.log('ckickkedd');
        $('.col50.col_visualisatie').show();
    });

});


$( document ).ready(function(){

Highcharts.chart('container_staaf', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Pijnscore'
  },
  subtitle: {
    text: 'Source: Nederlandse kanker registratie & Profiel'
  },
  xAxis: {
    categories: [
      'Diagnose',
      '3 maanden',
      '6 maanden',
      '12 maanden'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Pijnscore (Score)'
    }
  },
  tooltip: {
    headerFormat: '<span style="margin:0px;padding:0px;font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};margin:0;padding:0;font-size:10px;">{series.name}:<br><br><br> </td>' +
      '<td style="padding:0;font-size:10px;"><b>Score: {point.y:.1f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    color: 'rgb(8, 137, 181)',
    name: 'Man',
    data: [49.9, 71.5, 106.4, 129.2]

  }, {
    color: 'rgba(8, 137, 181,0.5)',
    name: 'Vrouw',
    data: [83.6, 78.8, 98.5, 93.4]

  }]
});

});

$( document ).ready(function() {

    $(function() {
        $('#container_lines_pain').highcharts({
            title: {
                text: 'Pijnscore',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: Nederlandse Kanker Registratie',
                x: -20
            },
            xAxis: {
                categories: ['2015', '2016', '2017', '2018', '2019']
            },
            yAxis: {
                title: {
                    text: 'Score'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ''
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'cTis',
                data: [30.9, 40.2, 50.7, 60.5, 70.9]
            }, {
                name: 'cT1',
                data: [35.9, 40.6, 55.5, 72.4, 78.5]
            }, {
                name: 'cT2-3',
                data: [55.2, 58.8, 70.7, 78.3, 87.0]
            }, {
                name: 'cT4',
                data: [55.0, 60.9, 90.5, 98.5, 99.2]
            }]
        });
    });
});