  var linkWin = 'https://github.com/amnezia-vpn/desktop-client/releases/download/1.0/AmneziaVPN.exe';
  var linkMac = 'https://github.com/amnezia-vpn/desktop-client/releases/download/1.0/AmneziaVPN.dmg';

  var mainLink = document.getElementById('main-link');
  var mainLinkFooter = document.getElementById('main-link-footer');
  var secondLink = document.getElementById('link-personal');

  var platform = navigator.userAgent;
  var deviceWin = true;

  var iPhone = /iPhone/g;
  var iPad = /iPad/g;

  if (iPhone.test(platform) || iPad.test(platform) || navigator.platform.indexOf('Win') < 0) {
      deviceWin = false;
  }
console.log("deviceWin", deviceWin)
if (document.getElementById("main") != null){
  if (deviceWin) {
    document.getElementById("btn-personal").setAttribute('src', "img/windows_fff.svg")
    document.getElementById("link-img-personal").setAttribute('src', "img/mac.svg")
    document.getElementById("link-personal").innerHTML  = 'Скачать версию для Mac';
    document.getElementById("link-footer").innerHTML  = 'Для Windows. Полностью бесплатно.';
    mainLink.href = linkWin;
    mainLinkFooter.href = linkWin;
    secondLink.href = linkMac;
  } else {
    document.getElementById("btn-personal").setAttribute('src', "img/mac_fff.svg")
    document.getElementById("link-img-personal").setAttribute('src', "img/windows.svg")
    document.getElementById("link-personal").innerHTML  = 'Скачать версию для Windows';
    document.getElementById("link-footer").innerHTML  = 'Для Mac. Полностью бесплатно.';
    mainLink.href = linkMac;
    mainLinkFooter.href = linkMac;
    secondLink.href = linkWin;
  }

  document.getElementById("header-list-1").addEventListener('click',  function() {;
        document.getElementById("technical-text-1").classList.toggle('hidden');
        document.getElementById("icon1").classList.toggle('minus');
  })
  document.getElementById("header-list-2").addEventListener('click',  function() {
        document.getElementById("technical-text-2").classList.toggle('hidden');
        document.getElementById("icon2").classList.toggle('minus');
  })
  document.getElementById("header-list-3").addEventListener('click',  function() {
        document.getElementById("technical-text-3").classList.toggle('hidden');
        document.getElementById("icon3").classList.toggle('minus');
  })
  document.getElementById("header-list-4").addEventListener('click',  function() {
        document.getElementById("technical-text-4").classList.toggle('hidden');
        document.getElementById("icon4").classList.toggle('minus');
  })
  document.getElementById("header-list-5").addEventListener('click',  function() {
        document.getElementById("technical-text-5").classList.toggle('hidden');
        document.getElementById("icon5").classList.toggle('minus');
  })
  document.getElementById("header-list-6").addEventListener('click',  function() {
        document.getElementById("technical-text-6").classList.toggle('hidden');
        document.getElementById("icon6").classList.toggle('minus');
  })
}

if (document.getElementById("instruction") != null){
  document.getElementById("instr-step-1").addEventListener('click',  function() {;
        document.getElementById("instr-1").classList.toggle('hidden');
        document.getElementById("icon1").classList.toggle('minus');
  })
  document.getElementById("instr-step-2").addEventListener('click',  function() {;
        document.getElementById("instr-2").classList.toggle('hidden');
        document.getElementById("icon2").classList.toggle('minus');
  })
  document.getElementById("instr-step-3").addEventListener('click',  function() {;
        document.getElementById("instr-3").classList.toggle('hidden');
        document.getElementById("icon3").classList.toggle('minus');
  })
  document.getElementById("instr-step-4").addEventListener('click',  function() {;
        document.getElementById("instr-4").classList.toggle('hidden');
        document.getElementById("icon4").classList.toggle('minus');
  })
  document.getElementById("instr-step-5").addEventListener('click',  function() {;
        document.getElementById("instr-5").classList.toggle('hidden');
        document.getElementById("icon5").classList.toggle('minus');
  })
  document.getElementById("instr-step-6").addEventListener('click',  function() {;
        document.getElementById("instr-6").classList.toggle('hidden');
        document.getElementById("icon6").classList.toggle('minus');
  })
  document.getElementById("server-instr-step-1").addEventListener('click',  function() {;
        document.getElementById("server-instr-1").classList.toggle('hidden');
        document.getElementById("server-icon1").classList.toggle('minus');
  })
  document.getElementById("server-instr-step-2").addEventListener('click',  function() {;
        document.getElementById("server-instr-2").classList.toggle('hidden');
        document.getElementById("server-icon2").classList.toggle('minus');
  })
  document.getElementById("server-instr-step-3").addEventListener('click',  function() {;
        document.getElementById("server-instr-3").classList.toggle('hidden');
        document.getElementById("server-icon3").classList.toggle('minus');
  })
  document.getElementById("server-instr-step-4").addEventListener('click',  function() {;
        document.getElementById("server-instr-4").classList.toggle('hidden');
        document.getElementById("server-icon4").classList.toggle('minus');
  })
  document.getElementById("server-instr-step-5").addEventListener('click',  function() {;
        document.getElementById("server-instr-5").classList.toggle('hidden');
        document.getElementById("server-icon5").classList.toggle('minus');
  })
  document.getElementById("server-instr-step-6").addEventListener('click',  function() {;
        document.getElementById("server-instr-6").classList.toggle('hidden');
        document.getElementById("server-icon6").classList.toggle('minus');
  })
}
