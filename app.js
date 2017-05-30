class QuranClass extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({
      mode: 'closed'
    });
    const createElement = e => document.createElement(e),
      self = this;
    self.played = null;
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

    self.playButton     = createElement('button');
    self.selectInput    = createElement('select');
    self.rangeInput     = createElement("input");
    self.currentLabel		= createElement("label");
    self.durationLabel	= createElement("label");
    self.stylesheet     = createElement("style");
    
		self.durationLabel.className = "duration";
    self.stylesheet.innerText = `
    	:host{
      	display:inline-block;
        background:white;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 5px;
        direction: rtl;
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
        margin-left: 10px !important;
      }
      :host button{
          border: 0px;
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
    `;

    self.playButton.innerHTML = "تشغيل";
    self.playButton.onclick = () => {
        self.play();
    }

    for (var k = 0; k < Object.keys(self.soar).length; k++) {
      var optionInput       = createElement("option");
      
      optionInput.innerHTML = self.soar[self.n000(k + 1)];
      optionInput.value     = self.n000(k + 1);
      
      self.selectInput.append(optionInput);
    }

    self.selectInput.onchange = ()=>{
        self.load();
        self.played.currentTime = 0;
        self.rangeInput.max     = 0;
        self.rangeInput.value   = 0;
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


    self.root.append(self.stylesheet, self.playButton, ' ', self.selectInput, self.rangeInput, self.currentLabel,self.durationLabel);
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
  }

  load(){
    const self = this;
    var url = "http://server10.mp3quran.net/ibrahim_dosri_hafs/"+self.selectInput.value+".mp3";
    
    try{
        self.played.pause();
    }catch(e){ /**
    * 
    */ }
    
    self.played = new Audio(url);
    
    self.played.addEventListener('canplaythrough', ()=>{
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

  n000(n) {
    var s = "000";
    var stn = n.toString();
    s = s.substring(0, s.length - stn.length);
    s += stn;

    return s;
  }
}
customElements.define("quran-widght", QuranClass);
