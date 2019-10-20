window.onload = function (){
        var x = document.querySelector("body");
        var buttonMob = document.createElement('div');
        var buttonBack = document.createElement('div');
        buttonMob.innerHTML = "<button class='buttonMob' id='buttonMob' value='Mobile/Desktop'>Mobile</button>";
        buttonBack.innerHTML = "<button class='buttonBack' id='buttonBack' value='Back'>Back</button>";
        buttonBack.addEventListener('click',()=>{ window.location.href='../index.html'});
        buttonMob.addEventListener('click',()=>{
                if(buttonMob.innerText == 'Mobile'){
                        document.querySelector("head > link:nth-child(6)").href = 'dist/styleMob.css';
                        buttonMob.firstChild.firstChild.textContent = "Desktop";
                }
                else{
                        document.querySelector("head > link:nth-child(6)").href = 'dist/styleDesk.css';
                        buttonMob.firstChild.firstChild.data = "Mobile";
                }
                

               });
        x.append(buttonMob);
        x.append(buttonBack);


}