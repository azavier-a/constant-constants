const str_PI = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788659361533818279682303019520353018529689957736225994138912497217752834791315155748572424541506959508295331168617278558890750983817546374649393192550604009277016711390098488240128583616035637076601047101819429555961989467678374494482553797747268471040475346462080466842590694912933136770289891521047521620569660240580381501935112533824300355876402474964732639141992726042699227967823547816360093417216412199245863150302861829745557067498385054945885869269956909272107975093029553211653449872027559602364806654991198818347977535663698074265425278625518184175746728909777727938000816470600161452491921732172147723501414419735685481613611573525521334757418494684385233239073941433345477624168625189835694855620992192221842725502542568876717904946016534668049886272327917860857843838279679766814541009538837863609506800642251252051173929848960841284886269456042419652850222106611863067442786220391949450471237137869609563643719172874677646575739624138908658326459958133904780275900994657640789512694683983525957098258226205224894077267194782684826014769909026';
const str_E = '27182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274274663919320030599218174135966290435729003342952605956307381323286279434907632338298807531952510190115738341879307021540891499348841675092447614606680822648001684774118537423454424371075390777449920695517027618386062613313845830007520449338265602976067371132007093287091274437470472306969772093101416928368190255151086574637721112523897844250569536967707854499699679468644549059879316368892300987931277361782154249992295763514822082698951936680331825288693984964651058209392398294887933203625094431173012381970684161403970198376793206832823764648042953118023287825098194558153017567173613320698112509961818815930416903515988885193458072738667385894228792284998920868058257492796104841984443634632449684875602336248270419786232090021609902353043699418491463140934317381436405462531520961836908887070167683964243781405927145635490613031072085103837505101157477041718986106873969655212671546889570350354021234078498193343210681701210056278802351930332247450158539047304199577770935036604169973297250886876966403555707162268447162560798826517871341951246652010305921236677194325278675398558944896970964097545918569563802363701621120477427228364896134225164450781824423529486363721417402388934412479635743702637552944483379980161254922785092577825620926226483262779333865664816277251640191059004916449982893150566047258027786318641551956532442586982946959308019152987211725563475463964479101459040905862984967912874068705048958586717479854667757573205681288459205413340539220001137863009455606881667400169842055804033637953764520304024322566135278369511778838638744396625322498506549958862342818997077332761717839280349465014345588970719425863987727547109629537415211151368350627526023264847287039207643100595841166120545297030236472549296669381151373227536450988890313602057248176585118063036442812314965507047510254465011727211555194866850800368532281831521960037356252794495158284188294787610852639813955990067376482922443752871846245780361929819713991475644882626039033814418232';
const str_PHI = '16180339887498948482045868343656381177203091798057628621354486227052604628189024497072072041893911374847540880753868917521266338622235369317931800607667263544333890865959395829056383226613199282902678806752087668925017116962070322210432162695486262963136144381497587012203408058879544547492461856953648644492410443207713449470495658467885098743394422125448770664780915884607499887124007652170575179788341662562494075890697040002812104276217711177780531531714101170466659914669798731761356006708748071013179523689427521948435305678300228785699782977834784587822891109762500302696156170025046433824377648610283831268330372429267526311653392473167111211588186385133162038400522216579128667529465490681131715993432359734949850904094762132229810172610705961164562990981629055520852479035240602017279974717534277759277862561943208275051312181562855122248093947123414517022373580577278616008688382952304592647878017889921990270776903895321968198615143780314997411069260886742962267575605231727775203536139362107673893764556060605921658946675955190040055590895022953094231248235521221241544400647034056573479766397239494994658457887303962309037503399385621024236902513868041457799569812244574717803417312645322041639723213404444948730231541767689375210306873788034417009395440962795589867872320951242689355730970450959568440175551988192180206405290551893494759260073485228210108819464454422231889131929468962200230144377026992300780308526118075451928877050210968424936271359251876077788466583615023891349333312231053392321362431926372891067050339928226526355620902979864247275977256550861548754357482647181414512700060238901620777322449943530889990950168032811219432048196438767586331479857191139781539780747615077221175082694586393204565209896985556781410696837288405874610337810544439094368358358138113116899385557697548414914453415091295407005019477548616307542264172939468036731980586183391832859913039607201445595044977921207612478564591616083705949878600697018940988640076443617093341727091914336501371576601148038143062623805143211734815100559013456101180079050638142152709308588';
const constant_index = (index, c) => {
  switch(c) {
    case 'e':
      return str_E.substring(index, index + 1);
    case 'p':
      return str_PI.substring(index, index + 1);
    case 'g':
      return str_PHI.substring(index, index + 1);
  }  
}

function input(keycd) {
  const keyc = keycd - 48;

  // console.log(keycd); 71
  switch(keycd) {
    case 69:
    case 80:
    case 71:
      sindex = 2;
      index = 0;
      displaying = true;
      number_container.innerHTML = '';
      startTime = 0;
  }
  if(keycd == 69)
    constant = 'e';
  if(keycd == 80)
    constant = 'p';
  if(keycd == 71)
    constant = 'g';

  if(keyc < 0 || keyc > 9)
    return -1;
  
  return keyc;
}

const score = document.querySelector('#score');
const game_container = document.querySelector('#game-container');
const number_container = document.querySelector('#number-container');
let sindex = 2, index = 0, game = true, displaying = true;

let duration = 2250, startTime = 0, currentTime, delay, constant = 'p';
function draw() {
  currentTime = Date.now();

  if(!game && currentTime - startTime > 1000) {
    index = 0;
    sindex = 2;
    startTime = 0;
    displaying = true;
    game = true;
    number_container.innerHTML = '';
  }

  if(!displaying) {
    game_container.style = 'background-color: var(--game-bg-play);';
    score.innerHTML = index + ' / ' + (sindex+1);
  
    return;
  }
  score.innerHTML = (index+1) + ' / ' + (sindex+1);
  

  game_container.style = 'background-color: var(--game-bg-wait);';

  if(startTime == 0) {
    const child = document.createElement('p');
    child.className = 'c-number';
    if(index == sindex) {
      child.className += ' current';
    }
    child.innerHTML = constant_index(index, constant);

    number_container.appendChild(child);

    startTime = Date.now();
    return;
  }

  delay = duration / (sindex + 1);
  if(index == sindex) delay += 1000;

  let cur = currentTime - startTime;

  if(cur >= delay) {
    startTime = 0;
    index++;

    score.innerHTML = index + ' / ' + (sindex+1);
    if(index > sindex) {
      index = 0;
      displaying = false;
      number_container.innerHTML = '';
    }
  }
}

function keyPressed() {
  const k = input(keyCode);

  if(k < 0)
    return;

  if(!game || displaying) return;

  if(index > 0)
   document.querySelector('.c-number:nth-child(' + index + ')').className = 'c-number';

  const child = document.createElement('p');
  child.className = 'c-number';
  child.innerHTML = k;

  number_container.appendChild(child);

  if(k == parseInt(constant_index(index, constant))) {
    index++;
    child.className += ' green';
    if(index > sindex) {
      index = 0;
      sindex++;
      displaying = true;
      number_container.innerHTML = '';
    }
  } else {
    game = false;
    child.className += ' red';
    startTime = Date.now();
  }
}