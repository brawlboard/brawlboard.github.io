
var thislocation = window.location.href +"/"

window.onload = function () {

//  setInterval(() => {
	// loadURL();
    updatePage()
//  }, 100);
    
}


var param = location.href.split('#!/');
var req_id = param[1] || "apple";
let search = document.querySelector("[search]")
search.addEventlistener("input", e => {
    console.log("a")
});

function updatePage() {
    location.href = `#!/${req_id}`;
    document.getElementById("userId").innerText = req_id;
}
// let request = await fetch(`https://mixerno.space/api/yt/channel/${channel_id}`, { mode: "cors" })
// let data = await request.json().catch(() => {})

