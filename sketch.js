var buttonEat, buttonSign, buttonGame, buttonBMI, buttonFit;
var buttonSign;
var cardio, fatBurn,lowerBody,upperBody,HIIT,tabata, zumba, warmup, cooldown, fullBody;
var state=0;

function setup(){
   buttonSign= createSprite(200,200,200,100);
   buttonSign.shapeColor="green";

   buttonEat= createSprite(200,80,200,50);
   buttonEat.shapeColor="pink";
   buttonEat.visible=false;
   
   buttonGame= createSprite(200,150,200,50);
   buttonGame.shapeColor="pink";
   buttonGame.visible=false;
   
   buttonBMI= createSprite(200,220,200,50);
   buttonBMI.shapeColor="pink";
   buttonBMI.visible=false;
   
   buttonFit= createSprite(200,300,200,50);
   buttonFit.shapeColor="pink";
   buttonFit.visible=false;

   cardio= createSprite(100,70,150,50);
   cardio.shapeColor="pink";
   cardio.visible=false;

   lowerBody= createSprite(100,140,150,50);
   lowerBody.shapeColor="pink";
   lowerBody.visible=false;

   fatBurn= createSprite(100,210,150,50);
   fatBurn.shapeColor="pink";
   fatBurn.visible=false;

   fullBody= createSprite(100,280,150,50);
   fullBody.shapeColor="pink";
   fullBody.visible=false;

   upperBody= createSprite(100,350,150,50);
   upperBody.shapeColor="pink";
   upperBody.visible=false;

   HIIT= createSprite(300,350,150,50);
   HIIT.shapeColor="pink";
   HIIT.visible=false;

   tabata= createSprite(300,70,150,50);
   tabata.shapeColor="pink";
   tabata.visible=false;

   zumba= createSprite(300,140,150,50);
   zumba.shapeColor="pink";
   zumba.visible=false;

   warmup= createSprite(300,210,150,50);
   warmup.shapeColor="pink";
   warmup.visible=false;

   cooldown= createSprite(300,280,150,50);
   cooldown.shapeColor="pink";
  cooldown.visible=false;
}
function draw() {
   createCanvas(400,400)
  background(182,206,255);
  drawSprites();

  if(state===0){
   textSize(50);
   stroke(rgb(0,0,0));
   textFont("Impact");
   text("Sign In",130,220);

   if(mousePressedOver(buttonSign)){
      state=1;
    }  

  }
   
  if(state===1){
   
   buttonSign.visible=false;

   buttonBMI.visible=true;
   buttonEat.visible=true;
   buttonFit.visible=true;
   buttonGame.visible=true;

   textSize(30);
   stroke(rgb(0,104,132));
   textFont("Impact");
   text("Eat Healthy",140,90);
   
   textSize(30);
   stroke(rgb(0,104,132));
   textFont("Impact");
   text("Games",155,160);
   
   textSize(30);
   stroke(rgb(0,104,132));
   textFont("Impact");
   text("BMI",170,230);
   
   textSize(30);
   stroke(rgb(0,104,132));
   textFont("Impact");
   text("Workouts",140,310);

   if(mousePressedOver(buttonFit)){
      state=2;
   }
  }

  if(state===2){

   textSize(30);
   stroke(rgb(29,104,132));
   textFont("Impact");
   text("Workouts",150,30);
   
   textSize(30);
   stroke(rgb(20,0,0));
   textFont("Georgia");
   text("cardio",55,80);
   
   textSize(25);
   stroke(rgb(20,0,0));
   textFont("Georgia");
   text("Lower Body",33,150);
   
   textSize(25);
   stroke(rgb(20,0,0));
   textFont("Georgia");
   text("Fat Burn",50,220);
   
   textSize(25);
   stroke(rgb(20,0,0));
   textFont("Georgia");
   text("Full Body",40,290);
   
   textSize(25);
   stroke(rgb(20,0,0));
   textFont("Georgia");
   text("Upper Body",33,360);
   
   textSize(25);
   stroke(rgb(20,0,0));
   textFont("Georgia");
   text("HIIT",270,80);
   
   textSize(25);
   stroke(rgb(20,0,0));
   textFont("Georgia");
   text("Tabata",260,150);
   
   textSize(25);
   stroke(rgb(20,0,0));
   textFont("Georgia");
   text("Zumba",265,220);
   
   textSize(25);
   stroke(rgb(20,0,0));
   textFont("Georgia");
   text("Warmup",250,290);
   
   textSize(25);
   stroke(rgb(20,0,0));
   textFont("Georgia");
   text("Cool down",250,360);

   buttonBMI.visible=false;
   buttonEat.visible=false;
   buttonFit.visible=false;
   buttonGame.visible=false;
 
   cardio.visible=true;
   zumba.visible=true;
   tabata.visible=true;
   HIIT.visible=true;
   cooldown.visible=true;
   warmup.visible=true;
   lowerBody.visible=true;
   fullBody.visible=true;
   upperBody.visible=true;
   fatBurn.visible=true;

   if(mousePressedOver(cardio)){
      state=3;
}
if(mousePressedOver(zumba)){
   state=4;
}
if(mousePressedOver(tabata)){
state=5;
}
if(mousePressedOver(HIIT)){
state=6;
}
if(mousePressedOver(cooldown)){
state=7;
}
if(mousePressedOver(warmup)){
state=8;
}
if(mousePressedOver(lowerBody)){
state=9;
}
if(mousePressedOver(fullBody)){
state=10;
}
if(mousePressedOver(upperBody)){
state=11;
}
if(mousePressedOver(fatBurn)){
state=12;
}
  }
if(state===3){
   cardio.visible=false;
   zumba.visible=false;
   tabata.visible=false;
   HIIT.visible=false;
   cooldown.visible=false;
   warmup.visible=false;
   lowerBody.visible=false;
   fullBody.visible=false;
   upperBody.visible=false;
   fatBurn.visible=false;
}
if(state===3){
   cardio.visible=false;
   zumba.visible=false;
   tabata.visible=false;
   HIIT.visible=false;
   cooldown.visible=false;
   warmup.visible=false;
   lowerBody.visible=false;
   fullBody.visible=false;
   upperBody.visible=false;
   fatBurn.visible=false;
}
if(state===5){
   cardio.visible=false;
   zumba.visible=false;
   tabata.visible=false;
   HIIT.visible=false;
   cooldown.visible=false;
   warmup.visible=false;
   lowerBody.visible=false;
   fullBody.visible=false;
   upperBody.visible=false;
   fatBurn.visible=false;
}
if(state===6){
   cardio.visible=false;
   zumba.visible=false;
   tabata.visible=false;
   HIIT.visible=false;
   cooldown.visible=false;
   warmup.visible=false;
   lowerBody.visible=false;
   fullBody.visible=false;
   upperBody.visible=false;
   fatBurn.visible=false;
}
if(state===7){
   cardio.visible=false;
   zumba.visible=false;
   tabata.visible=false;
   HIIT.visible=false;
   cooldown.visible=false;
   warmup.visible=false;
   lowerBody.visible=false;
   fullBody.visible=false;
   upperBody.visible=false;
   fatBurn.visible=false;
}
if(state===8){
   cardio.visible=false;
   zumba.visible=false;
   tabata.visible=false;
   HIIT.visible=false;
   cooldown.visible=false;
   warmup.visible=false;
   lowerBody.visible=false;
   fullBody.visible=false;
   upperBody.visible=false;
   fatBurn.visible=false;
}
if(state===9){
   cardio.visible=false;
   zumba.visible=false;
   tabata.visible=false;
   HIIT.visible=false;
   cooldown.visible=false;
   warmup.visible=false;
   lowerBody.visible=false;
   fullBody.visible=false;
   upperBody.visible=false;
   fatBurn.visible=false;
}
if(state===10){
   cardio.visible=false;
   zumba.visible=false;
   tabata.visible=false;
   HIIT.visible=false;
   cooldown.visible=false;
   warmup.visible=false;
   lowerBody.visible=false;
   fullBody.visible=false;
   upperBody.visible=false;
   fatBurn.visible=false;
}
if(state===11){
   cardio.visible=false;
   zumba.visible=false;
   tabata.visible=false;
   HIIT.visible=false;
   cooldown.visible=false;
   warmup.visible=false;
   lowerBody.visible=false;
   fullBody.visible=false;
   upperBody.visible=false;
   fatBurn.visible=false;
}
if(state===12){
   cardio.visible=false;
   zumba.visible=false;
   tabata.visible=false;
   HIIT.visible=false;
   cooldown.visible=false;
   warmup.visible=false;
   lowerBody.visible=false;
   fullBody.visible=false;
   upperBody.visible=false;
   fatBurn.visible=false;
   
}
  textSize(20);
   stroke(rgb(20,0,0));
   textFont("Georgia");
   text("*pls click right on top of the button*",50,395);
   (function(){

      var d = document,
          strType = typeof '',
          defaultSelector = '.insert-video';
    
      function each(obj,callback) {
        var length = obj.length,
            i = 0;
    
        for ( ; i < length; i++ ) {
          if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) { break; }
        }
      }
    
      function createVideo(vidAttributes){
        var video = d.createElement('video'),
            sources = vidAttributes.sources;
    
        if ( !sources || vidAttributes.src ) { return false; }
        delete vidAttributes.sources;
    
        for (var attr in vidAttributes) { video.setAttribute(attr,vidAttributes[attr]); }
    
        sources = JSON.parse(sources);
    
        each(sources,function(){
          var source = d.createElement('source');
          for (var attr in this) { source.setAttribute(attr,this[attr]); }
          video.appendChild(source);
        });
    
        return video;
      }
    
    
      function insertVideos(selector,opts){
    
        if ( arguments.length === 1 ) {
          opts = selector || {};
          selector = defaultSelector;
        } else {
          opts = opts || {};
          selector = selector || defaultSelector;
        }
    
        var elems = (
              selector.nodeType ? [selector] :
              typeof selector === strType ? d.querySelectorAll(selector) : selector
            ),
            videos = [];
    
        if ( !elems ) { return false; }
    
        each(elems,function(i,elem){
    
          if ( elem && elem.className.indexOf(' insert-video--done') < 0 ) {
    
            var dataAttr = elem.dataset || false,
                attr, video;
    
            if ( !dataAttr ) {
              attr = elem.attributes;
    
              each(attr,function(i,el){
                var attrName = this.name.replace('data-','');
                if ( attrName.length < this.name.length ) {
                  dataAttr[attrName] = this.value;
                }
              });
    
            }
    
            if ( opts.condition !== false ) {
              video = createVideo(dataAttr);
            }
    
            if ( video ) {
              videos.push(video);
              elem.innerHTML = '';
              elem.className += ' insert-video--done';
              elem.appendChild(video);
            } else {
              elem.className += ' insert-video--fallback';
              elem.innerHTML = ( dataAttr.fallback ? dataAttr.fallback : opts.fallback ? opts.fallback : dataAttr.poster ? '<img src="' + dataAttr.poster + '" />' : '' );
            }
    
    
          }
        });
    
        return videos;
      }
    
      window.insertVideos = insertVideos;
    
    }());
    
    insertVideos({
      condition: Modernizr.video
    });
    
    insertVideos('.fail-video',{
      condition: false
    })
}
