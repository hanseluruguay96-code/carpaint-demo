(function(){
  var f=document.getElementById('f'),err=document.getElementById('err');
  f.addEventListener('submit',function(e){
    e.preventDefault();var d=new FormData(f),n=(d.get('nombre')||'').trim();
    if(!n){err.hidden=false;f.nombre.focus();return;} err.hidden=true;
    var t='Hola CarPaint, soy '+n+'.\nNecesito: '+d.get('servicio');
    var a=(d.get('auto')||'').trim(),m=(d.get('msg')||'').trim();
    if(a)t+='\nAuto: '+a; if(m)t+='\n'+m; t+='\n¿Me pasan presupuesto?';
    window.open('https://wa.me/59894819357?text='+encodeURIComponent(t),'_blank','noopener');
  });
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{rootMargin:'0px 0px -8% 0px'});els.forEach(function(el){io.observe(el);});}
  else els.forEach(function(el){el.classList.add('in');});
})();
