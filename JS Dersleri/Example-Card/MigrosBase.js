class MigrosBase{
    indirimOrani = 0.20;
    constructor(isim,soysim,kartVarmi,urunler){
        this.isim = isim;
        this.soysim = soysim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }
    hesapla(){
     if(this.urunleriKontrolEt(this.urunler)){
        // sepet dolu
     }
     else{
        alert("Sepetinize en az 1 ürün eklemelisiniz !")
     }
    }
    urunleriKontrolEt(urunler){
        if(urunler != null && urunler.length > 0){
            return true;
        }
        return false;
    }
}