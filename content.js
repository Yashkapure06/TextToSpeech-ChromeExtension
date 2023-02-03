chrome.runtime.onMessage.addListener((request) => {
    readText(request.text);
});
function readText(text) {
    var msg = new window.SpeechSynthesisUtterance(text);
    var voices = window.speechSynthesis.getVoices();
    chrome.storage.sync.get({ 'voice': { voice: 0 } }, (value) => {
        console.log(value.voice);
        msg.voice = voices[value.voice];

        window.speechSynthesis.speak(msg);
    })

}