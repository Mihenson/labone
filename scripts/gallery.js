let NumberImage = 1;
const CountImage=6;
const path="img/";
let LeftImage=6;
let RightImage=2;

function ChangeImage(){
    let image=path+NumberImage+".jpg";
    $("#mainimg").slideUp(500,function(){
        $("#mainimg").attr(name="src", image);
        $("#mainimg").fadeIn(500)
    });
    let limage=path+(LeftImage)+".jpg";
    $("#leftimg").fadeOut(500,function(){
        $("#leftimg").attr(name="src", limage);
        $("#leftimg").fadeIn(500)
    });
    let rimage=path+(RightImage)+".jpg";
    $("#rightimg").fadeOut(500,function(){
        $("#rightimg").attr(name="src", rimage);
        $("#rightimg").fadeIn(500)
    });
}
function LeftChangeImage(){
    if(NumberImage>1){
        NumberImage--;
        LeftImage=NumberImage-1;
        RightImage=NumberImage+1;

        if(LeftImage<1){
            LeftImage=CountImage;
        }
    }
    else{
        NumberImage=CountImage;
        LeftImage=NumberImage-1;
        RightImage=1;
    }
    ChangeImage()
}
function RightChangeImage(){
    if(NumberImage<CountImage){
        NumberImage++;
        LeftImage=NumberImage-1;
        RightImage=NumberImage+1;

        if(RightImage>CountImage){
            RightImage=1;
        }
    }
    else{
        NumberImage=1;
        LeftImage=CountImage;
        RightImage=NumberImage+1;
    }
    ChangeImage()
}
