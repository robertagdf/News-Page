# News-Page

Projeto 

HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Save The Planet</title>
    <link rel="stylesheet" href="index.css">
 
</head>
          

<body>
    <!-- header section starts here-->
    <header class="header">
        <a href="#" class="logo">
            <img src="./img/logo planet.jpg" alt="logo">
        </a>

        <div id="Busca">
            <input type="text" id="txtBusca" placeholder="Buscar..."/>
            <button id="btnBusca"></button>
        </div>

        <nav class="navbar">
            <a href="Home.html">home</a>
            <a href="sobre.html">sobre</a>
            <a href="contato.html">contato</a>
        </nav>
  
    </header>

    
    <section>  
        <br><br>
        <br><br>
        <br><br>
        <br><br>
        <br><br>
        <h1>Noticias</h1>
        <br><br>
        <br><br>

    </section>

   
        

     <div class="container">
        <img src="./img/Toneladas.lixo.jpg" width="500" height="500" /></img>
     </div>

   

       <!-- style to create vertical line -->
    <style>
        .vertical {
            border-left: 2px solid rgb(199, 60, 45);
            height: 42%;
            position:absolute;
            left: 41%;  
        }

    </style>
</head>
  

<body style = "text-align: center;"> 
    <h2 style = "color: black;"> 
     BRASIL GERA 82 MILHÕES DE TONELADAS DE LIXO E RECICLA APENAS 2%.
    </h2> 
          
    <div class = "vertical"></div>
  
    <main>
        <section>

            <div class="center">
                <p>
                 "Os dados do Diagnóstico de Manejo de Resíduos Sólidos Urbanos do Brasil entraram em pauta e assustaram muita gente na noite da última segunda-feira (23) após uma reportagem do Jornal Nacional revelar que o Brasil gera 82 milhões de toneladas de lixo todos os anos e recicla apenas 2%.
                
                 A reportagem ainda apresenta as metas do Plano Nacional dos Resíduos Sólidos, que propõe um conjunto de ações para os próximos 20 anos e se adequa à legislação presente na Política Nacional dos Resíduos Sólidos (2010) e no Marco Legal do Saneamento (2020).  
                
                 Batizado de Planares, o documento foi publicado no último dia 14 de abril no Diário Oficial e deve ser atualizado a cada quatro anos. O objetivo é reciclar 14% de todo o lixo produzido no país até 2024 e chegar aos 50% em 2040."
                </p>
                </div>
        </section>
    </main>

        <div class="faixa-verde"></div>


   </body>
</html>

CSS:

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;800&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: capitalize;
    transition: 2s linear;
}

.header{
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 7%;
    border-bottom: var(--border);
    position: fixed;
    top: 0; left: 0; right: 0;
}

.header .logo img{
    height: 3.5rem;
}

.header .navbar a{
    margin: 0 1rem;
    font-size: 20px;
    text-decoration: none;
    justify-content: space-between;
    font-weight: bold;
    color: rgb(8, 8, 8);
 }

  #Busca{
    background-color: #ffffff;
    border: solid 1px #114d23;
    border-radius: 5px;
    width: 300px;
    height: 32px;
    padding: right 100px;
  }

  #txtBusca{
    text-align: left;
    align-items: center;
    background-color: transparent;
    font-size: 15px;
    padding: 10px;
    border: none;
    height: 28px;
    width: 191px;
  }

 .section{
    position: absolute;
    top: 10%;
    width: 100%;
    text-align: center-left;
    padding: 60px;
    border: none;
 }

 #imagem-content {
    display: inline-block;
 }

   .about-header{
    padding: 5%;
    margin:0px;
    
  }
    .container img {
    float: left;
    border: transparent thin solid;
    padding: 5px;
    width: 410x;
    height: 410px;
   }

   h1{
    text-align: left;
    font-family: 'Georgia' !important;
    font-size: 35px;
    align-items: left;
    padding: 10px;
    display: flex;
    position: relative;
   }

   h2 {
    text-align:center;
    font-family: 'Georgia' !important;
    font-size: 30px;
    align-items: center;
    padding: 8px;
    display: flex;
 }
   .center {
    text-align: center;
    font-family: 'Georgia' !important;
    font-size: 23px;
    align-items: center;
    padding: 20px;
    display: flex;
    position: relative;
   }

    p {
        text-align: left;
        font-family: 'Georgia' !important;
        font-size: 16px;
        align-items: center;
        font-display: center;
        padding: 6%;
        margin:00px;
    }

   main{
    font-family: 'Georgia' !important;    
    font-size:20px;
    margin: 0px;
    padding: 0 00%;
    font-weight: 0;
    text-align: center;
    font-display: center;
   }

   .faixa-verde{
    height: 100px;
    background-color: #32CD32;
    padding: 20px;
   }


http://127.0.0.1:5500/index.html
http://localhost:5500/index.html 
