  let canvas = document.getElementById("cnv");

  let ctx = canvas.getContext("2d");
  let ctx2 = canvas.getContext("3d")
  const colors = ['blue','red','orange','pink','yellow','green','purple','cyan','teal','gray']
  let num;

        ctx.moveTo(0,0);
        let x = 0;
        let y = 0;
        ctx.strokeStyle = "white";

        function linha(){
            ctx.lineTo(x,y);
            ctx.stroke();
            x += Math.floor(Math.random() * 10);
            y += Math.floor(Math.random() * 10);
        }

        setInterval(function(){
                if(x <= 10000){
                     linha();
                }
        },25)

    console.log(Math.floor(Math.random() * 10)      )
    setInterval(function(){
            const oneToTenRandom = Math.floor(Math.random() * 10)
        ctx.strokeStyle = colors[oneToTenRandom]
},2)








