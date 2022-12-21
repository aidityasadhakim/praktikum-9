// Diawal script akan membuat 

// Input mewakili isi tiap kotak
var input = [ "", "", "", "", "", "", "", "", ""];
var player1 = 1;
var player2 = 2;

// Variabel dibawah mewakili mengisi kotak untuk ke-n kalinya
var nrOfChoose = 0;

var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
    
    
// Pada fungsi ini semua element akan di buat kosong
// dan semua tombol tambahan di buat hidden
function prepare()
{
     t1 = document.getElementById("td1");
     t2 = document.getElementById("td2");
     t3 = document.getElementById("td3");
     t4 = document.getElementById("td4");
     t5 = document.getElementById("td5");
     t6 = document.getElementById("td6");
     t7 = document.getElementById("td7");
     t8 = document.getElementById("td8");
     t9 = document.getElementById("td9");
    
    t1.innerHTML = "";
    t2.innerHTML = "";
    t3.innerHTML = "";
    t4.innerHTML = "";
    t5.innerHTML = "";
    t6.innerHTML = "";
    t7.innerHTML = "";
    t8.innerHTML = "";
    t9.innerHTML = "";
    
    input = [ "", "", "", "", "", "", "", "", ""];
    nrOfChoose = 0;
    
    document.getElementById("Player1").style.visibility = "hidden";
    document.getElementById("Player2").style.visibility = "hidden";
    document.getElementById("Draw").style.visibility = "hidden";
    document.getElementById("Reset").style.visibility = "hidden";
}
    
// Pada fungsi ini lah yang akan mengisi bagian dari setiap bos
function choose(selection)
{
    // Menerima input ketika di box tersebut kosong
    if(input[selection] == "")
    {
        // Menambah jumlah n pemilihan
        nrOfChoose++;
        
        // Menentukan pihak mana yang berjalan dengan menghitung nilai n pemilihan
        if(nrOfChoose % 2 == 1)
        {
             input[selection] = "x";
             botTurn();
        }
        else
        {
             input[selection] = "0";
        }
        
        // Mengisi box berdasarkan nilai atau angka box yang dipilih
        switch(selection)
        {
            case 0:
                if(t1.innerHTML == "")
                {
                    t1.innerHTML = input[selection];
                }
                break;
            case 1:
                if(t2.innerHTML == "")
                {
                    t2.innerHTML = input[selection];
                }
                break;
            case 2:
                if(t3.innerHTML == "")
                {
                    t3.innerHTML = input[selection];
                }
                break;
            case 3:
                if(t4.innerHTML == "")
                {
                    t4.innerHTML = input[selection];
                }
                break;
            case 4:
                if(t5.innerHTML == "")
                {
                    t5.innerHTML = input[selection];
                }
                break;
            case 5:
                if(t6.innerHTML == "")
                {
                    t6.innerHTML = input[selection];
                }
                break;
            case 6:
                if(t7.innerHTML == "")
                {
                    t7.innerHTML = input[selection];
                }
                break;
            case 7:
                if(t8.innerHTML == "")
                {
                    t8.innerHTML = input[selection];
                }
                break;
            case 8:
                if(t9.innerHTML == "")
                {
                    t9.innerHTML = input[selection];
                }
                break;
        }

        // Kemungkinan salah satu pihak menang adalah ketika jumlah memilih lebih dari 5
        // maka dari itu disini mulai dilakukan cek kemenangan
        if(nrOfChoose >= 5)
        {
            if(checkWin() == 1)
            {
                //player1 wins
                document.getElementById("Player1").style.visibility = "visible";
                document.getElementById("Reset").style.visibility = "visible";
               
            }
            if(checkWin() == 2)
            {
                //player2 wins
                document.getElementById("Player2").style.visibility = "visible";
                document.getElementById("Reset").style.visibility = "visible";
                
            }
        }

        // jika semua box sudah terisi maka dilakukan pengecekan pemenang
        // jika sampai akhir tidak ada yang memenangkan maka dianggap seri
        if(nrOfChoose == 9)
        {
            if(checkWin() == 1)
            {
                //player1 wins
                document.getElementById("Player1").style.visibility = "visible";
                document.getElementById("Reset").style.visibility = "visible";
               
            }
            if(checkWin() == 2)
            {
                //player2 wins
                document.getElementById("Player2").style.visibility = "visible";
                document.getElementById("Reset").style.visibility = "visible";
                
            }
            //draw
            if(checkWin()==0){
            document.getElementById("Draw").style.visibility = "visible";
            document.getElementById("Reset").style.visibility = "visible";
            }
        }
    }
}

// Disini dilakukan pemilihan random
// kemudian melakukan pemilihan berdasarkan angka random yang dipilih
function botTurn(selection){
    a=Math.ceil(Math.random()*8);
    for(var i=0;i<9;i++){
        if(input[a]!=""){
            a=Math.ceil(Math.random()*8);
        }
    }
    choose(a);
}

// Fungsi ini dipanggil untuk melakukan pengecekan kemenangan
// Karena isi dari box di isi dengan variabel character

// Maka ketika penjumlahan di 3 baris terdapat karakter yang sama
// maka dinyatakan sebuah kemenangan
function checkWin()
{
    var win1 = 0;
    var win2 = 0;
    
    //player1
    
    //vertical
    if(input[0] + input[1] + input[2] === "xxx")
    {
        win1 = 1;
    }
    if(input[3] + input[4] + input[5] === "xxx")
    {
        win1 = 1;
    }
    if(input[6] + input[7] + input[8] === "xxx")
    {
        win1 = 1;
    }
    
    //orizontal
    if(input[0] + input[3] + input[6] === "xxx")
    {
        win1 = 1;
    }
    if(input[1] + input[4] + input[7] === "xxx")
    {
        win1 = 1;
    }
    if(input[2] + input[5] + input[8] === "xxx")
    {
        win1 = 1;
    }
    
    //diagonale
    if(input[0] + input[4] + input[8] === "xxx")
    {
        win1 = 1;
    }
     if(input[2] + input[4] + input[6] === "xxx")
    {
        win1 = 1;
    }
    
    
    
    //player2
    
    //vertical
    if(input[0] + input[1] + input[2] === "000")
    {
        win2 = 1;
    }
    if(input[3] + input[4] + input[5] === "000")
    {
        win2 = 1;
    }
    if(input[6] + input[7] + input[8] === "000")
    {
        win2 = 1;
    }
    
    //orizontal
    if(input[0] + input[3] + input[6] === "000")
    {
        win2 = 1;
    }
    if(input[1] + input[4] + input[7] === "000")
    {
        win2 = 1;
    }
    if(input[2] + input[5] + input[8] === "000")
    {
        win2 = 1;
    }
    
    //diagonale
    if(input[0] + input[4] + input[8] === "000")
    {
        win2 = 1;
    }
    if(input[2] + input[4] + input[6] === "000")
    {
        win2 = 1;
    }
    
    if(win1 == 0 && win2 == 0)
    {
        return 0;   
    }
    else
    {
        if(win1)
        {
            return 1;
        }
        if(win2)
        {
            return 2;
        }
    }
    
}
