//Taiyakiクラスを作成
class Taiyaki {

    //コンストラクタ
    constructor(material) {
        this.material = material;
    }

    //たいやきの材料表示（関数）作成
    showTaste() {
        console.log(`中身は${this.material}です`);
    }
}

let anko = new Taiyaki('あんこ')
let cream = new Taiyaki('クリーム')
let cheese = new Taiyaki('チーズ')
anko.showTaste();
cream.showTaste();
cheese.showTaste();
