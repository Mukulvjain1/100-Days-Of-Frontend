let btn =document.querySelector('button');
let speech=new SpeechSynthesisUtterance();

let voices=[];
let voiceSelect=document.querySelector('select');

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();//provides all voices present in device
    speech.voice=voices[0]

    voices.forEach((voice,i)=>(voiceSelect.options[i] =new Option(voice.name,i)));
}

voiceSelect.addEventListener('change',()=>{
    speech.voice=voices[voiceSelect.value]
})

btn.addEventListener('click',()=>{
    speech.text=document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})