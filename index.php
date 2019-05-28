<html>
  <head>
    <title>
      dashboard
    </title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="img/iknl_logo.png"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="main.css">
    <script type="text/javascript" src="main.js"></script>  
    <script src='https://d3js.org/d3.v4.min.js'></script>
  </head>

  <body>
  
  <div class="container">

    <div class="header">
      <ul id="js-breadcrumb" class="breadcrumb">
      <h1 class="header_logo">Logo</h1>
        <li>
          <a href="#">Home</a>
        </li>
<!--          <li>
          class="breadcrumb__toggle"
          <a href="colorectale_kanker/index.html">Colorectal Cancer</a>
           <ul>
            <li>
              <a href="#">Grandparent</a>
            </li>
            <li>
              <a href="#">Grandparent</a>
            </li>
          </ul> 
        </li>-->
      </ul>
    </div>


<!--     <div class="kopje">
      <div class="kopje__title"><b>Integraal Kankercentrum Nederland </b>
        "We strive to improve cancer and palliative care, for which we will combine clinical and outcome information to involve patients more in the quality of care."
 
      "We streven naar het verbeteren van oncologische en palliatieve zorg, hiervoor gaan we klinische en uitkomstinformatie combineren om patiënten meer te betrekken bij de kwaliteit van zorg."
      </div>
    </div>
 -->
        <h2 class="page-title">Kankersoorten</h2>

        <div class="page-text homepage">
          <div class="col33">
            <a class="not_active">borstkanker</a><br>
            <a class="not_active">bot- en wekedelentumoren</a><br>
            <a class="not_active">darmkanker</a><br>
              <!-- <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;dunnedarmkanker</a><br> -->
              <a href="colorectale_kanker/index.php">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;dikkedarmkanker</a><br>
<!--               <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;endeldarmkanker</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;anuskanker</a><br> -->
            <a class="not_active">gynaecologische tumoren</a><br>
            <a class="not_active">hoofd-halskanker</a><br>
          </div>


          <div class="col33"> 
            <a class="not_active">huidkanker</a><br>
            <a class="not_active">hemato-oncologie</a><br>
            <a class="not_active">longkanker</a><br>
            <a class="not_active">neuro-endocrine tumoren en carcinomen</a><br>
          </div>
          <div class="col33">
            <a class="not_active">neuro-oncologie</a><br>
            <a class="not_active">schildklierkanker</a><br>
            <a class="not_active">upper GI & HPB</a><br>
            <a class="not_active">urogenitale kanker</a><br>
            <a class="not_active">zeldzame kanker</a><br>
          </div>
        </div>








<!-- 
        <div class="page-text homepage">
          <div class="col33">
            <a class="not_active">borstkanker</a><br>
            <a class="not_active">bot- en wekedelentumoren</a><br>
            <a class="not_active">darmkanker</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;dunnedarmkanker</a><br>
              <a href="colorectale_kanker/index.php">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;dikkedarmkanker</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;endeldarmkanker</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;anuskanker</a><br>

            <a class="not_active">gynaecologische tumoren</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;cervix</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;endometrium</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;ovarium</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;vulva</a><br>

            <a class="not_active">hoofd-halskanker</a><br>
            <a class="not_active">huidkanker</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;basaalcelcarcinoom</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;plaveiselcelcarcinoom</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;melanoom</a><br>
          </div>


          <div class="col33"> 
            <a class="not_active">hemato-oncologie</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;AML</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;ALL</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;CLL</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;CML</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;Cutane lymfomen</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;HL</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;MDS</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;Mestcellen</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;MF</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;NHL</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;Plasmaceltumoren</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;PV en ET</a><br>
            <a class="not_active">longkanker</a><br>
            <a class="not_active">neuro-endocrine tumoren en carcinomen</a><br>
            <a class="not_active">neuro-oncologie</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;gliomen</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;meningeomen</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;hypofysetumomen</a><br>
          </div>
          <div class="col33">

            <a class="not_active">schildklierkanker</a><br>
            <a class="not_active">upper GI & HPB</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;slokdarm- en maagcarcinoom</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;pancreascarcinoom</a><br>
            <a class="not_active">urogenitale kanker</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;blaaskanker</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;hogere urinewegen / overige urinewegen</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;nierkanker</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;nierbekken en ureter</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;prostaatkanker</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;zaadbalkanker</a><br>
              <a class="not_active">&nbsp;&nbsp;&nbsp;&nbsp;<b>&#8627;</b>&nbsp;&nbsp;peniskanker</a><br>
            <a class="not_active">zeldzame kanker</a><br>
          </div>
        </div> -->




        <div class="row">
          <div class="col33">
            <h4>1.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div class="col33">
            <h4>2.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div class="col33">
            <h4>3.</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>


    </div>

  </body>
</html>