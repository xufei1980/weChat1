/**
 * Created by think on 2017/12/4.
 */
FastClick.attach(document.body);
//compute REM
!function () {
    var desW=640,
        winW=document.documentElement.clientWidth,
        ratio=winW/desW,
        oMain=document.querySelector(".main");
      if(winW>desW){
          oMain.style.margin='0 auto';
          oMain.style.width=desW+'px';
          return;
      }
     document.documentElement.style.fontSize=ratio*100+'px';
}();
new Swiper('.swiper-container',{
    direction:'vertical',
    loop:true,
    autoplay:2000,
//    当切换结束后给展示区域添加对应的ID，由此实现对应动画效果
    onSlideChangeEnd:function (swiper) {
        var slideAry=swiper.slides,
              curIn=swiper.activeIndex,
                total=slideAry.length,targetID='page';
        console.log(total);
        switch (curIn){
            case 0:targetID+=total-2;
            break;
            case total-1:targetID+=1;
            break;
            default:targetID+=curIn;
        }
        [].forEach.call(slideAry,function (item,index) {
            if(index===curIn){
                item.id=targetID;

            }else{item.id=null;}

        });

}
});
//music
!function () {
    var musicMenu=document.getElementById("musicMenu"),
        audio1=document.getElementById("audio1");
    musicMenu.addEventListener('click',function () {
        if(audio1.paused){
            audio1.play();
            musicMenu.className='music move';
            return;
        }
        audio1.pause();
        musicMenu.className='music';
    },false);
    function controlMusic() {
        audio1.volume=0.1;
        audio1.play();
        audio1.addEventListener('canplay',function () {
          musicMenu.style.display='block';
          musicMenu.className='music move';
        },false);
    }
//     window.setTimeout(controlMusic,1000);
}();
