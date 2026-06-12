
const SHOP='https://store.benesse.com.tw/pages/mirafeel';
const TRIAL_PACK='https://store.benesse.com.tw/products/mirafeel%E9%AB%94%E9%A9%97%E5%8C%85-1';
function openShop(){window.open(SHOP,'_blank')}
window.addEventListener('scroll',()=>{const max=document.body.scrollHeight-innerHeight;document.getElementById('pb').style.width=Math.min(scrollY/max*100,100)+'%';document.getElementById('nav').classList.toggle('scrolled',scrollY>30);document.getElementById('topBtn').classList.toggle('show',scrollY>520)},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('on')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const solutionHappyImg='images/image_29_a7cf5da746.png';
const pains=[
{emoji:'🌀😭',title:'寶寶扭來扭去，尿布根本包不好',grumble:'「拜託先躺好 10 秒就好！」',label:'Mirafeel 來幫忙',backTitle:'寶寶不躺著，爸媽也好包',sol:'可以像褲型尿布一樣直接拉上；需要微調時，也能打開黏貼處重新調整。寶寶不乖乖躺著時，爸媽也能比較好包。',color:'#ff8db5'},
{emoji:'🌙😵‍💫',title:'半夜漏尿，爸媽睡得好不安穩',grumble:'「早上起來不要又濕一片吧……」',label:'乾爽感交給 Mirafeel',backTitle:'把半夜巡邏變少一點',sol:'Thin-Dry 超薄芯體高效吸收、不回滲。減少悶熱感，更貼合寶寶身形，減少外漏狀況。',color:'#69b8f7'},
{emoji:'🥺🩹',title:'腰腿紅紅的，看了真的好心疼',grumble:'「是不是太緊？可是換大又怕漏。」',label:'貼合感交給 Mirafeel',backTitle:'溫柔包住小肚肚與腿腿',sol:'柔軟百褶腰圍搭配可調整黏貼設計，腰圍、腿圍更貼合，降低卡卡勒勒的感覺；日本音波科技製成，零膠水設計更柔軟舒適。',color:'#48c7bd'},
{emoji:'📏😟',title:'腰圍有點緊，不確定要不要換大？',grumble:'「剩下的尿布還很多，換尺寸好像又有點太早。」',label:'尺寸尷尬交給 Mirafeel',backTitle:'告別尺寸尷尬期',sol:'Mirafeel 是可調整的褲型尿布，腰圍、腿圍都能自由調整，寶寶胖瘦都可再調。',color:'#ffd84f'}];
const flipGrid=document.getElementById('flipGrid');
if(flipGrid){pains.forEach(p=>{const card=document.createElement('button');card.className='flip-card';card.style.setProperty('--blob',p.color);card.innerHTML=`<div class="flip-inner"><div class="flip-front"><div><div class="flip-emoji">${p.emoji}</div><h3 class="flip-title">${p.title}</h3><p class="flip-grumble">${p.grumble}</p></div><span class="find-btn">找解方</span></div><div class="flip-back"><div><div class="solution-label">${p.label}</div><h3>${p.backTitle}</h3><p>${p.sol}</p></div><img class="solution-img" src="${solutionHappyImg}" alt="爸媽覺得安心的插圖"><span class="find-btn">再看一次</span></div></div>`;card.onclick=()=>{card.classList.toggle('flipped');spark(card)};flipGrid.appendChild(card)})};
const details=[
{img:'images/image_11_7f1919b12b.png',c:'#59B5E8',title:'Thin-Dry 超薄芯體',text:'傳統紙尿布 1/6 厚度、3 倍吸收速度，尿尿被快速吸走，寶寶活動時更輕盈，也減少濕悶不舒服。'},
{img:'images/image_30_7435d85ac3.png',c:'#44CBBF',title:'超聲波百褶腰圍',text:'零膠水更柔軟，腰圍像小雲朵一樣包覆寶寶，伸縮貼合，也比較不容易留下勒痕。'},
{img:'images/image_31_caec17fcf6.png',c:'#9AD9FF',title:'3D 立體表層',text:'極細纖維做出立體觸感，減少與寶寶肌膚摩擦，就像替屁屁鋪上一層柔柔保護墊。'},
{img:'images/image_32_3aa5cd3f10.png',c:'#FFB02E',title:'穿上後不怕反覆調整',text:'腰臀腿貼合，柔軟防漏；如果一開始貼得不剛好，也能再調整，不用一次就完美。'},
{img:'images/image_33_7639218b76.png',c:'#FF7BA8',title:'「玩」美設計',text:'知名插畫師西淑以自然為主題設計花色，不同尺寸有不同圖案，讓換尿布也多一點可愛心情。'}];

const grid=document.getElementById('detailGrid'),dImg=document.getElementById('detailImg'),dTitle=document.getElementById('detailTitle'),dText=document.getElementById('detailText'),dOpen=document.getElementById('detailOpen');
dOpen.classList.remove('show');
details.forEach((d,i)=>{const card=document.createElement('article');card.className='detail-card';card.style.setProperty('--c',d.c);card.innerHTML=`<img class="circle-img" src="${d.img}" alt="${d.title}"><h3>${d.title}</h3><button class="plus" type="button" aria-label="查看${d.title}詳細內容">+</button>`;card.querySelector('.plus').onclick=(ev)=>{ev.stopPropagation();document.querySelectorAll('.detail-card').forEach(x=>x.classList.remove('active'));card.classList.add('active');dImg.src=d.img;dTitle.textContent=d.title;dText.textContent=d.text;dOpen.classList.add('show','on');dOpen.scrollIntoView({behavior:'smooth',block:'nearest'});spark(card)};grid.appendChild(card)});
const sizeData=[
{label:'4–5kg',size:'S',note:'建議可先看 S 號。第一次使用 Mirafeel，可先購買體驗包試用。',trial:true,link:TRIAL_PACK},
{label:'6–8kg',size:'S / M',note:'S 與 M 都在可考慮範圍。身形偏小可先看 S；腿圍較肉或接近 8kg，可試 M。',trial:true,link:TRIAL_PACK},
{label:'9–11kg',size:'M / L',note:'M 與 L 都在可考慮範圍。若 M 穿起來腰腿剛好可維持；若有緊繃感可試 L。',trial:true,link:TRIAL_PACK},
{label:'12–14kg',size:'L / XL',note:'L 與 XL 都在可考慮範圍。可觀察腰圍和大腿根部是否有明顯勒痕，再決定是否往上換。',trial:true,link:TRIAL_PACK},
{label:'15–17kg',size:'XL / XXL',note:'XL 與 XXL 都在可考慮範圍。若 XL 穿起來偏緊、活動量大，可往 XXL 評估。',trial:true,link:TRIAL_PACK},
{label:'18–28kg',size:'XXL',note:'建議可看 XXL 號。若寶寶體型偏瘦，也可依腰圍、大腿貼合度微調。',trial:true,link:TRIAL_PACK}
];
const wo=document.getElementById('weightOptions'),sr=document.getElementById('sizeResult'),sl=document.getElementById('sizeLabel'),sn=document.getElementById('sizeNote'),tb=document.getElementById('trialBtn');
sizeData.forEach((s,i)=>{const btn=document.createElement('button');btn.className='weight-btn';btn.textContent=s.label;btn.onclick=()=>{document.querySelectorAll('.weight-btn').forEach(x=>x.classList.remove('active'));btn.classList.add('active');sl.textContent=s.size;sn.textContent=s.note;tb.textContent='購買體驗包';tb.href=s.link;sr.classList.add('show');spark(btn)};wo.appendChild(btn)});
const reviews=[
{tag:'#柔軟可愛',text:'「我覺得這尿布好柔軟，外型也超可愛，有點相見恨晚。」',src:'BabyHome 討論區',url:'https://forum.babyhome.com.tw/topic/5048402'},
{tag:'#吸收透氣',text:'「吸收力跟透氣度都是水準之上，日系尿布的品質基本上完全不用懷疑。」',src:'Dcard 親子板',url:'https://www.dcard.tw/f/parentchild/p/258379476'},
{tag:'#可調腰圍',text:'「雖然是褲型尿布，但穿上後可以像黏貼型尿布再稍微調整一下腰圍。」',src:'Dcard 親子板',url:'https://www.dcard.tw/f/parentchild/p/258415852'},
{tag:'#男寶友善',text:'「我覺得男寶友善，前檔是有加長的～趴著睡也不怕！」',src:'Dcard 親子板',url:'https://www.dcard.tw/f/parentchild/p/258450944'},
{tag:'#好動寶寶',text:'「如果家裡寶寶跟胡蘿蔔一樣很好動的話，真的很推薦這款尿布哦！」',src:'Dcard 親子板',url:'https://www.dcard.tw/f/parentchild/p/258503044'},
{tag:'#二合一方便',text:'「穿起來像小褲褲一樣方便，但又可以像黏貼型一樣調整鬆緊。」',src:'Threads 分享',url:'https://www.threads.com/@man.tou0909/post/DIJELT6JykM/mirafeel'}
];
const rg=document.getElementById('reviewGrid');reviews.forEach(r=>{const div=document.createElement('div');div.className='review-card';div.innerHTML=`<div class="stars">★★★★★</div><div class="rtag">${r.tag}</div><p class="rtext">${r.text}</p><div class="rsource"><span>${r.src}</span></div>`;rg.appendChild(div)});
const faqs=[
{q:'Mirafeel 是褲型尿布，還是黏貼式尿布？',a:'它是 2 合 1 巧貼褲：可以像褲型一樣拉上，也可以像黏貼型一樣打開調整。'},
{q:'什麼時候需要換下一個尺寸？',a:'可先依寶寶體重選擇，再觀察腰圍、大腿是否有勒痕、是否容易外漏；若卡在交界，建議先購買體驗包試用。'},
{q:'Mirafeel 巧貼褲在哪裡生產？',a:'Mirafeel 為日本設計・日本製造。'},
{q:'孩子有過敏體質可以用嗎？',a:'若孩子皮膚較敏感，建議先少量試用並觀察；如有紅腫、搔癢等不適，應先停止使用並諮詢專業人員。'},
{q:'尿布要怎麼保存？',a:'建議放在乾燥陰涼處，避免高溫、潮濕與陽光直射；開封後也請盡量保持清潔乾爽。'}];
const fl=document.getElementById('faqList');faqs.forEach((f,i)=>{const item=document.createElement('div');item.className='faq-item'+(i==0?' open':'');item.innerHTML=`<button class="faq-q">${f.q}<span>+</span></button><div class="faq-a"><p>${f.a}</p></div>`;item.querySelector('.faq-q').onclick=()=>item.classList.toggle('open');fl.appendChild(item)});

const openVideoBtn=document.getElementById('openVideoBtn');
const ytModal=document.getElementById('ytModal');
const ytFrame=document.getElementById('ytFrame');
const ytClose=document.getElementById('ytClose');
function openVideo(){ytFrame.src='https://www.youtube.com/embed/di-EwyPEbJI?si=4RDJCUR_u-xUeFRO&autoplay=1';ytModal.classList.add('open');ytModal.setAttribute('aria-hidden','false')}
function closeVideo(){ytModal.classList.remove('open');ytModal.setAttribute('aria-hidden','true');ytFrame.src=''}
if(openVideoBtn)openVideoBtn.addEventListener('click',openVideo);
if(ytClose)ytClose.addEventListener('click',closeVideo);
if(ytModal)ytModal.addEventListener('click',e=>{if(e.target===ytModal)closeVideo()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeVideo()});
function spark(target){const rect=target.getBoundingClientRect();const x=rect.left+rect.width/2,y=rect.top+rect.height/2;['🌈','✨','💛','🩵','🌸'].forEach((s,i)=>{const el=document.createElement('div');el.className='burst';el.textContent=s;const a=Math.random()*Math.PI*2,d=40+Math.random()*55;el.style.left=x+'px';el.style.top=y+'px';el.style.setProperty('--dx',Math.cos(a)*d+'px');el.style.setProperty('--dy',Math.sin(a)*d+'px');document.body.appendChild(el);setTimeout(()=>el.remove(),700)})}
document.addEventListener('click',e=>{if(e.target.closest('button,.btn'))return; const el=document.createElement('div');el.className='burst';el.textContent='✨';el.style.left=e.clientX+'px';el.style.top=e.clientY+'px';el.style.setProperty('--dx',(Math.random()*80-40)+'px');el.style.setProperty('--dy',(-40-Math.random()*50)+'px');document.body.appendChild(el);setTimeout(()=>el.remove(),700)});


// v42 ideal diaper checklist animation
(function(){
  const section=document.getElementById('idealNeeds');
  if(!section) return;
  const play=()=>section.classList.add('play');
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){play();io.disconnect();}});
    },{threshold:.35});
    io.observe(section);
  }else{
    play();
  }
})();

// v7 section arrows + sequential red WIN animation
(function(){
  const flow=['top','fear','idealNeeds','realScenes','details','wearing','compare','quality','reviews','faq','size','cta'];
  flow.forEach((id,i)=>{
    if(i===flow.length-1) return;
    const sec=document.getElementById(id);
    const next=document.getElementById(flow[i+1]);
    if(!sec||!next) return;
    if(sec.querySelector('.section-down')) return;
    const btn=document.createElement('button');
    btn.className='section-down';
    btn.type='button';
    btn.setAttribute('aria-label','前往下一區');
    btn.innerHTML='↓';
    btn.addEventListener('click',()=>next.scrollIntoView({behavior:'smooth'}));
    sec.appendChild(btn);
  });
})();
(function(){
  const comp=document.getElementById('compare');
  if(!comp) return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        comp.querySelectorAll('.win').forEach((w,i)=>setTimeout(()=>w.classList.add('pop'),i*220));
        obs.disconnect();
      }
    });
  },{threshold:.38});
  obs.observe(comp);
})();
(function(){
  const hero=document.querySelector('.hero-card');
  if(!hero) return;
  hero.addEventListener('mousemove',e=>{
    const r=hero.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    hero.style.transform=`perspective(1200px) rotateY(${x*3}deg) rotateX(${-y*3}deg)`;
  });
  hero.addEventListener('mouseleave',()=>{hero.style.transform='';});
})();


// Standing wear step modal
(function(){
  const card = document.getElementById('standStepCard');
  const modal = document.getElementById('standStepModal');
  const close = document.getElementById('standStepClose');
  if(!card || !modal || !close) return;
  const open = () => { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; };
  const hide = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
  card.addEventListener('click', open);
  card.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); }});
  close.addEventListener('click', hide);
  modal.addEventListener('click', e => { if(e.target === modal) hide(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape' && modal.classList.contains('open')) hide(); });
})();


// Lying wear step modal
(function(){
  const card = document.getElementById('lieStepCard');
  const modal = document.getElementById('lieStepModal');
  const close = document.getElementById('lieStepClose');
  if(!card || !modal || !close) return;
  const open = () => { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; };
  const hide = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
  card.addEventListener('click', open);
  card.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); open(); }});
  close.addEventListener('click', hide);
  modal.addEventListener('click', e => { if(e.target === modal) hide(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape' && modal.classList.contains('open')) hide(); });
})();



// v16 real-scenes batch carousel
(function(){
  const carousel=document.getElementById('sceneGallery');
  const track=document.getElementById('sceneTrack');
  if(!carousel||!track||carousel.classList.contains('floating-slider')) return;
  const pages=[...carousel.querySelectorAll('.scene-page')];
  const dots=[...carousel.querySelectorAll('.scene-dots span')];
  let current=0;
  function show(idx){
    current=(idx+pages.length)%pages.length;
    track.style.transform=`translateX(${-current*100}%)`;
    pages.forEach((p,i)=>p.classList.toggle('is-active',i===current));
    dots.forEach((d,i)=>d.classList.toggle('active',i===current));
  }
  document.getElementById('scenePrev')?.addEventListener('click',e=>{e.stopPropagation();show(current-1);});
  document.getElementById('sceneNext')?.addEventListener('click',e=>{e.stopPropagation();show(current+1);});
  let startX=0;
  carousel.addEventListener('pointerdown',e=>{startX=e.clientX;});
  carousel.addEventListener('pointerup',e=>{
    const dx=e.clientX-startX;
    if(Math.abs(dx)>80) show(current+(dx<0?1:-1));
  });
  show(0);
})();

// v14 gallery controls and lightbox
(function(){
  const gallery=document.getElementById('sceneGallery');
  const real=document.getElementById('realScenes');
  if(gallery && real && !gallery.classList.contains('floating-slider')){
    const left=real.querySelector('.scene-arrow.left');
    const right=real.querySelector('.scene-arrow.right');
    const step=()=>Math.min(gallery.clientWidth*.82, 660);
    if(left) left.addEventListener('click',()=>gallery.scrollBy({left:-step(),behavior:'smooth'}));
    if(right) right.addEventListener('click',()=>gallery.scrollBy({left:step(),behavior:'smooth'}));
    const modal=document.getElementById('imageModal');
    const modalImg=document.getElementById('imageModalImg');
    const modalCap=document.getElementById('imageModalCaption');
    const close=document.getElementById('imageModalClose');
    gallery.querySelectorAll('.scene-slide').forEach(slide=>{
      slide.addEventListener('click',()=>{
        const img=slide.querySelector('img');
        const title=slide.querySelector('.scene-caption b')?.textContent || img.alt || 'Mirafeel 實際穿著情境';
        modalImg.src=img.src;
        modalImg.alt=img.alt;
        modalCap.textContent=title;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden','false');
      });
    });
    function closeImage(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalImg.src='';}
    close?.addEventListener('click',closeImage);
    modal?.addEventListener('click',e=>{if(e.target===modal)closeImage();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape' && modal?.classList.contains('open'))closeImage();});
  }
})();


// v26 Hero challenge axis interaction
(function(){
  const steps=document.querySelectorAll('.challenge-step');
  const preview=document.getElementById('stagePreview');
  if(!steps.length||!preview) return;
  const data=[
    {tag:'LEVEL 1｜躺著',title:'換尿布還算和平，但服貼度很重要。',text:'寶寶多半願意躺著配合，爸媽最在意的是腰腿是否貼合、會不會漏。'},
    {tag:'LEVEL 2｜翻身',title:'一轉身，換尿布開始像比賽。',text:'剛鋪好尿布，寶寶就想翻身探索，爸媽需要更快、更好調整。'},
    {tag:'LEVEL 3｜爬行',title:'還沒穿好，寶寶已經準備出發。',text:'活動量變大後，尿布不只要好穿，也要能跟上爬行時的貼合與活動。'},
    {tag:'LEVEL 4｜站起來',title:'不想躺下時，快速穿脫就很重要。',text:'寶寶開始想站著、走來走去，爸媽更需要能站著穿、也能輕鬆調整的設計。'}
  ];
  steps.forEach((step,i)=>{
    step.addEventListener('click',()=>{
      steps.forEach(s=>s.classList.remove('active'));
      step.classList.add('active');
      preview.innerHTML=`<div class="preview-img-slot">階段插圖預留</div><div><span class="preview-tag">${data[i].tag}</span><h3>${data[i].title}</h3><p>${data[i].text}</p></div>`;
      if(typeof spark==='function') spark(step);
    });
  });
})();


var idealLogo=document.querySelector('.ideal-slogan-logo');
if(idealLogo){
  var idealLogoObserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        idealLogo.classList.add('is-pop');
        idealLogoObserver.unobserve(entry.target);
      }
    });
  },{threshold:.45});
  idealLogoObserver.observe(idealLogo);
}



(function(){
  function initHeroCarousel(){
    const hero = document.querySelector('.hero-photo-carousel-v34');
    if(!hero) return;
    const slides = Array.from(hero.querySelectorAll('.hero-v34-slide'));
    const dots = Array.from(hero.querySelectorAll('.hero-v34-dots button'));
    const prev = hero.querySelector('.hero-v34-prev');
    const next = hero.querySelector('.hero-v34-next');
    const title = hero.querySelector('#heroV34Title');
    const sub = hero.querySelector('#heroV34Sub');
    let index = 0;
    let timer = null;
    function htmlText(value){ return (value || '').split('|').join('<br/>'); }
    function show(i){
      if(!slides.length) return;
      index = (i + slides.length) % slides.length;
      slides.forEach((slide,n)=>slide.classList.toggle('active', n === index));
      dots.forEach((dot,n)=>dot.classList.toggle('active', n === index));
      const active = slides[index];
      if(title) title.innerHTML = htmlText(active.dataset.title);
      if(sub) sub.innerHTML = htmlText(active.dataset.sub);
      const content = hero.querySelector('.hero-v34-content');
      if(content){
        content.classList.remove('hero-copy-animate');
        void content.offsetWidth;
        content.classList.add('hero-copy-animate');
      }
    }
    function stop(){ if(timer){ clearInterval(timer); timer = null; } }
    function start(){ stop(); timer = setInterval(()=>show(index + 1), 5000); }
    prev && prev.addEventListener('click', ()=>{ show(index - 1); start(); });
    next && next.addEventListener('click', ()=>{ show(index + 1); start(); });
    dots.forEach((dot,n)=>dot.addEventListener('click', ()=>{ show(n); start(); }));
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
    show(0); start();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initHeroCarousel);
  else initHeroCarousel();
})();

var idealLogo=document.querySelector('.ideal-slogan-logo');
if(idealLogo){
  var idealLogoObserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        idealLogo.classList.add('is-pop');
        idealLogoObserver.unobserve(entry.target);
      }
    });
  },{threshold:.45});
  idealLogoObserver.observe(idealLogo);
}



(function(){
  try{ if('scrollRestoration' in history) history.scrollRestoration='manual'; }catch(e){}
  function forceTop(){
    if(!location.hash || location.hash === '#top'){
      window.scrollTo(0,0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }
  forceTop();
  window.addEventListener('pageshow', function(){ forceTop(); setTimeout(forceTop, 30); setTimeout(forceTop, 180); });
  window.addEventListener('load', function(){ forceTop(); setTimeout(forceTop, 50); });
})();

var idealLogo=document.querySelector('.ideal-slogan-logo');
if(idealLogo){
  var idealLogoObserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        idealLogo.classList.add('is-pop');
        idealLogoObserver.unobserve(entry.target);
      }
    });
  },{threshold:.45});
  idealLogoObserver.observe(idealLogo);
}



// v50 floating actual-wearing carousel
(function(){
  const gallery=document.getElementById('sceneGallery');
  if(!gallery || !gallery.classList.contains('floating-slider')) return;
  const slides=[...gallery.querySelectorAll('.float-slide')];
  const dots=[...gallery.querySelectorAll('.float-dots button')];
  const modal=document.getElementById('imageModal');
  const modalImg=document.getElementById('imageModalImg');
  const modalCap=document.getElementById('imageModalCaption');
  const modalClose=document.getElementById('imageModalClose');
  let current=0;
  let timer=null;
  function render(){
    const len=slides.length;
    slides.forEach((slide,i)=>{
      slide.classList.remove('is-active','is-prev','is-next','is-far');
      if(i===current) slide.classList.add('is-active');
      else if(i===(current-1+len)%len) slide.classList.add('is-prev');
      else if(i===(current+1)%len) slide.classList.add('is-next');
      else slide.classList.add('is-far');
    });
    dots.forEach((dot,i)=>dot.classList.toggle('active',i===current));
  }
  function show(idx){current=(idx+slides.length)%slides.length;render();}
  function stop(){if(timer){clearInterval(timer);timer=null;}}
  function start(){stop();timer=setInterval(()=>show(current+1),4800);}
  function openImage(slide){
    if(!modal || !modalImg || !modalCap) return;
    const img=slide.querySelector('img');
    const title=slide.querySelector('.float-copy b')?.textContent?.trim() || img.alt || 'Mirafeel 實際穿著情境';
    const longSubs={
      '二合一更換方便':'寶寶願意躺著時，可以像黏貼型一樣打開調整；想站著、走來走去時，也能像褲型尿布一樣快速拉上，讓換尿布不用只剩一種方式。',
      '尺寸可調更貼合':'腰圍、腿圍都能依照寶寶身形微調，不用只靠固定尺寸硬撐。遇到尺寸轉換期，也能更容易找到剛剛好的貼合感。',
      '日本製品質安心':'來自日本的設計與製造品質，從材質、觸感到穿著細節都更貼近寶寶日常，也讓爸媽在每一次更換時更放心。',
      '高效吸收與乾爽':'Thin-Dry 超薄芯體能快速吸收並減少回滲，活動量變大時也能維持乾爽舒適，陪寶寶自在爬、站、走。'
    };
    const sub=longSubs[title] || slide.querySelector('.float-copy p')?.textContent?.trim() || '';
    modalImg.src=img.src;
    modalImg.alt=img.alt || title;
    modalCap.innerHTML=`<h3 class="modal-title">${title}</h3><p class="modal-sub">${sub}</p>`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    stop();
  }
  function closeImage(){
    if(!modal || !modalImg) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    modalImg.src='';
    start();
  }
  gallery.querySelector('#scenePrev')?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();show(current-1);start();});
  gallery.querySelector('#sceneNext')?.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();show(current+1);start();});
  dots.forEach((dot,i)=>dot.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();show(i);start();}));
  slides.forEach((slide,i)=>{
    slide.addEventListener('click',e=>{
      e.preventDefault();
      e.stopPropagation();
      if(i!==current){show(i);start();return;}
      openImage(slide);
    });
    slide.addEventListener('keydown',e=>{
      if(e.key==='Enter' || e.key===' '){e.preventDefault(); i===current ? openImage(slide) : show(i);}
    });
  });
  modalClose?.addEventListener('click',closeImage);
  modal?.addEventListener('click',e=>{if(e.target===modal) closeImage();});
  document.addEventListener('keydown',e=>{
    if(modal?.classList.contains('open') && e.key==='Escape') closeImage();
    else if(document.getElementById('realScenes')?.matches(':hover')){
      if(e.key==='ArrowLeft'){show(current-1);start();}
      if(e.key==='ArrowRight'){show(current+1);start();}
    }
  });
  let startX=0;
  gallery.addEventListener('pointerdown',e=>{startX=e.clientX;stop();});
  gallery.addEventListener('pointerup',e=>{const dx=e.clientX-startX;if(Math.abs(dx)>70) show(current+(dx<0?1:-1));start();});
  render();
  start();
})();
