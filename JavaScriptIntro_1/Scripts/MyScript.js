function ElementIcerigiDegistir() {
    //document.getElementById
    //document.getElementsByTagName
    //document.getElementsByClassName

    let x = document.getElementById("paragraf"); //bu ifade ilgili dökümandaki id'si paragraf olan tag'i yakala ve x'e at demektir.

    x.innerHTML = "Bu icerik Javascript tarafından degiştirilmiştir.."; //bu ifadede x'in yani p elementinin icerisindeki Html'e bir baska deger atadık...

    x.style.color = "red";
}


function Sil() {
    //yeni yöntemle birlikte Javascript id'leri yakalamak icin artık getElementById fonksiyonunu zorunlu kılmaz. Direkt id degerini verirseniz de ilgili elementler yakalanabilirler...Bu yakalanan taglerin üzerinden style'a erişmek ilgili element'in css'ine erişmek demektir...Belirli css kodlarını Javascript üzerinden de verebilirsiniz
    paragraf.style.display = "none";
}


function ClasslariYakala() {
    let x = document.getElementsByClassName("paragraflar");

    for (var i = 0; i < x.length; i++) {
        x[i].style.color = "red";
    }
}

