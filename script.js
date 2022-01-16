  let canvas = document.getElementById("cnv");

  let ctx = canvas.getContext("2d");
  let ctx2 = canvas.getContext("2d")
  let num;

        ctx.moveTo(0,0);
        let x = 0;
        let y = 0;
        ctx.strokeStyle = "white";

        function linha(){  
            ctx.lineTo(x,y);
            ctx.stroke();
            x += 2;
            y += 2;
        }

        setInterval(function(){
                if(x <= 10000){
                     linha();
                }
        },20)

        setInterval(function(){          
                  num = Math.ceil(Math.random() * 3)
    },20)

    setInterval(function(){
        if(num == 1){
             ctx.strokeStyle = "blue";
        }
       else if (num == 2){
            ctx.strokeStyle = "red";
        }
        else if (num == 3){
            ctx.strokeStyle = "green";
        }
},5)
        

        
      
        
    


            