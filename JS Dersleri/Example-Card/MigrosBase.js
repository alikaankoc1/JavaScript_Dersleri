class MigrosBase{
    indirimOrani = 0.20;
    constructor(isim,soysim,kartVarmi,urunler){
        this.isim = isim;
        this.soysim = soysim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }
    hesapla(){
        let odenecekTutar = 0;
     if(this.urunleriKontrolEt(this.urunler)){
        if(this.kartVarmi){
 this.urunler.foreach((urun)=>{
         odenecekTutar += urun.fiyat - (urun.fiyat * this.indirimOrani);
        })
        }
        else{
        this.urunler.foreach((urun)=>{
            odenecekTutar += urun.fiyat;
        })
        }
        // sepet dolu
       
     }
     else{
        alert("Sepetinize en az 1 ürün eklemelisiniz !")
     }
     return odenecekTutar;
    }
    urunleriKontrolEt(urunler){
        if(urunler != null && urunler.length > 0){
            return true;
        }
        return false;
    }
}