//-------------------- HOSTING LIST

let hList = [
    {
        name: 'Amazon',
        url: 'https://aws.amazon.com/ru/ec2',
        legalAddress: 'USA',
        price: 'from ~$5/month, extra traffic charges may apply',
        locations: `USA (5), Cape Town, Honk-Kong, Mumbai, Osaka, Seoul, Singapore, Sydney, Tokio, Canada, Frankfurt, 
            Ireland, London, Milan, Paris, Stockholm, Bahrain, Sao Paulo`,
        payment: `Mastercard/Visa, PayPal Cash Card`,
        imgFolderName: 'Amazon',
        imgStep1Count: '14',
        imgStep2Count: '2',
    },
    {
        name: 'DigitalOcean',
        url: 'https://www.digitalocean.com/?refcode=3d6dcd68b697&utm_campaign=Referral_Invite&utm_medium=Referral_Program',
        legalAddress: 'USA',
        price: 'from $5.00/month',
        locations: `New York, San Francisco, Amsterdam, Frankfurt, London, Toronto, Singapore, Bangalore`,
        payment: `Visa, Mastercard, American Express, Discover, PayPal`,
        imgFolderName: 'Digital_Ocean',
        imgStep1Count: '9',
        imgStep2Count: '2',
    },
    {
        name: 'robovps.biz',
        url: 'https://www.robovps.biz/?ref=24892',
        legalAddress: 'Russia',
        price: 'from $2.02/month',
        locations: 'Germany, Russia',
        payment: `Fast payment systems, Webmoney WMP, Robocassa, YooMoney, Paypal-RUB, Paypal-USD, Paypal-EURO, Paysera, 
            Tinkoff, Halva, Euroset salons, Svyaznoy salons, Alfabank, Russian standard, Promsvyazbank, cashless payments, 
            Sberbank online, WeChat, CoinPayment`,
        imgFolderName: 'Robovps',
        imgStep1Count: '14',
        imgStep2Count: '3',
    },
    {
        name: 'cinfu.com',
        url: 'https://panel.cinfu.com/aff.php?aff=1395',
        legalAddress: 'Seychelles',
        price: 'from $4.76/month',
        locations: `USA, Bulgaria, France, Germany, Netherlands`,
        payment: `Credit card/Debit card, PayPal, AdvCash Mir, Skril, Litecoin, Ethereum & other Cryptocurrencies, 
            Paxum, EpayFasaPay, NixMoney, Bitcoin, Brick (Powered by Paymentwall), Paymentwall, Payeer (30+ other payment option)`,
        imgFolderName: 'Cinfu',
        imgStep1Count: '17',
        imgStep2Count: '3',
    },
    {
        name: 'hostwinds.com',
        url: 'https://www.hostwinds.com/13349.html',
        legalAddress: 'USA',
        price: 'from $4.99/month',
        locations: `USA, Netherlands`,
        payment: `Mastercard/Visa, PayPal, Discover, American Express, Bitcoin`,
        imgFolderName: 'Hostwinds',
        imgStep1Count: '17',
        imgStep2Count: '3',
    },
];

//-------------------- SCRIPT START

$(document).ready(function () {

    let linkWin = 'https://github.com/amnezia-vpn/desktop-client/releases/download/2.0.8/AmneziaVPN_2.0.8.3_x64.exe';
    let linkMac = 'https://github.com/amnezia-vpn/desktop-client/releases/download/2.0.8/AmneziaVPN_2.0.8.dmg';
    let deviceWin = true;
    let iPhone = /iPhone/g;
    let iPad = /iPad/g;
    if (iPhone.test(navigator.userAgent) || iPad.test(navigator.userAgent) || navigator.platform.indexOf('Win') < 0) deviceWin = false;

    // -------------------- FOR BOTH PAGES

    $('#link-footer').html(deviceWin ? 'For Windows. Completely free.' : 'For Mac. Completely free.');
    $('#main-link-footer').attr('href', deviceWin ? linkWin : linkMac);

    // -------------------- FOR MAIN PAGE

    $('#main-link').attr('href', deviceWin ? linkWin : linkMac);
    $('#btn-personal').attr('src', deviceWin ? "img/windows_fff.svg" : "img/mac_fff.svg");
    $('#link-img-personal').attr('src', deviceWin ? "img/mac.svg" : "img/windows.svg");
    $('#link-personal').html(deviceWin ? 'Download Mac version' : 'Download Windows version');
    $('#link-personal').attr('href', deviceWin ? linkMac : linkWin);

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
                    Legal address - ${el.legalAddress}<br> 
                    Hosting - ${el.locations}<br>
                    Payment methods - ${el.payment}
                </div>
                <div class="instr-list" onselectstart="return false" onmousedown="return false">
                    <span class="icon"></span>
                    <span>Instruction</span>
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
                    <span>Manual for ${el.name}</span>
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
