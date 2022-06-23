let $ = document 

/////////////////////////////////////

let body = $.body


function domUpdater(){
    let liveUserScreenHeight = visualViewport.height
    body.style.height = liveUserScreenHeight + "px"
}

setInterval(domUpdater , 100)