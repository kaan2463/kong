document.addEventListener('DOMContentLoaded', function () {

    chrome.tabs.executeScript(null, {
        file: "content.js"
    });

    document.getElementById('msg_btn').addEventListener("click", fireClick,false);
    document.getElementById('clr_btn').addEventListener("click", fireClick,false);

}, false);

function fireClick(evt){
    if(evt.currentTarget.id === 'clr_btn'){
        chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
            chrome.tabs.sendMessage(activeTabs[0].id, { action: 'clear'});
        });
        return;
    } 
    var msg = document.getElementById('message').value;
    if(msg.trim()===''){
        alert("Input can not be empty!");
        return;
    }
    chrome.tabs.query({ active: true, currentWindow: true}, function(activeTabs) {
        chrome.tabs.sendMessage(activeTabs[0].id, { action: 'display',message:msg.toUpperCase() });
    });
}
