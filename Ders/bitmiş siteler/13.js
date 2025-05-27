function renkDegistir(){
    var renkler=["red","green","blue","yellow","pink","orange","gray","white","black"];
    var rastgele;
    var i;
    for(i=0; i<8; i++){
    rastgele=Math.floor(Math.random() * 9);
    document.getElementsByTagName("div")[i].style.backgroundColor=renkler[rastgele];
    }
   }