//-------------------- HOSTING LIST

let hList = [
//     {
//         name: 'robovps.biz',
//         url: 'https://www.robovps.biz/?ref=24892',
//         legalAddress: 'Россия',
//         price: 'от $2,02/мес',
//         lang: 'Сайт на русском языке',
//         locations: 'Германия, Россия',
//         payment: `Системы быстрых платежей, Webmoney WMP, Робокасса, ЮMoney,РБК мани, Paypal-RUB, Paypal-USD, Paypal-EURO, 
//             Paysera, Tinkoff, Халва, В салонах Евросеть, В салонах Связной, Альфабанк, Русский стандарт, Промсвязьбанк, 
//             безналичный расчет, Сбербанк онлайн, WeChat, CoinPayment`,
//         imgFolderName: 'Robovps',
//         imgStep1Count: '16',
//         imgStep2Count: '3',
//     },
    {
        name: 'cinfu.com',
        url: 'https://panel.cinfu.com/aff.php?aff=1395',
        legalAddress: 'Сейшельские острова',
        price: 'от $4,76/мес',
        lang: 'Сайт на английском языке',
        locations: 'США, Болгария, Франция, Германия, Нидерланды',
        payment: `Credit card/Debit card, PayPal, AdvCash Mir, Skril, Litecoin, Ethereum & other Cryptocurrencies, 
            Paxum, EpayFasaPay, NixMoney, Bitcoin, Brick (Powered by Paymentwall), Paymentwall, Payeer (30+ other payment option)`,
        imgFolderName: 'Cinfu',
        imgStep1Count: '17',
        imgStep2Count: '3',
    },
    {
        name: 'hostwinds.com',
        url: 'https://www.hostwinds.com/13349.html',
        legalAddress: 'США',
        price: 'от $4,99/мес',
        lang: 'Сайт на английском языке',
        locations: `США, Нидерланды`,
        payment: `Mastercard/Visa, PayPal, Discover, American Express, Bitcoin`,
        imgFolderName: 'Hostwinds',
        imgStep1Count: '17',
        imgStep2Count: '3',
    },
    {
        name: 'Inferno Solutions',
        url: 'https://cp.inferno.name/aff.php?aff=3451&gid=56',
        legalAddress: 'Великобритания<br/>',
        price: 'от $5,00/мес (промокод <b>AMNEZIA</b>)<br/>',
        lang: 'Используйте промокод <b>AMNEZIA</b> и получите <b>скидку 75%</b> на первый месяц или получите 3 месяца в подарок при оплате сервера сразу на год. Используйте VPN сразу после оплаты с простой возможностью подключения в один клик!<br/>',
        locations: `США, Россия, Нидерланды, Германия, Украина, Польша, Швеция, Канада, Швейцария, Эстония, Великобритания, Сингапур, Чехия, ОАЭ, Япония, Австралия, Франция, Румыния, Гонконг, Испания, Норвегия, Болгария.<br/>`,
        payment: `<b>Доступна оплата картами РФ</b>, Mastercard/Visa, PayPal, Bitcoin, ЮMoney, МИР, Qiwi, RBK.money, Advcash, Связной, Beeline, Payeer, IBOX, PaySera.<br/>`,
        imgFolderName: 'Inferno_Solutions',
        imgStep1Count: '8',
        imgStep2Count: '2',
    },
    {
        name: 'Amazon',
        url: 'https://aws.amazon.com/ru/ec2',
        legalAddress: 'США',
        price: 'от ~$5/мес, осторожно: возможны доп. списания за трафик',
        lang: 'Сайт на русском языке',
        locations: `США (5), Кейптаун, Гонконг, Мумбаи, Осака, Сеул, Сингапур, Сидней, Токио, Канада, Франкфурт, 
            Ирландия, Лондон, Милан, Париж, Стокгольм, Бахрейн, Сан-Паулу`,
        payment: `Mastercard/Visa, PayPal Cash Card`,
        imgFolderName: 'Amazon',
        imgStep1Count: '14',
        imgStep2Count: '2',
    },
    {
        name: 'DigitalOcean',
        url: 'https://www.digitalocean.com/?refcode=3d6dcd68b697&utm_campaign=Referral_Invite&utm_medium=Referral_Program',
        legalAddress: 'США',
        price: 'от $5,00/мес',
        lang: 'Сайт на английском языке',
        locations: `Нью-Йорк, Сан-Франциско, Амстердам, Франкфурт, Лондон, Торонто, Сингапур, Бангалор`,
        payment: `Mastercard/Visa, PayPal`,
        imgFolderName: 'Digital_Ocean',
        imgStep1Count: '9',
        imgStep2Count: '2',
    },
];

//-------------------- SCRIPT START

$(document).ready(function () {

    //let linkWin = 'https://github.com/amnezia-vpn/desktop-client/releases/download/2.1.2/AmneziaVPN_2.1.2_x64.exe';
    //let linkMac = 'https://github.com/amnezia-vpn/desktop-client/releases/download/2.1.2/AmneziaVPN_2.1.2.dmg';
    //let deviceWin = true;
    //let iPhone = /iPhone/g;
    //let iPad = /iPad/g;
    //if (iPhone.test(navigator.userAgent) || iPad.test(navigator.userAgent) || navigator.platform.indexOf('Win') < 0) deviceWin = false;

    // -------------------- FOR BOTH PAGES

    //$('#link-footer').html(deviceWin ? 'Для Windows. Полностью бесплатно.' : 'Для Mac. Полностью бесплатно.');
    //$('#main-link-footer').attr('href', deviceWin ? linkWin : linkMac);

    // -------------------- FOR MAIN PAGE

    //$('#main-link').attr('href', deviceWin ? linkWin : linkMac);
    //$('#btn-personal').attr('src', deviceWin ? "img/windows_fff.svg" : "img/mac_fff.svg");
    //$('#link-img-personal').attr('src', deviceWin ? "img/mac.svg" : "img/windows.svg");
    //$('#link-personal').html(deviceWin ? 'Скачать версию для Mac' : 'Скачать версию для Windows');
    //$('#link-personal').attr('href', deviceWin ? linkMac : linkWin);

    // -------------------- HOSTING INSTRUCTIONS GENERATION

    function generateInstructions(arr) {

        function generateImgTags(hostingData, step, imgCount) {
            let imgTagsHtml = ``;
            for (let i = 1; i <= imgCount; i++) {
                imgTagsHtml += `<img src="img/instructions/step_${step}/${hostingData.imgFolderName}/${i}.png">`
            }
            return imgTagsHtml;
        }

        arr.map(el => {
            $('.step-1-inner').append(
                `<div class="server">
                <h3><a target="_blank" href=${el.url}>${el.name}</a></h3>
                <div class="price">${el.price}</div>
                <div class="descr">
                    ${el.lang}<br>
                    Юр. адрес - ${el.legalAddress}<br> 
                    Хостинги - ${el.locations}<br>
                    Методы оплаты - ${el.payment}
                </div>
                <div class="instr-list" onselectstart="return false" onmousedown="return false">
                    <span class="icon"></span>
                    <span>Инструкция</span>
                </div>
                <div class="text instr-text hidden">    
                    <div class="fotorama" data-allowfullscreen="native">
                        ${generateImgTags(el, 1, el.imgStep1Count)}                        
                    </div>
                </div>
            </div>`
            );

            $('.step-2-inner').append(
                `<div class="server-instr">
                <div class="instr-list onselectstart="return false" onmousedown="return false"">
                    <span class="icon"></span>
                    <span>Инструкция для ${el.name}</span>
                </div>
                <div class="text instr-text hidden">
                    <div class="fotorama" data-allowfullscreen="native">
                         ${generateImgTags(el, 2, el.imgStep2Count)}            
                    </div>
                </div>
            </div>`
            );
        });

        // -------------------- HOSTING CARD EXPAND EVENTS

        $("#instruction").on('click', '.instr-list', function () {
            $(this).parent().children('.instr-text').toggleClass('hidden');
            $(this).find('.icon').toggleClass('minus');
        });
    }
    // if instructions page
    if ($("#instruction").length) generateInstructions(hList);

    // -------------------- DOWNLOAD LINK AUTOSCROLL FOR INSTRUCTIONS PAGE

    $('#btnAnchor').click(function (e) {
        e.preventDefault();
        let id = $(this).attr("href");
        let top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 500);
    });

});
