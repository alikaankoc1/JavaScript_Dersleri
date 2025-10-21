class MigrosBase{
    constructor(isim,soysim,kartVarmi,urunler){
        this.isim = isim;
        this.soysim = soysim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }
    hesapla(){

    }
    urunleriKontrolEt(urunler){
        if(urunler != null && urunler.length > 0){
            return true;
        }
        return false;
    }
}