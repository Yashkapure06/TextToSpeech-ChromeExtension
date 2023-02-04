chrome.runtime.onMessage.addListener((request) => {
    readText(request.text);
});
var voices = [];
window.speechSynthesis.addEventListener("voicechanged",()=>{
	voices = window.speechSynthesis.getVoices();
});
function readText(text) {
    var msg = new window.SpeechSynthesisUtterance(text);
    chrome.storage.sync.get({ 'voice': { voice: 0 } }, (value) => {
        msg.voice = voices[value.voice];
        window.speechSynthesis.speak(msg);
    })

}