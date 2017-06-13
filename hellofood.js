var presentacio = document.getElementById('presentacio');

botoReproduir.style.display = 'none';
botoPausa.style.display = 'none';
mes.style.display = 'none';
menys.style.display = 'none';
temps.style.display = 'none';
volum.style.display = 'none';
Fw1.style.display = 'none';
Fw2.style.display = 'none';
Fw3.style.display = 'none';
Fw4.style.display = 'none';
Fw5.style.display = 'none';



function playEspecials()
{
    document.getElementById('presentacio').poster="Videos/especials/Cor.png";
    document.getElementById('presentacio').src="Videos/especials/Cor.mp4";
}


function playEspecials2()
{   
    document.getElementById('presentacio').poster="Videos/especials/Nadal.png";
    document.getElementById('presentacio').src="Videos/especials/Nadal.mp4"; 
}

function play1minut()
{   
    document.getElementById('presentacio').poster="Videos/1minut/1minutP.png";
    document.getElementById('presentacio').src="Videos/1minut/1minutP.mp4"; 
}

function play1minut2()
{   
    document.getElementById('presentacio').poster="Videos/1minut/1minutP2.png";
    document.getElementById('presentacio').src="Videos/1minut/1minutP2.mp4"; 
}

function Entrants()
{   
    document.getElementById('Cor').src="Videos/Entrants/Entrant1.png"; 
    document.getElementById('Cor').onclick=entrants1;
    
    document.getElementById('Nadal').src="Videos/Entrants/Entrant2.png"; 
    document.getElementById('Nadal').onclick=entrants2;
    
    document.getElementById('Pimientos').src="Videos/Entrants/Entrant3.png";
    document.getElementById('Pimientos').onclick=entrants3;
    
    document.getElementById('Dedos').src="Videos/Entrants/Entrant4.png";
    document.getElementById('Dedos').onclick=entrants4;
    
    Videos.style.display = 'none';
    botoReproduir.style.display = 'block';
    botoPausa.style.display = 'block';
    mes.style.display = 'block';
    menys.style.display = 'block';
    temps.style.display = 'block';
    volum.style.display = 'block';
    
    document.getElementById("presentacio").controls = false;
}

function entrants1()
{
    document.getElementById('presentacio').poster="Videos/Entrants/Entrant1.png";
    document.getElementById('presentacio').src="Videos/Entrants/morcillas.mp4";
}
function entrants2()
{
    document.getElementById('presentacio').poster="Videos/Entrants/Entrant2.png";
    document.getElementById('presentacio').src="Videos/Entrants/aros.mp4";
}
function entrants3()
{
    document.getElementById('presentacio').poster="Videos/Entrants/Entrant3.png";
    document.getElementById('presentacio').src="Videos/Entrants/bolitas.mp4";
}
function entrants4()
{
    document.getElementById('presentacio').poster="Videos/Entrants/Entrant4.png";
    document.getElementById('presentacio').src="Videos/Entrants/canapes.mp4";
}

function Primers()
{   
    document.getElementById('Cor').src="Videos/Primers/Arrozhabichuelas.png"; 
    document.getElementById('Cor').onclick=primers1;
    
    document.getElementById('Nadal').src="Videos/Primers/CremaChampi.png"; 
    document.getElementById('Nadal').onclick=primers2;
    
    document.getElementById('Pimientos').src="Videos/Primers/Espinacascrema.png";
    document.getElementById('Pimientos').onclick=primers3;
    
    document.getElementById('Dedos').src="Videos/Primers/Judiasblancasjamon.png";
    document.getElementById('Dedos').onclick=primers4;
    
    Videos.style.display = 'none';
    botoReproduir.style.display = 'block';
    botoPausa.style.display = 'block';
    mes.style.display = 'block';
    menys.style.display = 'block';
    temps.style.display = 'block';
    volum.style.display = 'block';
    
     document.getElementById("presentacio").controls = false;
    
}

function primers1()
{
    document.getElementById('presentacio').poster="Videos/Primers/Arrozhabichuelas.png";
    document.getElementById('presentacio').src="Videos/Primers/Arrozhabichuelas.mp4";
}
function primers2()
{
    document.getElementById('presentacio').poster="Videos/Primers/CremaChampi.png";
    document.getElementById('presentacio').src="Videos/Primers/CremaChampi.mp4";
}
function primers3()
{
    document.getElementById('presentacio').poster="Videos/Primers/Espinacascrema.png";
    document.getElementById('presentacio').src="Videos/Primers/Espinacascrema.mp4";
}
function primers4()
{
    document.getElementById('presentacio').poster="Videos/Primers/Judiasblancasjamon.png";
    document.getElementById('presentacio').src="Videos/Primers/Judiasblancasjamon.mp4";
}


function Segonts()
{   
    document.getElementById('Cor').src="Videos/Segons/Cocido.png"; 
    document.getElementById('Cor').onclick=Segonts1;
    
    document.getElementById('Nadal').src="Videos/Segons/EstofadodePavo.png"; 
    document.getElementById('Nadal').onclick=Segonts2;
    
    document.getElementById('Pimientos').src="Videos/Segons/Fabada.png";
    document.getElementById('Pimientos').onclick=Segonts3;
    
    document.getElementById('Dedos').src="Videos/Segons/PatatasConChorizo.png";
    document.getElementById('Dedos').onclick=Segonts4;
    
    Videos.style.display = 'none';
    botoReproduir.style.display = 'block';
    botoPausa.style.display = 'block';
    mes.style.display = 'block';
    menys.style.display = 'block';
    temps.style.display = 'block';
    volum.style.display = 'block';
    
     document.getElementById("presentacio").controls = false;
}

function Segonts1()
{
    document.getElementById('presentacio').poster="Videos/Segons/Cocido.png";
    document.getElementById('presentacio').src="Videos/Segons/Cocido.mp4";
}
function Segonts2()
{
    document.getElementById('presentacio').poster="Videos/Segons/EstofadodePavo.png";
    document.getElementById('presentacio').src="Videos/Segons/EstofadodePavo.mp4";
}
function Segonts3()
{
    document.getElementById('presentacio').poster="Videos/Segons/Fabada.png";
    document.getElementById('presentacio').src="Videos/Segons/Fabada.mp4";
}
function Segonts4()
{
    document.getElementById('presentacio').poster="Videos/Segons/PatatasConChorizo.png";
    document.getElementById('presentacio').src="Videos/Segons/PatatasConChorizo.mp4";
}


function MenjarEstrangers()
{   
    document.getElementById('Cor').src="Videos/extrengers/CHICHARRON.png"; 
    document.getElementById('Cor').onclick=MenjarEstrangers1;
    
    document.getElementById('Nadal').src="Videos/extrengers/CHUELTAS.png"; 
    document.getElementById('Nadal').onclick=MenjarEstrangers2;
    
    document.getElementById('Pimientos').src="Videos/extrengers/shoyuramen.png";
    document.getElementById('Pimientos').onclick=MenjarEstrangers3;
    
    document.getElementById('Dedos').src="Videos/extrengers/Tortilla.png";
    document.getElementById('Dedos').onclick=MenjarEstrangers4;
    
    Videos.style.display = 'none';
    botoReproduir.style.display = 'block';
    botoPausa.style.display = 'block';
    mes.style.display = 'block';
    menys.style.display = 'block';
    temps.style.display = 'block';
    volum.style.display = 'block';
    
     document.getElementById("presentacio").controls = false;
    
}

function MenjarEstrangers1()
{
    document.getElementById('presentacio').poster="Videos/extrengers/CHICHARRON.png";
    document.getElementById('presentacio').src="Videos/extrengers/CHICHARRON.mp4";
}
function MenjarEstrangers2()
{
    document.getElementById('presentacio').poster="Videos/extrengers/CHUELTAS.png";
    document.getElementById('presentacio').src="Videos/extrengers/CHUELTAS.mp4";
}
function MenjarEstrangers3()
{
    document.getElementById('presentacio').poster="Videos/extrengers/shoyuramen.png";
    document.getElementById('presentacio').src="Videos/extrengers/shoyuramen.mp4";
}
function MenjarEstrangers4()
{
    document.getElementById('presentacio').poster="Videos/extrengers/Tortilla.png";
    document.getElementById('presentacio').src="Videos/extrengers/Tortilla.mp4";
}


function Postres()
{   
    document.getElementById('Cor').src="Videos/postres/BOLITASOREO.png"; 
    document.getElementById('Cor').onclick=Postres1;
    
    document.getElementById('Nadal').src="Videos/postres/gelatinagalleta.png"; 
    document.getElementById('Nadal').onclick=Postres2;
    
    document.getElementById('Pimientos').src="Videos/postres/RollitosMANZANA.png";
    document.getElementById('Pimientos').onclick=Postres3;
    
    document.getElementById('Dedos').src="Videos/postres/TartaManzana.png";
    document.getElementById('Dedos').onclick=Postres4;
    
    Videos.style.display = 'none';
    botoReproduir.style.display = 'block';
    botoPausa.style.display = 'block';
    mes.style.display = 'block';
    menys.style.display = 'block';
    temps.style.display = 'block';
    volum.style.display = 'block';
    
    document.getElementById("presentacio").controls = false;
}

function Postres1()
{
    document.getElementById('presentacio').poster="Videos/postres/BOLITASOREO.png";
    document.getElementById('presentacio').src="Videos/postres/BOLITASOREO.mp4";
}
function Postres2()
{
    document.getElementById('presentacio').poster="Videos/postres/gelatinagalleta.png";
    document.getElementById('presentacio').src="Videos/postres/gelatinagalleta.mp4";
}
function Postres3()
{
    document.getElementById('presentacio').poster="Videos/postres/RollitosMANZANA.png";
    document.getElementById('presentacio').src="Videos/postres/RollitosMANZANA.mp4";
}
function Postres4()
{
    document.getElementById('presentacio').poster="Videos/postres/TartaManzana.png";
    document.getElementById('presentacio').src="Videos/postres/TartaManzana.mp4";
}
