$( document ).ready(function() {
    // console.log( "ready!" );

// ___________________________________________________________________________ Dataset voor Breast cancer
var seedDatabc = [
  {
    title1: "Breast",
    title2: "Cancer",
    label: "Reoperation due to positive margins",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#a3cb37",
    link: ""
  },
  {
    label: "Acute complications of treatment",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#a3cb37",
    link: ""
  },
  {
    label: "Depression",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Pain",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Fatigue",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Body image",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Arm and breast symptoms",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Vasomotor symptoms",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Neuropathy",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Arthralgia",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Sexual dysfunction",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Health-related quality of life",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Survival",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#e1ecc1",
    link: ""
  },
  {
    label: "Recurrence free survival",
    category: "A",
    ontstaanuit: "v",
    value: 1,
    colour: "#e1ecc1",
    link: ""
  }
];

// ___________________________________________________________________________ Dataset voor Colorectal cancer
var seedDatacc = [
  {
    title1: "Colorectal",
    title2: "Cancer",
    label: "Presence of stoma",
    category: "Disutility of care",
    ontstaanuit: "",
    value: 1,
    colour: "#a3cb37",
    link: ""
  },
  {
    label: "Acute complications of treatment",
    category: "Disutility of care",
    ontstaanuit: "Clavien-Dindo Classification and CTCAE v4.0.l",
    value: 1,
    colour: "#a3cb37",
    link: ""
  },
  {
    label: "Depression",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-C30",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Pain",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-C30",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Fatigue",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-C30",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Gastrointestinal symptoms",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-CR29",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Neuropathy",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-LMC21",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Stoma functioning",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-CR29",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Sexual dysfunction",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-CR29",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Health-related quality of life",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-CR30",
    value: 1,
    colour: "#c8de89",
    link: ""
  },
  {
    label: "Survival",
    category: "Survival and disease control",
    ontstaanuit: "",
    value: 1,
    colour: "#e1ecc1",
    link: ""
  },
  {
    label: "Disease control",
    category: "Survival and disease control",
    ontstaanuit: "",
    value: 1,
    colour: "#e1ecc1",
    link: ""
  },
  {
    label: "Hospital admission at the end of life",
    category: "Quality of death",
    ontstaanuit: "",
    value: 1,
    colour: "#eff5db",
    link: ""
  },
  {
    label: "Place of death",
    category: "Quality of death",
    ontstaanuit: "",
    value: 1,
    colour: "#eff5db",
    link: ""
  }
];




// ___________________________________________________________________________ Dataset voor Colorectal cancer BLAUW
var seedDataccB = [
  {
    title1: "Colorectal",
    title2: "Cancer",
    label: "Presence of stoma",
    category: "Disutility of care",
    ontstaanuit: "",
    question: "",
    value: 1,
    colour: "#006e94",
    link: ""
  },
  {
    label: "Acute complications of treatment",
    category: "Disutility of care",
    ontstaanuit: "Clavien-Dindo Classification and CTCAE v4.0",
    question: "",
    value: 1,
    colour: "#006e94",
    link: ""
  },
  {
    label: "Depression",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-C30",
    question: [24],
    value: 1,
    colour: "#0889b5",
    link: ""
  },
  {
    label: "Pain",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-C30",
    question: [9,19],
    value: 1,
    colour: "#0889b5",
    link: ""
  },
  {
    label: "Fatigue",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-C30",
    question: [10, 12, 18],
    value: 1,
    colour: "#0889b5",
    link: ""
  },
  {
    label: "Gastrointestinal symptoms",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-CR29",
    question: "",
    value: 1,
    colour: "#0889b5",
    link: ""
  },
  {
    label: "Neuropathy",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-LMC21",
    question: "",
    value: 1,
    colour: "#0889b5",
    link: ""
  },
  {
    label: "Stoma functioning",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-CR29",
    question: "",
    value: 1,
    colour: "#0889b5",
    link: ""
  },
  {
    label: "Sexual dysfunction",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-CR29",
    question: "",
    value: 1,
    colour: "#0889b5",
    link: ""
  },
  {
    label: "Health-related quality of life",
    category: "Degree of health",
    ontstaanuit: "Quality of Life Questionnaire - EORTC QLQ-C30",
    question: [29, 30],
    value: 1,
    colour: "#0889b5",
    link: ""
  },
  {
    label: "Survival",
    category: "Survival and disease control",
    ontstaanuit: "",
    question: "",
    value: 1,
    colour: "#1cb7ed",
    link: ""
  },
  {
    label: "Disease control",
    category: "Survival and disease control",
    ontstaanuit: "",
    question: "",
    value: 1,
    colour: "#1cb7ed",
    link: ""
  },
  {
    label: "Hospital admission at the end of life",
    category: "Quality of death",
    ontstaanuit: "",
    question: "",
    value: 1,
    colour: "#51ccf7",
    link: ""
  },
  {
    label: "Place of death",
    category: "Quality of death",
    ontstaanuit: "",
    question: "",
    value: 1,
    colour: "#51ccf7",
    link: ""
  }
];





  
  $(".collaps").hide();
  $( "svg" ).children().remove();

  svgfunc(seedDataccB);

  $('.arc').children( ".newPath" ).remove();

      $("button").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
      $('.deelcontent').css( "display", "none" );


// ___________________________________________________________________________ Kies tussen verschillende ziekte vorm
// $( "#bc" ).on( "click", function() {

//   $( "svg" ).children().remove();

//   svgfunc(seedDatabc);

//   $('.arc').children( ".newPath" ).remove();

//       $("button").removeClass("active");
//       // add class to the one we clicked
//       $(this).addClass("active");

//       $('.stippellijn').removeClass('animated');
//       $('.stippellijn').removeClass('fadeInLeft');
//       $('.deelcontent').css( "display", "none" );

// });

// $( "#cc" ).on( "click", function() {

//   $( "svg" ).children().remove();

//   svgfunc(seedDatacc);

//   $('.arc').children( ".newPath" ).remove();

//       $("button").removeClass("active");
//       // add class to the one we clicked
//       $(this).addClass("active");

//       $('.stippellijn').removeClass('animated');
//       $('.stippellijn').removeClass('fadeInLeft');
//       $('.deelcontent').css( "display", "none" );

// });


// ___________________________________________________________________________ Er wordt een cirkeldiagram gemaakt met de meegegeven data set.
function svgfunc(p1) {

var seedData = p1;

if(window.innerWidth > window.innerHeight){
  var width = 382.5,
    height = 382.5,
    radius = Math.min(width, height) / 2.1;
}

if(window.innerHeight > window.innerWidth){
  var width = 300,
    height = 300,
    radius = Math.min(width, height) / 2;
}

// Define arc ranges
var arcText = d3.scaleOrdinal().range([0, width]);

// Determine size of arcs
if(window.innerWidth > window.innerHeight){
  var arc = d3
    .arc()
    .innerRadius(radius - 110)
    .outerRadius(radius - 10);
}
if(window.innerHeight > window.innerWidth){
  var arc = d3
    .arc()
    .innerRadius(radius - 70)
    .outerRadius(radius - 10);
}

// Create the donut pie chart layout
var pie = d3
  .pie()
  .value(function(d) {
    return d["value"];
  })
  .sort(null);

  var radius2 = height / 2;

// Append SVG attributes and append g to the SVG
var svg = d3
  .select("#donut-chart")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + radius2 + "," + radius2 + ")");

// Define inner circle
svg
  .append("circle")
  .attr("cx", 150)
  .attr("cy", 150)
  .attr("r", 100)
  .attr("fill", "#fff");

// Calculate SVG paths and fill in the colours
var g = svg
  .selectAll(".arc")
  .data(pie(seedData))
  .enter()
  .append("g")
  .attr("class", "arc")

  // Make each arc clickable !!!!!!!!!!!!!!!!!!!!!!!
  .on("click", function(d, i) {
    $('.arc').removeClass('active');
    $(this).addClass('active');
    $('.arc').children( ".newPath" ).remove();
    $(this).children( "path" ).clone().addClass('newPath').appendTo(this);
    $(this).prepend( $( ".newPath" ) );
    $('.newPath').css( "transform", "scale(1.05)" );
    
    // $('.stippellijn').addClass('animated');
    // $('.stippellijn').addClass('fadeInLeft');
    // $('.deelcontent').delay(2000).css( "display", "block" );

    // var collapscontent = $('.collaps').next();
    // console.log(collapscontent);

    $('.deelcontent').fadeIn( 300 );
    // $('.deelcontent h1').css( "display", "block" );
    $(".category").text("Categorie: " + seedData[i].category);
    
    
    // Maak de data uit 'ontstaanuit' gelijk aan de classnames door spaties, streepjes en punten 
    // te veranderen in underscores.
    if (seedData[i].ontstaanuit.includes('EORTC')) {
      var ontstaanuit_tekst = seedData[i].ontstaanuit;
      var ontstaanuit_tekst_cut = ontstaanuit_tekst.substring(ontstaanuit_tekst.lastIndexOf("- ") + 1);
      var ontstaanuit_tekst_cut_unders = ontstaanuit_tekst_cut.split(' ').join('_');
      console.log(ontstaanuit_tekst_cut_unders);
    }else{
      var ontstaanuit_tekst = seedData[i].ontstaanuit;
      var ontstaanuit_tekst_cut_unders0 = ontstaanuit_tekst.split(' ').join('_');
      var ontstaanuit_tekst_cut_unders1 = ontstaanuit_tekst_cut_unders0.split('-').join('_');
      var ontstaanuit_tekst_cut_unders = ontstaanuit_tekst_cut_unders1.split('.').join('_');
      console.log(ontstaanuit_tekst_cut_unders);
    }


    if (seedData[i].ontstaanuit != "" && seedData[i].question !="") {
      $(".ontstaanuit").text("Gemeten met: " + seedData[i].ontstaanuit + " d.m.v. vragen: " + seedData[i].question);  

        // Maak bijbehorende PROMs zichtbaar wanneer op arc geklikt wordt, de andere niet zichtbaar
        $(".collaps").hide();
        $( ".collaps" ).next().hide();      
        $("." + ontstaanuit_tekst_cut_unders).show();
        $("." + ontstaanuit_tekst_cut_unders).next().show();


        $(".collaps").css("background-color", seedData[i].colour ); // verander kleur van vragenlijst titel naar kleur van geklikte arc

        $(".collaps_content .Q").css("color", "darkgray" );
        seedData[i].question.forEach(function(element) {
          console.log(element);
          $(".collaps_content .Q" + element).css("color", "#4B4D4B" );
        });


    }
        
    if (seedData[i].ontstaanuit != "" && seedData[i].question == "") {
      $(".ontstaanuit").text("Gemeten met: " + seedData[i].ontstaanuit);
      // Maak bijbehorende PROMs zichtbaar wanneer op arc geklikt wordt, de andere niet zichtbaar
      $(".collaps").hide();
      $( ".collaps" ).next().hide();      
      $("." + ontstaanuit_tekst_cut_unders).show();
      $("." + ontstaanuit_tekst_cut_unders).next().show();
    }
    if (seedData[i].ontstaanuit == "" && seedData[i].question == "") {
      $(".ontstaanuit").text("");
    }


    $(".deelcontent h4").text(seedData[i].label);



});

// Append the path to each g
g
  .append("path")
  .attr("d", arc)
  .attr("fill", function(d, i) {
    return seedData[i].colour;
  });

// Append text labels to each arc
g
  .append("text")
  .attr("transform", function(d) {
    return "translate(" + arc.centroid(d) + ")";
  })
  .attr("dy", "0.35em")
  .style("text-anchor", "middle")
  .attr("fill", "#000")
  .text(function(d, i) {
    return seedData[i].label;
  });

g.selectAll(".arc text").call(wrap, arcText.range([0, 1]));

// Append text to the inner circle
svg
  .append("text")
  .attr("dy", "0em")
  .style("text-anchor", "middle")
  .attr("class", "inner-circle")
  .attr("fill", "#36454f")
  .text(function(d) {
    return seedData[0].title1;
  });

svg
  .append("text")
  .attr("dy", "1.0em")
  .style("text-anchor", "middle")
  .attr("class", "inner-circle")
  .attr("fill", "#36454f")
  .text(function(d) {
    return seedData[0].title2;
  });

// Wrap function to handle labels with longer text
function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
      words = text
        .text()
        .split(/\s+/)
        .reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1, // ems
      y = text.attr("y"),
      dy = parseFloat(text.attr("dy")),
      tspan = text
        .text(null)
        .append("tspan")
        .attr("x", 0)
        .attr("y", y)
        .attr("dy", dy-0.75 + "em");
    // console.log(tspan);
    while ((word = words.pop())) {
      line.push(word);
      tspan.text(line.join(" "));
      if(window.innerWidth > window.innerHeight){
        if (tspan.node().getComputedTextLength() > 60) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", 0)
            .attr("y", y)
            .attr("dy", 2 * lineHeight + dy-1 + "em")
            .text(word);
        }
      }
      if(window.innerHeight > window.innerWidth){
        if (tspan.node().getComputedTextLength() > 30) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", 0)
            .attr("y", y)
            .attr("dy", 2 * lineHeight + dy-1.2 + "em")
            .text(word);
        }
      }
    }
  });
}

}



// ___________________________________________________________________________ Hieronder komt een nieuw onderdeel


// Het in en uitklappen van uitvouwtekst
    var coll = document.getElementsByClassName("collaps");
    var i;

    for (i = 0; i < coll.length; i++) {

      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
          content.style.height = 'auto';
        } else {
          content.style.maxHeight = content.scrollHeight + 20 + "px";
          content.style.height = 'auto';
        } 
      });



    }



  if (window.matchMedia('(max-width: 800px)').matches) {
      //...
      var ichom_svg_width = $('svg#donut-chart').width();
      var content_width = $('.content').width();
      console.log(content_width);
      console.log(ichom_svg_width);
      var ichom_svg_marginleft = (content_width - ichom_svg_width) / 2;
      console.log(ichom_svg_marginleft);
      $('.ICHOM svg').css("margin-left", ichom_svg_marginleft);
  } else {
      //...
  }




});


