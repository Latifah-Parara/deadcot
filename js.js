
window.onload= function(){
    var c = document.getElementById("logo");
    var ctx = c.getContext("2d");

    // var width = c.width;
    // var height = c.height;

    // var backgroundColour = "#FFFFFF"


    // c.onmousedown = function (e) {
    //     mouseDown = true;
    //     console.log("mouseDown = " + mouseDown);
    // };

    var img = new Image();
    img.src = "images/b46fc17d2c.png";
    console.log("SRC", img.src)
    img.onload = function(){
        ctx.drawImage(img,0,0); // Or at whatever offset you like
    };
    

    var fps = 30;
    var spacing = Math.floor(1000 / fps);

    var date = new Date();
    var last_frame = date.getTime();

    var quit = true; //can you commit yeah:)


    while(!quit) { 


        try {
            let now = date.getTime();
            if (last_frame + spacing < now) {
                let wait = last_frame + spacing - now;
                await new Promise(r => setTimeout(r, wait)); //this throws the error of await not working with asyc
            }
        } catch(error) {
            console.log(error)
        }
    }

}
