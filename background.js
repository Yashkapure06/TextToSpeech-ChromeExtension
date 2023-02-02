chrome.contextMenus.create({
    title: "Read aloud", 
    contexts:["selection"], 
    onclick: readText
});
function readText(info) {
    var text = info.selectionText;
    var msg = new SpeechSynthesisUtterance(text);
    var voices = window.speechSynthesis.getVoices();
    chrome.storage.sync.get({'voice':null,(value)=>{
        msg.voice = voices[value ?? 0];
        window.speechSynthesis.speak(msg);    
    })
    
}
