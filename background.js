chrome.contextMenus.create({
    title: "Read aloud", 
    contexts:["selection"], 
    onclick: readText
});
function readText(info) {
    var text = info.selectionText;
    var msg = new SpeechSynthesisUtterance(text);
    var voices = window.speechSynthesis.getVoices();
    console.log(voices)
    msg.voice = voices[0];
    window.speechSynthesis.speak(msg);
}