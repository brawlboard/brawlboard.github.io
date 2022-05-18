 async function quote() {
     await fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(data => {console.log(data)
    document.getElementById('quote').innerHTML = `'${data.quote}' \n <p style="color: #977fd7">-${data.character}<p>`

 })
 }