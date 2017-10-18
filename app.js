class QuranClass extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({
      mode: 'closed'
    });
    const createElement = e => document.createElement(e),
      self = this;
    self.played = null;
    self.pause = false;
    self.soar = {
      '001': 'الفاتحة',
      '002': 'البقرة',
      '003': 'آل عمران',
      '004': 'النساء',
      '005': 'المائدة',
      '006': 'الأنعام',
      '007': 'الأعراف',
      '008': 'الأنفال',
      '009': 'التوبة',
      '010': 'يونس',
      '011': 'هود',
      '012': 'يوسف',
      '013': 'الرعد',
      '014': 'إبراهيم',
      '015': 'الحجر',
      '016': 'النحل',
      '017': 'الإسراء',
      '018': 'الكهف',
      '019': 'مريم',
      '020': 'طه',
      '021': 'الأنبياء',
      '022': 'الحج',
      '023': 'المؤمنون',
      '024': 'النّور',
      '025': 'الفرقان',
      '026': 'الشعراء',
      '027': 'النّمل',
      '028': 'القصص',
      '029': 'العنكبوت',
      '030': 'الرّوم',
      '031': 'لقمان',
      '032': 'السجدة',
      '033': 'الأحزاب',
      '034': 'سبأ',
      '035': 'فاطر',
      '036': 'يس',
      '037': 'الصافات',
      '038': 'ص',
      '039': 'الزمر',
      '040': 'غافر',
      '041': 'فصّلت',
      '042': 'الشورى',
      '043': 'الزخرف',
      '044': 'الدّخان',
      '045': 'الجاثية',
      '046': 'الأحقاف',
      '047': 'محمد',
      '048': 'الفتح',
      '049': 'الحجرات',
      '050': 'ق',
      '051': 'الذاريات',
      '052': 'الطور',
      '053': 'النجم',
      '054': 'القمر',
      '055': 'الرحمن',
      '056': 'الواقعة',
      '057': 'الحديد',
      '058': 'المجادلة',
      '059': 'الحشر',
      '060': 'الممتحنة',
      '061': 'الصف',
      '062': 'الجمعة',
      '063': 'المنافقون',
      '064': 'التغابن',
      '065': 'الطلاق',
      '066': 'التحريم',
      '067': 'الملك',
      '068': 'القلم',
      '069': 'الحاقة',
      '070': 'المعارج',
      '071': 'نوح',
      '072': 'الجن',
      '073': 'المزّمّل',
      '074': 'المدّثر',
      '075': 'القيامة',
      '076': 'الإنسان',
      '077': 'المرسلات',
      '078': 'النبأ',
      '079': 'النازعات',
      '080': 'عبس',
      '081': 'التكوير',
      '082': 'الإنفطار',
      '083': 'المطفّفين',
      '084': 'الإنشقاق',
      '085': 'البروج',
      '086': 'الطارق',
      '087': 'الأعلى',
      '088': 'الغاشية',
      '089': 'الفجر',
      '090': 'البلد',
      '091': 'الشمس',
      '092': 'الليل',
      '093': 'الضحى',
      '094': 'الشرح',
      '095': 'التين',
      '096': 'العلق',
      '097': 'القدر',
      '098': 'البينة',
      '099': 'الزلزلة',
      '100': 'العاديات',
      '101': 'القارعة',
      '102': 'التكاثر',
      '103': 'العصر',
      '104': 'الهمزة',
      '105': 'الفيل',
      '106': 'قريش',
      '107': 'الماعون',
      '108': 'الكوثر',
      '109': 'الكافرون',
      '110': 'النصر',
      '111': 'المسد',
      '112': 'الإخلاص',
      '113': 'الفلق',
      '114': 'النّاس'
    };
    
    self.checkInput     = createElement("input");
    self.playButton     = createElement('button');
    self.nextButton     = createElement('button');
    self.selectInput    = createElement('select');
    self.previousButton = createElement('button');
    self.rangeInput     = createElement("input");
    self.currentLabel		= createElement("label");
    self.durationLabel	= createElement("label");
    self.ayat						= createElement('div');
    self.stylesheet     = createElement("style");
    
		self.durationLabel.className  = "duration";
    self.previousButton.className = "changebuttons";
    self.nextButton.className     = "changebuttons";
    self.ayat.className						= "ayat";
    self.stylesheet.innerText     = `
    	:host{
      	display:block;
        background:white;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 5px;
        direction: rtl;
      }

      .changebuttons{
        height: 25px;
        background: #FCFCFC;
        width: 25px;
        border-radius: 15px;
        border: 1px dashed #F2F2F2;
        line-height: 15px;
        margin-left: 1px;
        margin-right: 1px;
        color: #CCCCCC;
      }
      :host label.duration {
        background: #F2F2F2;
        border: 1px solid #F2F2F2;
        padding-left: 8px;
        padding-right: 8px;
        border-radius: 5px;
      }
      :host select{
        border: 1px solid rgba(194, 194, 194, 0.1);
        background: rgba(0, 0, 0, 0.03) !important;
        border-radius: 5px;
        padding: 0 16px;
      }
      :host button{
          border: 0px;
          cursor: pointer;
      }
      :host button:active{
          padding-bottom: 3px;
      }
    	:host *:not(style){
      	vertical-align: middle;
        height: 26px;
        background: white;
        display:inline-block;
        margin: 3px;
        outline: 0;
      }
      :host label{
      	line-height: 25px;
				margin-right: 10px !important;
      }
      input[type=range] {
        height: 26px;
        -webkit-appearance: none;
        margin: 10px 0;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #F2F2F2;
        border-radius: 50px;
        border: 0px solid #000000;
      }
      input[type=range]::-webkit-slider-thumb {
        box-shadow: 0px 0px 1px #636363;
        border: 0px solid #000000;
        height: 20px;
        width: 20px;
        border-radius: 50px;
        background: #FFFFFF;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -5px;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        background: #F2F2F2;
      }
      input[type=range]::-moz-range-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #F2F2F2;
        border-radius: 50px;
        border: 0px solid #000000;
      }
      input[type=range]::-moz-range-thumb {
        box-shadow: 0px 0px 1px #636363;
        border: 0px solid #000000;
        height: 20px;
        width: 20px;
        border-radius: 50px;
        background: #FFFFFF;
        cursor: pointer;
      }
      input[type=range]::-ms-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-ms-fill-lower {
        background: #F2F2F2;
        border: 0px solid #000000;
        border-radius: 100px;
        box-shadow: 0px 0px 0px #000000;
      }
      input[type=range]::-ms-fill-upper {
        background: #F2F2F2;
        border: 0px solid #000000;
        border-radius: 100px;
        box-shadow: 0px 0px 0px #000000;
      }
      input[type=range]::-ms-thumb {
        margin-top: 1px;
        box-shadow: 0px 0px 1px #636363;
        border: 0px solid #000000;
        height: 20px;
        width: 20px;
        border-radius: 50px;
        background: #FFFFFF;
        cursor: pointer;
      }
      input[type=range]:focus::-ms-fill-lower {
        background: #F2F2F2;
      }
      input[type=range]:focus::-ms-fill-upper {
        background: #F2F2F2;
      }
      .ayat{
        display: inline-block;
        font-family: Amiri;
        word-wrap: break-word; 
        height: 100%;
        color: darkgreen;
        border: 1px solid rgba(194, 194, 194, 0.1);
        background: rgba(0, 0, 0, 0.03) !important;
        border-radius: 5px;
        padding: 10px;
        margin: 8px;
      }
    `;
		
    self.checkInput.type = "checkbox";
    self.checkInput.checked = true;
    
    self.playButton.innerHTML = "تشغيل";
    self.playButton.onclick = () => {
        self.play();
    }

    self.previousButton.innerText = '«';
    self.previousButton.onclick   = ()=>{
      
      if(self.selectInput.selectedIndex <= 0)
      {
        self.selectInput.selectedIndex = 1;
      }
      
      self.selectInput.selectedIndex -= 1;
      self.selectInput.onchange();
    }

    for (var k = 0; k < Object.keys(self.soar).length; k++) {
      var optionInput       = createElement("option");
      
      optionInput.innerHTML = self.soar[self.ayatFormatNumber(k + 1)];
      optionInput.value     = self.ayatFormatNumber(k + 1);
      
      self.selectInput.append(optionInput);
    }

    self.selectInput.onchange = ()=>{
        self.load();
        self.playButton.innerText = "تشغيل";
        self.pause                = false;
        self.played.currentTime   = 0;
        self.rangeInput.max       = 0;
        self.rangeInput.value     = 0;
    }

    self.nextButton.innerText = '»';
    self.nextButton.onclick   = ()=>{
      if(self.selectInput.selectedIndex == self.selectInput.options.length-1)
      {
        self.selectInput.selectedIndex = self.selectInput.options.length-2;
      }

      self.selectInput.selectedIndex += 1;
      self.selectInput.onchange();
    }

    self.rangeInput.type    = "range";
    self.rangeInput.min     = 0;
    self.rangeInput.max     = 0;
    self.rangeInput.value   = 0;
    self.rangeInput.oninput = ()=>{
        self.played.currentTime = self.rangeInput.value;
    };

    self.currentLabel.innerText		= "00:00:00";
		self.durationLabel.innerText	= "00:00:00";

    fetch("https://cors-anywhere.herokuapp.com/http://mp3quran.net/api/_arabic.json").then(e => e.json()).then(r => {
      console.log(r);
    });


    self.root.append(self.stylesheet, self.checkInput, self.playButton, ' ', self.previousButton, self.selectInput, self.nextButton, ' ', self.rangeInput, self.currentLabel, self.durationLabel, self.ayat);
    self.load();
  }

  play(){
    const self = this;
    try{
        self.played.pause();
    }catch(e){ /**
     * 
    */ }

    if(self.played == null){
        self.load();
    }
    self.played.play();
    if(self.pause == false){
      self.playButton.innerText = "ايقاف";
      self.played.play();
      self.pause = true;
    }else{
      self.playButton.innerText = "استئناف";      
      self.played.pause();
      self.pause = false;
    }
  }

  load(){
    const self = this;
    var url = "http://server10.mp3quran.net/ibrahim_dosri_hafs/"+ self.selectInput.value +".mp3";
    var ayat = "https://runbb.github.io/quran-data/quran/"+ self.selectInput.value +".txt";
    
    fetch(ayat).then(result => result.text()).then(ayats => {
    	self.ayat.innerHTML = ayats;
    })
    .catch(()=>{
    	alert('لا يمكن تحميل الأيات')
    });
    
    try{
        self.played.pause();
    }catch(e){ /**
    * 
    */ }
    
    self.played = new Audio(url);
    
    self.played.addEventListener('canplaythrough', ()=>{
    		if(self.checkInput.checked){
        	self.pause == false;
          if(self.pause == false){
            self.playButton.innerText = "ايقاف";
            self.played.play();
            self.pause = true;
          }else{
            self.playButton.innerText = "استئناف";      
            self.played.pause();
            self.pause = false;
          }
        }
    
    
        self.currentLabel.innerText	= self.fancyTimeFormat(self.played.currentTime);
        self.durationLabel.innerText = self.fancyTimeFormat(self.played.duration);
        self.rangeInput.max         = ~~self.played.duration;
        self.rangeInput.value       = ~~self.played.currentTime;
        setInterval(()=>{
            self.currentLabel.innerText	= self.fancyTimeFormat(self.played.currentTime);
        		self.durationLabel.innerText = self.fancyTimeFormat(self.played.duration);
            
            self.rangeInput.value   = ~~self.played.currentTime;
        },800);
    }, false);
  }

  fancyTimeFormat(time) {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~(time % 60);

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += (hrs < 10 ? "0" : "");
        ret += "" + hrs + ":";
    }else{
        ret += "00:";
    }

    ret += (mins < 10 ? "0" : "");
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }

  ayatFormatNumber(n) {
    var s = "000";
    var stn = n.toString();
    s = s.substring(0, s.length - stn.length);
    s += stn;

    return s;
  }
}
customElements.define("quran-widght", QuranClass);
