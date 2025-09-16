// JavaScript Tutorial - 02-javascript-basics
// このファイルで学習を進めてください

console.log("Hello from 02-javascript-basics section!");

// ========================================
// イントロダクション
// ========================================

// ========================================
// HTMLにJavaScriptを埋め込む方法
// ========================================

// ========================================
// letで変数を作る
// ========================================

// ========================================
// 変数の使い方
// ========================================

// ========================================
// constで定数を作る
// ========================================

// ========================================
// 変数と定数の名前ルール
// ========================================

// ========================================
// 算術演算子の使い方
// ========================================

// ========================================
// 省略記法の使い方
// ========================================

// ========================================
// データの型と動的型付け
// ========================================

// ========================================
// 文字列の書き方と特徴
// ========================================

// ========================================
// 暗黙的な型の変換
// ========================================
let calcResult = 10 + 5; // これは同じ型同士の演算

calcResult = 10 + "5"; // ではこれはどうなる？
console.log(calcResult); // 105 しかし文字列、次の行で型を確認
console.log(typeof calcResult); // string ※typeofは演算子の一つ typeof スペース リテラルでそのリテラルの型を返す

// ========================================
// 明示的な型変換
// ========================================
calcResult = 10 + 5; // これは同じ型同士の演算

calcResult = 10 + Number("5"); // 明示的に型を変換し数値同士の演算として見る
console.log(calcResult); // 15 (数値)
console.log(typeof calcResult); // number 暗黙的な型変換ではstringとなっていたが、このように明示的に型を変換することが可能

// ========================================
// 真偽値
// ========================================
let isTrue = true;
let isFalse = false;

console.log("true:", isTrue);
console.log("false:", isFalse);
console.log("typeof true:", typeof isTrue); // boolean

// 比較演算子の結果は真偽値
let age = 20;
let isAdult = age >= 18;
console.log("20歳は成人？", isAdult); // true

let isEqual = 5 === 5;
let isNotEqual = 5 !== 3;
console.log("5 === 5:", isEqual); // true
console.log("5 !== 3:", isNotEqual); // true

// ========================================
// 真偽値の変換
// ========================================
// 他の型から真偽値への変換 truthy, falsy
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean('hello'):", Boolean("hello")); // true
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false

// 暗黙的な真偽値変換（if文などで使用）
if (1) {
    console.log("1は真として扱われる");
}

if (0) {
    console.log("これは実行されない");
} else {
    console.log("0は偽として扱われる");
}

// 論理演算子 補足 linuxでも同じ
let result1 = true && false; // false
let result2 = true || false; // true
let result3 = !true; // false

console.log("true && false:", result1);
console.log("true || false:", result2);
console.log("!true:", result3);

// ========================================

// ========================================
// 配列で値をまとめる
// ========================================
// 配列の作成方法（いろんな方法）
let fruits1 = ["りんご", "バナナ", "オレンジ"]; // リテラル記法
let fruits2 = new Array("りんご", "バナナ", "オレンジ"); // Arrayコンストラクタ
let numbers = [1, 2, 3, 4, 5];
let mixed = ["文字列", 123, true, null]; // 異なる型を混在可能
let empty = []; // 空の配列

console.log("fruits1:", fruits1);
console.log("fruits2:", fruits2);
console.log("numbers:", numbers);
console.log("mixed:", mixed);
console.log("empty:", empty);

// 配列の長さを知る
console.log("fruits1の長さ:", fruits1.length);

// ========================================
// 配列のCRUD操作
// ========================================
// CREATE（作成）- 要素の追加
let colors = ["赤", "青"];
console.log("追加前:", colors);

// 末尾に追加
colors.push("緑");
console.log("push後:", colors); // ["赤", "青", "緑"]

// 先頭に追加
colors.unshift("黄");
console.log("unshift後:", colors); // ["黄", "赤", "青", "緑"]

// 指定位置に追加
colors.splice(2, 0, "紫"); // インデックス2の位置に"紫"を挿入
console.log("splice後:", colors); // ["黄", "赤", "紫", "青", "緑"]

// READ（読み取り）- 要素の取得
console.log("最初の要素:", colors[0]); // 黄
console.log("最後の要素:", colors[colors.length - 1]); // 緑
console.log("インデックス2の要素:", colors[2]); // 紫

// 配列の一部を取得
let subArray = colors.slice(1, 4); // インデックス1から3まで
console.log("部分配列:", subArray); // ["赤", "紫", "青"]

// UPDATE（更新）- 要素の変更
colors[1] = "オレンジ"; // インデックス1の要素を変更
console.log("更新後:", colors); // ["黄", "オレンジ", "紫", "青", "緑"]

// 複数要素を一括更新
colors.splice(2, 2, "ピンク", "水色"); // インデックス2から2つを"ピンク"と"水色"に置換
console.log("一括更新後:", colors);

// DELETE（削除）- 要素の削除
// 末尾から削除
let removedLast = colors.pop();
console.log("削除された要素:", removedLast);
console.log("pop後:", colors);

// 先頭から削除
let removedFirst = colors.shift();
console.log("削除された要素:", removedFirst);
console.log("shift後:", colors);

// 指定位置の要素を削除
let removed = colors.splice(1, 1); // インデックス1から1つ削除
console.log("削除された要素:", removed);
console.log("splice削除後:", colors);

// 配列の検索
let animals = ["犬", "猫", "鳥", "魚", "犬"];
console.log("動物配列:", animals);

// 要素の存在確認
console.log("'猫'は存在する？", animals.includes("猫")); // true
console.log("'象'は存在する？", animals.includes("象")); // false

// 要素のインデックス検索
console.log("'犬'の最初のインデックス:", animals.indexOf("犬")); // 0
console.log("'犬'の最後のインデックス:", animals.lastIndexOf("犬")); // 4

// 配列の反復処理
console.log("配列の各要素:");
animals.forEach((animal, index) => {
    console.log(`${index}: ${animal}`);
});

// 配列の結合
let fruits = ["りんご", "バナナ"];
let vegetables = ["にんじん", "じゃがいも"];
let food = fruits.concat(vegetables);
console.log("結合後:", food);

// 配列の展開（スプレッド演算子）
let allFood = [...fruits, ...vegetables, "米"];
console.log("展開後:", allFood);

// 注意!! 配列は型としてはobjectである
console.log("typeof fruits:", typeof fruits); // object
console.log("typeof numbers:", typeof numbers); // object
console.log("typeof mixed:", typeof mixed); // object
console.log("typeof empty:", typeof empty); // object
console.log("typeof animals:", typeof animals); // object
console.log("typeof food:", typeof food); // object

// ========================================
// オブジェクトでデータを作る
// ========================================

// オブジェクトの作成方法（いろんな方法）
let person1 = { name: "太郎", age: 20 }; // リテラル記法
let person2 = new Object({ name: "花子", age: 20 }); // Objectコンストラクタ
let person3 = Object.create(person1); // Object.createメソッド

console.log("person1:", person1);
console.log("person2:", person2);
console.log("person3:", person3);

// ========================================
// nullとundefined
// ========================================
// jsにおいて何もないことを表すのはnullとundefined
// ニュアンスの違いとしてnullは予定通りに何もないことを表すが、undefinedはエラー的に何もないことを示すことが多い

// ========================================
// typeof演算子で型を確認
// ========================================
//今までの例で多く使ったので説明は割愛
// 演算子として以下の様にり利用し要素やリテラルの型を確認することができる
console.log("typeof 1:", typeof 1); // number
console.log("typeof 'hello':", typeof "hello"); // string
console.log("typeof true:", typeof true); // boolean
console.log("typeof null:", typeof null); // object　※これ注意 null はobject型である
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof [1, 2, 3]:", typeof [1, 2, 3]); // object

// ========================================
// 関数を作る
// ========================================
// 定義と実行を覚える
// 定義
function add(a, b) {
    return a + b;
}
// 実行
console.log(add(1, 2)); // 3

// 関数は処理を使いまわすことができるので非常に便利

// ========================================
// パラメーターと引数
// ========================================
// 上の例でいうとaddが関数であり、1と2が引数である
// 関数の呼び出し時に引数を渡すことができる
console.log(add(1, 2)); // 3

// ========================================
// return文で値を返す
// ========================================
// 関数内でreturn文を使うことで値を返すことができる
function add(a, b) {
    return console.log(a + b);
}
add(1, 2); // これでも3が出力される 正確にはconsole.logが実行されてreturnとしてはundefinedが返される

// ========================================
// 関数の巻き上げ
// ========================================
//以下の結果はどうなるか？ 関数の呼び出しが定義より前にあるケース
console.log(minus(1, 2)); // 3
function minus(a. b){
    erturn a-b;
}

// 答えは実行できる 普通に-1が返される
// いまはざっとした理解で大丈夫ですが、javascript実行エンジンが実行前にファイルを全て読み込み委、functionを巻き上げ（ファイルの先頭に持っていくようなイメージ）するから