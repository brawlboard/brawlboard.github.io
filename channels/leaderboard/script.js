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
    'UCHkbIdjKbk14EIkMcRoqs3g'
];
let cData = []
function arrayPush(item) {
    if (!cData.find(({ id }) => id === item.id)) {
        cData.push(item);

    }
    if (cData.find(({ id }) => id === item.id)) {

        var foundIndex = cData.findIndex(x => x.id == item.id);
        obj = cData[foundIndex];
        obj.subcount = item.subcount;
    }
}
async function updateData() {

    for (var q = 0; q < CHANNELID.length; q++) {
        let id = CHANNELID[q];
        fetch("https://api-v2.nextcounts.com/api/youtube/channel/estimate/mixerno/" + id, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json()).then(result => {
            let a = {
                id: id,
                subcount: parseInt(result.estimatedSubCount),
                name: result.channelName,
                logo: result.avatar
            }
            arrayPush(a);
        });
    };
    cData.sort((a, b) => parseFloat(b.subcount) - parseFloat(a.subcount));
    console.log(cData)
};

async function updateCounter() {

    for (var q = 0; q < cData.length; q++) {
        let cId = cData[q].id;
        
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
setInterval(updateCounter, 3 * 1000);
