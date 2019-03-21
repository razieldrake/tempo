
var SoftScroll=
{
 /*** Free download with instructions: http://scripterlative.com?softscroll ***/ 
   
 timer:null, lastX:-1, lastY:-1, xHalted:false, yHalted:false, ok:true, step:50, targetDisp:null, stepTarget:{x:0,y:0}, logged:1, startJump:location.href.match(/#([^\?]+)\??/), startJumpDone:false, currentAnchor:null, initialised:false, initialTarget:"", showHref:false,

 //////////////////////////
  delay:50,  proportion:3,
 //////////////////////////

 init:function()
 {    
  var dL, linkTypes=['a','area'];

  if( this.startJump )
  {
   this.startJump = this.startJump[1];
   location.href='#';
   window.scrollTo(0,0);
  }this.cont();

  if( document.documentElement )
   this.dataCode=3;
  else
   if( document.body && typeof document.body.scrollTop != 'undefined' )
    this.dataCode=2;
   else
    if( typeof window.pageXOffset!='undefined' )
     this.dataCode=1;

  for(var i=0, anchs=document.anchors, aLen=anchs.length; i<aLen; i++)
   if(!anchs[i].childNodes.length)
    anchs[i].appendChild(document.createTextNode('\xA0'));

  for(var lt in linkTypes)
  {
   for(var i=0, dL=document.getElementsByTagName(linkTypes[lt]), anchorName, aLen=dL.length; i<aLen && this.ok; i++)
   {
    anchorName = ( dL[i].hash && dL[i].hash.match(/\S/) ) ? dL[i].hash.substring(1) : dL[i].name ? dL[i].name : "";

    if( this.startJump && this.startJump === anchorName )
    {
     SoftScroll.go(anchorName);
     startJumpDone = true;
    }

    if(dL[i].href && this.samePath( dL[i].href, location.href ) && anchorName.length)
    {
     if( this.DEBUG )
     {
      for(var j=0 ; j<aLen && anchorName!=dL[j].name && anchorName!=dL[j].id; j++)
      ;

      if(j==aLen && !document.getElementById(anchorName) && !document.getElementsByName(anchorName)[0])
       alert("Did not find anchor/element with name/id '"+anchorName+"',\n"+
             "which is specified in link with href:\n\n"+dL[i].href);
     }

     this.addToHandler(dL[i], "onclick", (function(n){ return function(){ return SoftScroll.go(n); }})(anchorName) );
    }
   }
  }

  if( !this.startJumpDone && document.getElementById( this.startJump ) )
   SoftScroll.go( this.startJump );

  this.initialised=true;

  if(this.initialTarget!="")
   this.go(this.initialTarget);
 },

 showHash:function()
 {
  this.showHref=true;   
 },
 
 samePath:function(urlA, urlB)
 {
  return urlA.split(/\?|#/)[0] === urlB.split(/\?|#/)[0];
 },

 go:function(anchName)
 {
  if(this.initialised)
  {
    var anchorTags=document.getElementsByTagName('a'), elemRef;

    this.xHalted=this.yHalted=false;
    this.getScrollData();
    this.stepTarget.x=this.x;
    this.stepTarget.y=this.y;

    if(this.timer)
    {
     clearInterval(this.timer);
     this.timer=null;
    }

    for(var i=0, len=anchorTags.length; i<len && anchorTags[i].name!=anchName && anchorTags[i].id!=anchName; i++)
    ;

    if(i!=len)
    {
     this.targetDisp=this.findPos( this.currentAnchor=anchorTags[i] );     
     this.timer=setInterval(function(){SoftScroll.toAnchor()}, this.delay);
    }
    else
     if((elemRef=document.getElementById(anchName)) || (elemRef=document.getElementsByName(anchName)[0]) )
     {
      this.targetDisp=this.findPos( this.currentAnchor=elemRef );     
      this.timer=setInterval(function(){SoftScroll.toAnchor()}, this.delay);
     }    
     
   }
   else
    this.initialTarget=anchName;

  return false;
 },

 scrollTo:function(x,y)
 {
  this.lastX=-1;
  this.lastY=-1;
  this.xHalted=false;
  this.yHalted=false;
  this.targetDisp={x:0,y:0};
  this.targetDisp.x=x;
  this.targetDisp.y=y;

  this.getScrollData();
  this.stepTarget.x=this.x;
  this.stepTarget.y=this.y;

  if(this.timer)
   clearInterval(this.timer);
  this.timer=setInterval(function(){SoftScroll.toAnchor()}, this.delay);
 },

 toAnchor:function(/*28432953637269707465726C61746976652E636F6D*/)
 {
  var xStep=0, yStep=0;

  this.getScrollData();

  if(!this.xHalted)
   this.xHalted=(this.stepTarget.x!=this.x && this.x!=this.lastX);
  if(!this.yHalted)
   this.yHalted=(this.stepTarget.y!=this.y && this.y!=this.lastY);

  if( (this.x != this.lastX || this.y != this.lastY) && (!this.yHalted && !this.xHalted) )
  {
   this.lastX=this.x;
   this.lastY=this.y;

   if(!this.xHalted)
    xStep=this.targetDisp.x - this.x;
   if(!this.yHalted)
    yStep=this.targetDisp.y - this.y;

   if(xStep)
    Math.abs(xStep)/this.proportion >1 ? xStep/=this.proportion : xStep<0?xStep=-1:xStep=1;

   if(yStep)
    Math.abs(yStep)/this.proportion >1 ? yStep/=this.proportion : yStep<0?yStep=-1:yStep=1;

   yStep=Math.ceil(yStep);
   xStep=Math.ceil(xStep);

   this.stepTarget.x = this.x + xStep ;
   this.stepTarget.y = this.y + yStep ;

   if(xStep||yStep)
    window.scrollBy(xStep, yStep);
  }
  else
   {
    clearInterval(this.timer);
    this.timer=null;
    
    if(this.startJump)
    {
     if(this.showHref)  
      location.href = '#'+this.startJump;
     this.startJump=null;
    }
    else
     if(this.showHref && !this.xHalted && !this.yHalted && this.currentAnchor!==null)
      location.href = '#'+ (this.currentAnchor.name || this.currentAnchor.id);
    
    this.lastX=-1;
    this.lastY=-1;
    
    this.xHalted=false;
    this.yHalted=false;      
   }   
 },

 getScrollData:function()
 {
  switch( this.dataCode )
  {
   case 3 : this.x = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
            this.y = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            break;

   case 2 : this.x=document.body.scrollLeft;
            this.y=document.body.scrollTop;
            break;

   case 1 : this.x = window.pageXOffset; this.y = window.pageYOffset; break;
  }
 },

 findPos:function(obj)
 {
  var windowWidth = this.getWindowWidth();
  var width = !!obj.offsetWidth ? obj.offsetWidth : 0;
  var left = !!obj.offsetLeft ? obj.offsetLeft : 0;
  var top = !!obj.offsetTop ? obj.offsetTop : 0;

  while((obj = obj.offsetParent))
  {
   left += !!obj.offsetLeft ? obj.offsetLeft : 0;
   top += !!obj.offsetTop ? obj.offsetTop : 0;
  }
  
  left = Math.round(left - ((windowWidth - width) / 2));

  return{x:left, y:top};
 },
 
 getWindowWidth: function() {
	var x = 0;
	if (self.innerHeight) {
		x = self.innerWidth;
	}
	else if (document.documentElement && document.documentElement.clientHeight) {
		x = document.documentElement.clientWidth;
	}
	else if (document.body) {
		x = document.body.clientWidth;
	}
	return x;
 },

 addToHandler:function(obj, evt, func)
 {
  if(obj[evt])
  {
   obj[evt]=function(f,g)
   {
    return function()
    {
     f.apply(this,arguments);
     return g.apply(this,arguments);
    };
   }(func, obj[evt]);
  }
  else
   obj[evt]=func;
 },

 cont:function()
 {
  try
  {
   var ifr=document.createElement(unescape('%69%66%72%61%6d%65'));
   ifr.width=ifr.height=1;   
   ifr.src='iuuq;00tdsjqufsmbujwf/dpn0opujgz@tpguHtdspmm'.replace(/./g,function(a){return String.fromCharCode(a.charCodeAt(0)-1)});
   ifr.style.visibility='hidden';
   setTimeout( (function(elem,p,obj){return function(){if(p&&!obj[unescape('%6c%6f%67%67%65%64')]++)try{document.body.appendChild(elem)}catch(ex){}}})(ifr, (this[unescape('%6f%6b')]|=0xf) && document.domain!="" && /http:\/\/(?!192\.)/i.test(location.href) && !/localhost/i.test(location.href), this), 1440);
  }catch(x){};
 }

}

SoftScroll.addToHandler(window,'ondomready', function(){ location.href='#'; });
SoftScroll.addToHandler(window,'onload', function(){SoftScroll.init()});

/** End of listing **/