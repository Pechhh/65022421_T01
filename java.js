let randNum = Math.floor(Math.random()*101);
p = 0     
function GN(){
    p = p+1
    const Guess_Number = document.getElementById('G_N').value;
if(Guess_Number > randNum){
    alert("มากกว่า")
}else if(Guess_Number < randNum){
    alert("น้อยกว่า")
}else{
    alert("ค่าที่ถูกคือ"+Guess_Number +"คุณทายไปทั้งหมด"+ p + "ครั้ง")
}
}