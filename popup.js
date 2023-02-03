function onChange() {
  chrome.storage.sync.set({ voice: +(document.getElementById('select').value) });
}
window.speechSynthesis.addEventListener('voiceschanged', () => {
  const element = document.getElementById('select');
  chrome.storage.sync.get('voice', (value) => {
    element.innerHTML = window.speechSynthesis.getVoices().map((e, c) => `<option value="${c}" ${value.voice == c ? 'selected' : ''}>${e.name}</option>`).join('');
  });  
  document.getElementById('select').addEventListener('change', onChange);
});

