function onChange() {
  chrome.storage.sync.set({voice : +(document.getElementById('select').value)});
}
window.onload = () => {
   const element = document.getElementById('select');
   element.addEventListener("change",onChange);
   element.innerHTML = window.speechSynthesis.getVoices().map((e,c)=>`<option value="${c}" ${!c ? 'selected' : ''}>${e.name}</option>`).join('');
    
}
