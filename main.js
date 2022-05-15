var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg" ,function(Img){
        blockimg=Img;
        blockimg.scaleToWidth(700);
        blockimg.scaleToHeight(510);
        blockimg.set({
            top:0,
            left:0
        });
        canvas.add(blockimg);
    });
	
}

function playSound(){
	x.play();
}
