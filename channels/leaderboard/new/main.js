
var iterationcard = 1;
while(iterationcard <= channelcount) {
let id = iterationcard
	var htmlcard = `<div class="${iterationcard} card">
    <img src="https://yt3.ggpht.com/a-/AAuE7mB98CJL1Ye38OXbGM8WMR8lJVJRV_kXU1utHA=s240-mo-c-c0xffffffff-rj-k-no" id='${id}-img' class="channelImage">
    <div class="card-content">
    <div class="channelName" id='${id}-name'>loading</div>
    <hr class="new">
    <div class="odometer subscriberCount" id='${id}-sub'>0</div>
    </div>
    </div>`;

$('body').append(htmlcard);

iterationcard++;
};


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
function updateData() {

    for (var q = 0; q < CHANNELID.length; q++) {
        let id = CHANNELID[q];
        fetch("https://mixerno.space/api/youtube-channel-counter/user/" + id, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json()).then(result => {
            if (!result.counts) return;

            let a = {
                id: id,
                subcount: parseInt(result.counts[0].count) || 0,
                name: result.user[0].count,
                logo: result.user[1].count
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

        async function update(item) {
            cData.find(({ id }) => id === cId);
            var foundIndex = cData.findIndex(x => x.id == item.id);
            obj = cData[foundIndex];
            let channelID = obj.id;
            console.log(channelID)
            document.getElementById(foundIndex + '-sub').innerText = obj.subcount;
            document.getElementById(foundIndex + '-name').innerText = obj.name;
            document.getElementById(foundIndex + '-img').src = obj.logo;
            // document.getElementById(foundIndex + '-link').href = `https://www.youtube.com/channel/${obj.id}/videos`;
        }
    };
};

updateData();
updateCounter();
setInterval(updateData, 5 * 1000);
setInterval(updateCounter, 1 * 1000);

