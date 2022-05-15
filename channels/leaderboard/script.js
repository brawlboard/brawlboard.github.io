let CONFIG = {
    "numberOfChannels": 22,
    "numberOfRows": 2
};

let CHANNELID = ['UCThfpuJ8LX7YeRpmSvB_lIQ',
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
'UCHkbIdjKbk14EIkMcRoqs3g',
'UCAKyXT0Vot7GHxtWKOEe4cg',
'UCOYorfo-ueDgFg-6B24GJnQ',
'UCYWBtJ62J2RBARQJvRCQU4g',
'UCnIdnC__X7Ywaf5bl5wGMpA',
'UCrkgqEJL5Kd5gBBHL4wTG9Q',
'UC_s7d7w9BIZgAVwmzA7hBMw',
'UCz1Bnml93YeUmCT5BH0763g',
'UCOYorfo-ueDgFg-6B24GJnQ',
'UC3CeKXNtheO1jvomemi07FA'];


let cData = []
function arrayPush(item) {
    if (!cData.find(({ id }) => id === item.id)) {
        cData.push(item);

    }
    if (cData.find(({ id }) => id === item.id)) {

        var foundIndex = cData.findIndex(x => x.id == item.id);
        obj = cData[foundIndex];
        obj.subcount = item.subcount || 0;
    }
}
async function updateData() {
   
    for (var q = 0; q < CHANNELID.length; q++) {
        let id = CHANNELID[q];
        await fetch("https://mixerno.space/api/youtube-channel-counter/user/" + id, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json()).then(result => {
            if(parseInt(result.counts[0].count) === 0) return;
            let a = {
                id: id,
                subcount: parseInt(result.counts[0].count) || 0,
                name: result.user[0].count,
                logo:result.user[1].count
            }
             arrayPush(a);
        });
    };
};

async function updateCounter() {


    for (var q = 0; q < cData.length; q++) {
        let cId = cData[q].id;
        await cData.sort((a, b) => parseFloat(b.subcount) - parseFloat(a.subcount));
        cData.forEach(update);
        
        function update(item) {
            cData.find(({ id }) => id === cId); 
            var foundIndex = cData.findIndex(x => x.id == item.id);
            obj = cData[foundIndex];
            document.getElementById(foundIndex+'-sub').innerText = obj.subcount;
            document.getElementById(foundIndex + '-name').innerText = obj.name;
            document.getElementById(foundIndex + '-img').src = obj.logo;
        }
    };
};

updateData();
updateCounter();
setInterval(updateData, 5 * 1000);
setInterval(updateCounter, 1 * 1000);
