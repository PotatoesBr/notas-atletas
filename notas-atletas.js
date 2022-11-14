

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; };

for (let i = 0; i < atletas.length; i++) {
   

     
 let organizado = atletas[i].notas.sort(comparaNumeros);
  console.log(organizado);
  
  
 
     
    let cortado = atletas[i].notas.slice(atletas[i].notas.length - atletas[i].notas.length +1,atletas[i].notas.length -1);
     console.log(cortado);
     
     
     let media = 0;
    let tiratMedia = cortado.map(
         
         function(medias){
             
            media = media + medias ;
             
         }


);

     
    media =  media / cortado.length;
     
     console.log(media);
     console.log (
         
        `Nome: ${atletas[i].nome} 
Nota Final: ${media}`
        
        );
};

// FAZER PELO CELULAR FOI DIFICIL E DEMORADO S2
