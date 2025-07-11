//instr https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

const DrwInfo=document.getElementById("DrwInfo");
const Canvas = document.getElementById("CanvasOut");
function Drawing(){
     let Dados = new FormData(DrwInfo);
     
     console.log(Dados);
     let ctx = Canvas.getContext("2d");
     let opc = Dados.get("shape");
     ctx.fillStyle=Dados.get("Colr");
     ctx.lineWidth=5; //this line controls the brush thickness
     switch(opc){
          case 'rectangle':
               console.log("Draw rectangle")
               
               var width = (Number(Dados.get("X1"))-Number(Dados.get("X0")));
               var height = (Number(Dados.get("Y1"))-Number(Dados.get("Y0")));
               ctx.fillRect(Number(Dados.get("Xo")),
                              Number(Dados.get("Y0")),
                              width,
                              height);
               break;

          case "line":
               ctx.beginPath()
               var Xo = Dados.get("Xo");
               var X1 = Dados.get("X1");
               var Yo = Dados.get("Yo");
               var Y1 = Dados.get("Y1");
               ctx.moveTo(Xo, Yo);
               ctx.lineTo(X1,Y1); //for more complex shapes you can insert more line to shapes, 
               // the second line will start where the first stoped
               ctx.fill(); // for a closed path this command will make the color solid on the shape
               ctx.stroke(); //after drawing the shape/ path we must use one of those lines, stroke or fill to render it
               break;
          case 'circle':
               var Xo = Dados.get("Xo");
               var Yo = Dados.get("Yo");
               var radius = Dados.get('X1');
               var angle =Dados.get("Y1");
               if (angle=='') {
                    ctx.arc(Xo,Yo,radius,0,2*Math.PI);
                    ctx.stroke();
               }
               else{
                    ctx.arc(Xo,Yo,radius,0, 1*Math.PI,false);
                    ctx.stroke()
               }
               break;
          default:
               break;
     }

     }
