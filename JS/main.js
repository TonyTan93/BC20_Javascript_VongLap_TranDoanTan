// bai 1: In so chan le
// c1: vong lap while
function chanLeWhile() {
    var soChan = "";
    var soLe = "";
    var num = document.getElementById("nhapSoWhile").value;
    var i = 0;
    while (i <= num) {
        if (i % 2 == 0) {
            soChan = soChan + " " + i;
        } else {
            soLe = soLe + " " + i;
        }
        i++;
    }
    document.getElementById("txtChanLeWhile").innerHTML =
        "Số chẵn: " + soChan + "<br>" + "Số lẻ: " + soLe;
}
document.getElementById("btnChanLeWhile").onclick = chanLeWhile;

// C2: vong lap for
function chanLeFor() {
    var soChan = "";
    var soLe = "";
    var num = document.getElementById("nhapSoFor").value;
    for (var i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            soChan = soChan + " " + i;
        } else {
            soLe = soLe + " " + i;
        }
    }
    document.getElementById("txtChanLeFor").innerHTML =
        "Số chẵn: " + soChan + "<br>" + "Số lẻ: " + soLe;
}
document.getElementById("btnChanLeFor").onclick = chanLeFor;

// bai 2: So chia het cho 3
// c1: vong lap while
function demSoChia3While() {
    var num = document.getElementById("soDuongWhile").value;
    if (num == "") {
        document.getElementById("txtChia3While").innerHTML = "Vui lòng nhập số.";
    } else {
        var count = 0;
        var i = 0;
        while (i <= num) {
            if (i % 3 == 0) {
                count++;
            }
            i++;
        }
        document.getElementById("txtChia3While").innerHTML = "Số lượng số chia hết cho 3 trong khoảng 0-" + num + " là: " + count;
    }
}
document.getElementById("btnChia3While").onclick = demSoChia3While;

// C2: vong lap for
function demSoChia3For() {
    var num = document.getElementById("soDuongFor").value;
    if (num == "") {
        document.getElementById("txtChia3For").innerHTML = "Vui lòng nhập số.";
    } else {
        var count = 0;
        for (var i = 0; i <= num; i++) {
            if (i % 3 == 0) {
                count++;
            }
        }
        document.getElementById("txtChia3For").innerHTML = "Số lượng số chia hết cho 3 trong khoảng 0-" + num + " là: " + count;
    }
}
document.getElementById("btnChia3For").onclick = demSoChia3For;


// bai 3: tim so nguyen duong thoa dieu kien

function timSoThoaDK() {
    var num = document.getElementById("num3").value;
    var tong = 0;
    for (var n = 1; n + tong <= num; n++) {
        tong = n + tong;
    }
    document.getElementById("txtBai3").innerHTML = "Số nguyên dương n nhỏ nhất thỏa điều kiện là: " + n;
}
document.getElementById("btnBai3").onclick = timSoThoaDK;


// bai 4: tong hai tham so
function tongHaiThamSo() {
    var x = document.getElementById("numX").value;
    var n = document.getElementById("numN").value;
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum = sum + Math.pow(x, i);
    }
    document.getElementById("txtSumXN").innerHTML = "Tổng S(n) =  " + sum;
}
document.getElementById("btnSumXN").onclick = tongHaiThamSo;


// bai 5: tinh giai thua
function tinhGiaiThua() {
    var n = document.getElementById("numGiaiThua").value;
    var giaiThua = 1;
    for (var i = 2; i <= n; i++) {
        giaiThua = giaiThua * i;
    }
    document.getElementById("txtGiaiThua").innerHTML = "Kết quả:  " + n + "! = " + giaiThua;
}
document.getElementById("btnGiaiThua").onclick = tinhGiaiThua;

// Bai 6: In div chẵn đỏ, div lẻ xanh 
var domArr = [];

function inTheDiv() {
    var n = document.getElementById("soThe").value;
    var content = document.querySelector(".txtXuatThe");

    for (var i = 0; i < domArr.length; i++) {
        domArr[i].remove();
    }
    domArr = [];

    for (var i = 0; i < n; i++) {
        var newDiv = document.createElement("div");
        if (i % 2 == 0) {
            newDiv.innerHTML = "Div Chẵn";
            content.insertBefore(newDiv, content.childNodes[i]).style.cssText = "background: red; color: white; padding: 10px;";
        } else {
            newDiv.innerHTML = "Div Lẻ";
            content.insertBefore(newDiv, content.childNodes[i]).style.cssText = "background: blue; color: white; padding: 10px;";
        }
        domArr.push(newDiv);
    }
    console.log(domArr);
}
document.getElementById("btnXuatThe").onclick = inTheDiv;

// bai 7: Xuất số nguyên tố
function inSoNguyenTo() {
    var n = document.getElementById("numInput").value;
    if (n == "" || n == 1) {
        document.getElementById("txtNguyenTo").innerHTML = "Vui lòng nhập số lớn hơn 1";
    } else {
        var soNguyenTo = "";
        for (var i = 2; i <= n; i++) {
            var dauHieu = true;
            for (var j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    dauHieu = false;
                }
            }
            if (dauHieu == true) {
                soNguyenTo = soNguyenTo + " " + i;
            }
        }
        document.getElementById("txtNguyenTo").innerHTML = "Những số nguyên tố nhỏ hơn " + n + " là: " + soNguyenTo;
    }
}
document.getElementById("btnNguyenTo").onclick = inSoNguyenTo;