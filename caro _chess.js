let board =[];
let chess_table = '';

for (let i = 0; i < 5; i++) {
    board[i] = [0,0,0,0,0];
}
for (let i = 0; i < 5; i++) {
    chess_table+="<br>";
    for (let j = 0; j < 5; j++) {
        chess_table+= board[i][j]+"&nbsp&nbsp";
    }
}
document.getElementById('carogame').innerHTML=chess_table;

function changeValue(){
    let positionX = prompt('Nhap vi tri X can thay doi');
    let positionY = prompt('Nhap vi tri Y can thay doi');
    chess_table='';
    board[positionX-1][positionY-1]='X';
    for (let i = 0; i < 5; i++) {
        chess_table+="<br>";
        for (let j = 0; j < 5; j++) {
            chess_table+= board[i][j]+"&nbsp&nbsp";
        }
    }
    document.getElementById('carogame').innerHTML=chess_table;
}

