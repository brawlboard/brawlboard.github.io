let CONFIG = {
    "numberOfChannels": 24,
    "numberOfRows": 2
};
let CHANNELID = [
    'UCThfpuJ8LX7YeRpmSvB_lIQ',
    'UCBGjyYxljtz9dRdccMnkDbQ',
    'UCR1RhHf1ON0eDyi2dN3rXNA',
    'UCVuRmP-R6Fx8h0xRXsM3zog',
    'UCzuzyWrqkhonYsuMSEDhPKA',
    'UCrxecZ-Gxay6lZDVQlaDcnQ',
    'UCyBdMMfbBbJy-YMMT8PJHtA',
    'UCpmhVItCsN4AbBFtc7sk_Rw',
    'UCuDBUm5jiUI790e4pmgOyxg',
    'UChfJ5KDAmcMyA-sg61pm8oQ',
    'UCv05pOTj753Akezl4bk5V6g',
    'UCdDEtGAW0_BPtgmdSzz6MOA',
    'UCMlULIKTHv9MCWdaKgH712Q',
    'UC8rcDovVw8stUqK47105MMQ',
    'UCkQnO5zaeFpeouwcxu-mp_g',
    'UCOYorfo-ueDgFg-6B24GJnQ',
    'UC51a9oE5nT_DMDuu0C7pzqw'
];

function fn60sec() {

    for (var q = 0; q < CHANNELID.length; q++) {
        let id = CHANNELID[q];
        console.log("🟢Fetching...");
        fetch("https://api-v2.nextcounts.com/api/youtube/channel/estimate/mixerno/" + id, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json()).then(result => {
            console.log('🟡');

            document.getElementById(id + '-sub').innerText = result.estimatedSubCount
            document.getElementById(id + '-name').innerText = result.channelName
            document.getElementById(id + '-img').src = result.avatar;
            console.log("⭕")

        });
    };
};

fn60sec();
setInterval(fn60sec, 5 * 1000);