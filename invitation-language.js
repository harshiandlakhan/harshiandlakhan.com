(() => {
 const copy = new Map([
  ['Harshita & Lakhan · Together, a beautiful beginning','హర్షిత, లఖన్ · కలిసి ఒక అందమైన ఆరంభం'],
  ['Harshita and Lakhan home','హర్షిత, లఖన్ ఆహ్వానం'],
  ['Main navigation','ఆహ్వాన విభాగాలు'],['Invitation','ఆహ్వానం'],['Celebrations','వేడుకలు'],['Venue','వేదిక'],['Stay','బస'],['RSVP','హాజరు'],
  ['An invitation, with love · Design preview','ప్రేమతో ఆహ్వానం · నమూనా'],
  ['Open our wedding invitation','మా వివాహ ఆహ్వానాన్ని తెరవండి'],['The wedding of','వివాహ మహోత్సవ ఆహ్వానం'],
  ['Harshita & Lakhan','లఖన్ మరియు హర్షిత'],['Open our invitation','మా ఆహ్వానాన్ని తెరవండి'],
  ['Click or scroll to open','తెరవడానికి క్లిక్ చేయండి లేదా స్క్రోల్ చేయండి'],['Read the invitation ↓','ఆహ్వానాన్ని చదవండి ↓'],
  ['Illustrated saree and dhoti, brass lamps, flowers and banana leaves','చీర, పంచె, ఇత్తడి దీపాలు, పూలు, అరటి ఆకుల చిత్రణ'],
  ['Together','కలిసి'],['A beautiful beginning','ఒక అందమైన ఆరంభం'],['With love, we invite you to celebrate','మా వివాహ వేడుకకు ప్రేమతో ఆహ్వానిస్తున్నాము'],
  ['Harshita','హర్షిత'],['Vallamsetty','వల్లంసెట్టి'],['Lakhan Saiteja','లఖన్ సాయితేజ'],['Kamireddy','కామిరెడ్డి'],
  ['April 11, 2027 · Fairfield, California, USA','11 ఏప్రిల్ 2027 · ఫెయిర్‌ఫీల్డ్, కాలిఫోర్నియా, అమెరికా'],
  ['Scroll down to the wedding countdown','వివాహానికి మిగిలిన సమయం చూడటానికి కిందికి వెళ్లండి'],
  ['Counting down to our forever','మా వివాహానికి మిగిలిన సమయం'],['Time until our wedding','మా వివాహానికి మిగిలిన సమయం'],
  ['Days','రోజులు'],['Hours','గంటలు'],['Minutes','నిమిషాలు'],['Seconds','సెకన్లు'],
  ['Our forever begins today.','మా కొత్త జీవితం నేడు ప్రారంభమవుతోంది.'],['Our forever has begun.','మా కొత్త జీవితం ప్రారంభమైంది.'],
  ['April 11, 2027 · 11:30 AM','11 ఏప్రిల్ 2027 · ఉదయం 11:30'],['· Pacific Time','· పసిఫిక్ సమయం'],
  ['With the blessings of our families','మా కుటుంబాల ఆశీస్సులతో'],['Two hearts. One forever.','రెండు హృదయాలు. ఒక్కటైన జీవితం.'],
  ['With full hearts and the love of our families, we invite you to be a part of our wedding celebration.','మా కుటుంబాల ప్రేమాభిమానాలతో మా వివాహ మహోత్సవానికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము.'],
  ['Harshita’s family','హర్షిత కుటుంబం'],['Srinivasa Rao Vallamsetty','శ్రీనివాస రావు వల్లంసెట్టి'],['Pavani Vallamsetty','పావని వల్లంసెట్టి'],
  ['Lakhan’s family','లఖన్ సాయితేజ కుటుంబం'],['Jeevan Reddy Kamireddy','జీవన్ రెడ్డి కామిరెడ్డి'],['Aparna Kamireddy','అపర్ణ కామిరెడ్డి'],
  ['Harshita and Lakhan illustrated on a low platform beneath a jasmine-draped mandap, with California vineyard hills behind them','కాలిఫోర్నియా ద్రాక్షతోటల నేపథ్యంలో మల్లెపూల మండపంలో హర్షిత, లఖన్'],
  ['Join us for our','మీకు మా ఆహ్వానం'],['Wedding','వివాహ మహోత్సవం'],['April 11, 2027','11 ఏప్రిల్ 2027'],
  ['8:30 AM–12:30 PM · Muhurtham 11:30 AM','సుముహూర్తం ఉదయం 11:30 గంటలకు'],
  ['Suisun Valley Inn','సూసూన్ వ్యాలీ ఇన్'],['Fairfield, California, USA','ఫెయిర్‌ఫీల్డ్, కాలిఫోర్నియా, అమెరికా'],
  ['4400 Suisun Valley Rd, Fairfield, CA, USA','4400 సూసూన్ వ్యాలీ రోడ్, ఫెయిర్‌ఫీల్డ్, కాలిఫోర్నియా, అమెరికా'],
  ['Three days of love & celebration','మూడు రోజుల ఆనందోత్సవం'],['Our Celebrations','మా వివాహ వేడుకలు'],
  ['April 9–11, 2027 · Suisun Valley Inn','9–11 ఏప్రిల్ 2027 · సూసూన్ వ్యాలీ ఇన్'],
  ['Friday · April 9','శుక్రవారం · ఏప్రిల్ 9'],['Sangeet','సంగీత్'],['4:00–10:00 PM','సాయంత్రం 4:00 – రాత్రి 10:00'],
  ['Saturday · April 10','శనివారం · ఏప్రిల్ 10'],['A day of traditions','సాంప్రదాయ వేడుకలు'],
  ['Pellikuthuru','పెళ్లికూతురు'],['9:00 AM','ఉదయం 9:00'],['Pellikoduku','పెళ్లికొడుకు'],['10:00 AM','ఉదయం 10:00'],
  ['Engagement','నిశ్చితార్థం'],['11:00 AM','ఉదయం 11:00'],['Haldi','హల్దీ'],['2:00–4:00 PM','మధ్యాహ్నం 2:00–4:00'],
  ['Sunday · April 11','ఆదివారం · ఏప్రిల్ 11'],['Muhurtham at 11:30 AM','సుముహూర్తం ఉదయం 11:30 గంటలకు'],
  ['Suggested attire','దుస్తుల సూచనలు'],
  ['Colorful evening wear. Dress up and come ready to dance.','సాయంత్రపు వేడుకకు రంగురంగుల దుస్తులు. చక్కగా ముస్తాబై, నృత్యం చేయడానికి సిద్ధంగా రండి.'],
  ['Yellow or marigold tones.','పసుపు లేదా బంతిపూల రంగు దుస్తులు.'],
  ['Traditional Indian attire or formal wear.','భారతీయ సంప్రదాయ దుస్తులు లేదా ఫార్మల్ దుస్తులు.'],
  ['All celebrations take place at Suisun Valley Inn.','అన్ని వేడుకలు సూసూన్ వ్యాలీ ఇన్‌లో జరుగుతాయి.'],
  ['All times are local to California (Pacific Time).','సమయాలన్నీ కాలిఫోర్నియా పసిఫిక్ సమయం ప్రకారం.'],
  ['Add to Google Calendar','గూగుల్ క్యాలెండర్‌కు జోడించండి'],['Add to Apple Calendar','ఆపిల్ క్యాలెండర్‌కు జోడించండి'],
  ['Apr 9 · 4–10 PM ↗','ఏప్రిల్ 9 · సాయంత్రం 4 నుంచి రాత్రి 10 వరకు ↗'],
  ['Engagement, Pellikoduku & Pellikuthuru','నిశ్చితార్థం, పెళ్లికొడుకు, పెళ్లికూతురు'],
  ['Apr 10 · 9 AM–12 PM ↗','ఏప్రిల్ 10 · ఉదయం 9 నుంచి మధ్యాహ్నం 12 వరకు ↗'],
  ['Apr 10 · 2–4 PM ↗','ఏప్రిల్ 10 · మధ్యాహ్నం 2–4 ↗'],
  ['Apr 11 · 8:30 AM–12:30 PM ↗','ఏప్రిల్ 11 · సుముహూర్తం ఉదయం 11:30 ↗'],
  ['APR','ఏప్రి'],['Download .ics','.ics దస్త్రాన్ని డౌన్‌లోడ్ చేయండి'],
  ['Google Calendar: choose each event. Apple Calendar / .ics: all events.','గూగుల్ క్యాలెండర్‌లో ప్రతి వేడుకను విడిగా ఎంచుకోండి. ఆపిల్ క్యాలెండర్ లేదా .ics ద్వారా అన్ని వేడుకలను జోడించండి.'],
  ['One beautiful place, every celebration','అన్ని వేడుకలకు ఒకే వేదిక'],['Meet us here','వివాహ వేదిక'],
  ['4400 Suisun Valley Rd','4400 సూసూన్ వ్యాలీ రోడ్'],['Fairfield, CA 94534','ఫెయిర్‌ఫీల్డ్, కాలిఫోర్నియా 94534'],
  ['Get directions ↗','దారి చూడండి ↗'],['Google Maps: Suisun Valley Inn, Fairfield','గూగుల్ మ్యాప్స్ · సూసూన్ వ్యాలీ ఇన్, ఫెయిర్‌ఫీల్డ్'],
  ['Accommodations','బస సదుపాయాలు'],
  ['A few nearby places to stay, all within a 10-minute drive of Suisun Valley Inn.','సూసూన్ వ్యాలీ ఇన్ నుంచి కారులో 10 నిమిషాలలోపు చేరుకోగల బస సదుపాయాలు.'],
  ['Residence Inn by Marriott Fairfield Napa','రెసిడెన్స్ ఇన్ బై మారియట్ ఫెయిర్‌ఫీల్డ్ నాపా'],
  ['La Quinta Inn & Suites by Wyndham Fairfield – Napa Valley','లా క్వింటా ఇన్ అండ్ సూట్స్ బై విండమ్ ఫెయిర్‌ఫీల్డ్ – నాపా వ్యాలీ'],
  ['Staybridge Suites Fairfield Napa Valley Area','స్టేబ్రిడ్జ్ సూట్స్ ఫెయిర్‌ఫీల్డ్ నాపా వ్యాలీ'],
  ['Homewood Suites by Hilton Fairfield–Napa Valley Area','హోమ్‌వుడ్ సూట్స్ బై హిల్టన్ ఫెయిర్‌ఫీల్డ్ – నాపా వ్యాలీ'],
  ['These links are set to check in April 9 and check out April 11.','ఈ లింకుల్లో ఏప్రిల్ 9న చెక్‌ఇన్, ఏప్రిల్ 11న చెక్‌అవుట్ తేదీలు ఎంచుకోబడ్డాయి.'],
  ['The celebration is sweeter with you','మీ రాకతో మా వేడుక మరింత ఆనందమయం'],['Save a little joy for us.','మీ హాజరును తెలియజేయండి'],
  ['Join us for one day or all three. We’d love to celebrate with you.','ఒక రోజు లేదా మూడు రోజులూ మాతో కలిసి వేడుకల్లో పాల్గొనండి.'],
  ['RSVP or manage your household’s response','మీ కుటుంబం తరఫున హాజరు నమోదు చేయండి లేదా సవరించండి'],
  ['Need a hand?','సహాయం కావాలా?'],['Email us','మాకు ఈమెయిల్ చేయండి'],['Open again ↑','మళ్లీ తెరవండి ↑'],
  ['April 9–11, 2027 · Suisun Valley Inn · Fairfield, California, USA','9–11 ఏప్రిల్ 2027 · సూసూన్ వ్యాలీ ఇన్ · ఫెయిర్‌ఫీల్డ్, కాలిఫోర్నియా, అమెరికా'],
 ]);
 const textSources = new WeakMap();
 const attributeSources = new WeakMap();
 const attributes = ['aria-label','alt','title','placeholder'];
 let language = 'en';
 let observer;
 function translate(text) {
  if(language !== 'te') return text;
  const key = text.trim();
  const localized = copy.get(key);
  return localized === undefined ? text : text.replace(key,localized);
 }
 function render() {
  observer?.disconnect();
  document.documentElement.lang = language;
  const walker = document.createTreeWalker(document.documentElement,NodeFilter.SHOW_TEXT);
  for(let node=walker.nextNode();node;node=walker.nextNode()){
   if(node.parentElement?.closest('script,style,[data-language-switch]'))continue;
   const previous = textSources.get(node);
   const source = previous?.result === node.data ? previous.source : node.data;
   const result = translate(source);
   if(result !== node.data) node.data = result;
   if(result !== source || previous) textSources.set(node,{source,result});
  }
  for(const node of document.querySelectorAll('[aria-label],[alt],[title],[placeholder]')){
   if(node.closest('[data-language-switch]'))continue;
   const sources = attributeSources.get(node) || {};
   for(const attr of attributes){
    if(!node.hasAttribute(attr))continue;
    const value = node.getAttribute(attr);
    const previous = sources[attr];
    const source = previous?.result === value ? previous.source : value;
    const result = translate(source);
    if(result !== value) node.setAttribute(attr,result);
    sources[attr] = {source,result};
   }
   attributeSources.set(node,sources);
  }
  observer?.observe(document.body,{childList:true,characterData:true,subtree:true});
 }
 const toggle = document.querySelector('[data-language-switch] button');
 const bride = [...document.querySelectorAll('[data-language-bride]')];
 const groom = [...document.querySelectorAll('[data-language-groom]')];
 const separator = document.querySelector('.couple-copy .amp');
 const date = document.querySelector('.couple-copy .date');

 function syncRsvpLanguage() {
  rsvpFrame.contentWindow?.postMessage({type:'wedding-rsvp-language',language},rsvpOrigin);
 }

 function setLanguage(next) {
  language = next === 'te' ? 'te' : 'en';
  separator.before(...(language === 'te' ? groom : bride));
  date.before(...(language === 'te' ? bride : groom));
  toggle.setAttribute('aria-checked',String(language === 'te'));
  const map = document.querySelector('.venue-map');
  const url = new URL(map.src);
  if(language === 'te') url.searchParams.set('hl','te');
  else url.searchParams.delete('hl');
  if(map.src !== url.href) map.src = url.href;
  render();
  syncRsvpLanguage();
 }

 observer = new MutationObserver(records => {
  if(records.some(record => !record.target.parentElement?.closest('[data-countdown],[data-language-switch]') && !record.target.matches?.('[data-countdown]')))render();
 });
 rsvpFrame.addEventListener('load',syncRsvpLanguage);
 window.addEventListener('message',event=>{
  if(event.origin===rsvpOrigin&&event.source===rsvpFrame.contentWindow&&event.data?.type==='wedding-rsvp-ready')syncRsvpLanguage();
 });
 toggle.addEventListener('click',()=>{
  setLanguage(language==='en'?'te':'en');
  try { localStorage.setItem('invitation-language',language); } catch {}
 });
 let savedLanguage;
 try { savedLanguage = localStorage.getItem('invitation-language'); } catch {}
 setLanguage(new URLSearchParams(location.search).get('lang') || savedLanguage);
})();
