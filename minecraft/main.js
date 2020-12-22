var canvas = new fabric.Canvas("minevas");

block_width = 30;
block_height = 30;

steve_x = 10;
steve_y = 10; 

var player_object = "";

function player_update()

{
fabric.Image.fromURL("Steve.jpg", function(Img)

{
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set
    ({

    top:steve_y, left:steve_x

    });
  canvas.add(player_object);

} );

}

var block_object = "";

function new_img(get_img)

{
fabric.Image.fromURL(get_img , function(Img)

{
    block_object=Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set
    ({

    top:steve_y, left:steve_x

    });
  canvas.add(block_object);
  
} );

}

window.addEventListener("keydown" , my_keydown)

function my_keydown(e)
{
keypressed = e.keyCode;

if(e.shiftKey == true && keypressed == "80")
{
  block_height = block_height + 10;
  block_width  = block_width + 10;
}

if(e.shiftKey == true && keypressed == "77")
{
block_height = block_height - 10;
block_width  = block_width - 10;
}

if(keypressed == "38")
{
up();
}

if(keypressed == "37")
{
left();
}

if(keypressed == "40")
{
down();
}

if(keypressed == "39")
{
right();
}

if(keypressed == "84")
{
new_img("trunk.jpg");
}

if(keypressed == "85")
{
new_img("unique.png");
}

if(keypressed == "71")
{
  new_img("ground.png");
}

if(keypressed == "68")
{
  new_img("dark_green.png");
}

if(keypressed == "76")
{
  new_img("light_green.png");
}

if(keypressed == "87")
{
  new_img("wall.jpg");
}

if(keypressed == "89")
{
  new_img("yellow_wall.png");
}

if(keypressed == "82")
{
  new_img("roof.jpg");
}

if(keypressed == "67")
{
  new_img("cloud.jpg");
}

}
function up()
{
if(steve_y >= 0)
{
  steve_y = steve_y - block_height;
canvas.remove(player_object);
player_update();

}

}

function down()
{
if(steve_y <= 500)
{
  steve_y = steve_y + block_height;
canvas.remove(player_object);
player_update();


}

}

function left()
{
if(steve_x >= 0)
{
  steve_x = steve_x - block_height;
canvas.remove(player_object);
player_update();

}

}

function right()
{
if(steve_x <= 500)
{
  steve_x = steve_x + block_height;
canvas.remove(player_object);
player_update();
}

}