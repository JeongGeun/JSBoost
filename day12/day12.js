const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(600, 400)
const ctx = canvas.getContext('2d')
const fs = require('fs')
const out = fs.createWriteStream(__dirname + '/test.png')
const stream = canvas.createPNGStream()
const { Image } = require('canvas')

//캔버스 배경색
ctx.fillStyle="green"
ctx.fillRect(0,0,600,400)

//동그란 머리
ctx.beginPath();
ctx.moveTo(150,100)
ctx.arc(150, 100, 50, 0, Math.PI * 2, true); // Outer circle
ctx.fillStyle="white"
ctx.fill()
ctx.stroke();
ctx.closePath()

//남색인 입
ctx.beginPath()
ctx.moveTo(150, 100);
ctx.arc(150,100,50,0, (Math.PI/180)*60,false);
ctx.fillStyle="navy"
ctx.fill()
ctx.stroke();
ctx.closePath()

//검은색 작은 눈
ctx.beginPath();
ctx.moveTo(170,80)
ctx.arc(170, 80, 5, 0, Math.PI * 2, true); // Outer circle
ctx.fillStyle="black"
ctx.fill()
ctx.stroke();
ctx.closePath()

//몸통의 그라데이션 설정
var grd = ctx.createLinearGradient(100, 150, 200, 250);
grd.addColorStop(0, "white");
grd.addColorStop(1, "red");

//몸통
ctx.beginPath();
ctx.fillStyle = grd;
ctx.rect(100, 150, 100, 100);
ctx.fill();
ctx.stroke();
ctx.closePath()

//왼쪽 굵은 다리
ctx.beginPath();
ctx.lineWidth=7
ctx.moveTo(130,250)
ctx.lineTo(90,400)
ctx.stroke();
ctx.closePath()

//오른쪽 점선 다리
ctx.beginPath();
ctx.setLineDash([5, 5])
ctx.moveTo(160,250)
ctx.lineTo(210,400)
ctx.stroke();
ctx.closePath()

//blabla 말하는 거 30도 회전
ctx.beginPath();
ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "black";
ctx.translate(250,100)
ctx.rotate((30) * Math.PI / 180)
ctx.fillText("blabla", -30,30)
ctx.translate(-250,-100)
ctx.stroke();
ctx.closePath()
ctx.setTransform(1, 0, 0, 1, 0, 0);

//회색 화살표 반시계방향으로 돌아간 것
ctx.beginPath();
ctx.lineWidth=1
ctx.translate(400, 200);
ctx.rotate((330) * Math.PI / 180)
ctx.translate(-400,-200)
ctx.setLineDash([]);
ctx.moveTo(370,100)
ctx.lineTo(370,120)
ctx.lineTo(420,120)
ctx.lineTo(420,150)
ctx.lineTo(470,110)
ctx.lineTo(420,70)
ctx.lineTo(420,100)
ctx.lineTo(370,100)
ctx.fillStyle="gray"
ctx.fill()
ctx.stroke();
ctx.closePath()
ctx.setTransform(1, 0, 0, 1, 0, 0);

//이미지 업로드
const img = new Image()
img.onload = () => ctx.drawImage(img, 300, 150,100,100)
img.onerror = err => { throw err }
img.src = './mona.jpg'


stream.pipe(out)
out.on('finish', () =>  console.log('The PNG file was created.'))
