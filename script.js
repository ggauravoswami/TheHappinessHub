let score=0;
function recommend(){
const m=document.getElementById('mood').value;
document.getElementById('result').innerText='Recommended activity for '+m;
}
function emergencyCalm(){alert('Everything is okay. Focus on your next breath.');}
function toggleTheme(){document.body.classList.toggle('dark');}
function saveGratitude(){
let v=document.getElementById('gratitude').value;
if(!v)return;
let arr=JSON.parse(localStorage.getItem('g')||'[]');arr.push(v);
localStorage.setItem('g',JSON.stringify(arr));load();
}
function load(){
let ul=document.getElementById('list');ul.innerHTML='';
(JSON.parse(localStorage.getItem('g')||'[]')).forEach(x=>{let li=document.createElement('li');li.textContent=x;ul.appendChild(li);});
}
window.onload=load;