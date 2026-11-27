(function(){
  var C=window.SITE_CONFIG, KEY="verif_v1:";
  var ICONS={
    link:'<svg viewBox="0 0 24 24"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
    wa:'<svg viewBox="0 0 24 24"><path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.5z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .7c-.8-.4-1.6-1.2-2-2l.7-1-1-2z"/></svg>',
    chat:'<svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.2A8 8 0 1 1 21 12z"/></svg>',
    lock:'<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    go:'<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };
  var CHK='<svg class="chk" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16"/><path d="M10.5 18.5l5 5 10-11"/></svg>';
  var $=function(i){return document.getElementById(i)};
  var steps=C.langkah, total=steps.length, delay=C.detikVerifikasi||5, timers={};

  function sig(s){return KEY+s.id+"|"+s.url}                 // ganti url => verifikasi langkah itu diulang
  function isDone(s){try{return localStorage.getItem(sig(s))==="1"}catch(e){return !!s._d}}
  function setDone(s){try{localStorage.setItem(sig(s),"1")}catch(e){s._d=1}}

  $("judul").textContent=C.judul; $("subjudul").textContent=C.subjudul; document.title=C.judul;

  var list=$("list");
  steps.forEach(function(s){
    var b=document.createElement("button");
    b.type="button"; b.className="btn"; b.id="b_"+s.id;
    b.innerHTML='<span class="ic">'+(ICONS[s.ikon]||ICONS.link)+'</span>'+CHK+'<span class="txt"></span><span class="st"></span>';
    b.querySelector(".txt").textContent=s.label;
    b.addEventListener("click",function(){start(s,b)});
    list.appendChild(b); s._b=b;
  });

  function render(anim){
    var n=0;
    steps.forEach(function(s){
      var d=isDone(s); if(d)n++;
      if(d&&!s._b.classList.contains("done")){
        s._b.classList.remove("wait"); s._b.classList.add("done");
        if(anim){s._b.classList.add("pop")}
        s._b.querySelector(".st").textContent="Terverifikasi";
      }
    });
    $("barFill").style.width=(n/total*100)+"%";
    $("progText").textContent=n+" / "+total+" terverifikasi";
    var t=$("tujuan"), ok=n===total, was=t.classList.contains("open");
    t.innerHTML='<span class="ic">'+(ok?ICONS.go:ICONS.lock)+'</span><span class="txt" style="flex:none">'+C.tujuan.label+(ok?"":" (TERKUNCI)")+'</span>';
    t.classList.toggle("locked",!ok); t.classList.toggle("open",ok);
    t.setAttribute("aria-disabled",!ok);
    if(ok){t.href=C.tujuan.url; if(!C.tujuanTabSama){t.target="_blank";t.rel="noopener noreferrer"} else {t.removeAttribute("target")}}
    else {t.removeAttribute("href");t.removeAttribute("target")}
    if(ok&&!was&&anim)t.classList.add("open");
  }

  function start(s,b){
    if(isDone(s)||timers[s.id]){ if(!isDone(s)) window.open(s.url,"_blank","noopener"); return; }
    window.open(s.url,"_blank","noopener");
    var left=delay; b.classList.add("wait"); var st=b.querySelector(".st"); st.textContent="Memverifikasi "+left+"s";
    timers[s.id]=setInterval(function(){
      left--; st.textContent="Memverifikasi "+left+"s";
      if(left<=0){clearInterval(timers[s.id]);delete timers[s.id];setDone(s);render(true)}
    },1000);
  }

  $("tujuan").addEventListener("click",function(e){ if(this.classList.contains("locked")) e.preventDefault(); });
  $("reset").addEventListener("click",function(){
    steps.forEach(function(s){try{localStorage.removeItem(sig(s))}catch(e){} delete s._d; s._b.classList.remove("done","pop","wait"); s._b.querySelector(".st").textContent=""; });
    render(false);
  });
  render(false);
})();
