document.getElementById("view_time").innerHTML = getNow();

function getNow() {
    const now = new Date();
    const year = now.getFullYear();
    const mon = now.getMonth() + 1; //１を足すこと
    const day = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    //出力用
    const s = year + "年" + mon + "月" + day + "日";
    return s;
}
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////

//ボタンを押す
const button = document.getElementById("addBtn");
//リストもとりたい
const lists = document.getElementById("lists");


const today = new Date();
const year2 = today.getFullYear();
const month2 = today.getMonth() + 1;
const day2 = today.getDate();


const alldate = year2 + '年' + month2 + '月' + day2 + '日';
console.log(alldate);

//ボタン2を押したら動くよ
button.addEventListener("click", function () {

    //リストを追加＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃

    // console.log("ボタンを押したよ。");
    //リストタグが挿入される↓
    // const list = document.createElement("li");
    //innerタグで
    //下のlistのinnertextの方だけだとエラーにならない
    // list.innerText = "今日の日付";
    // lists.appendChild(list);


    //テーブルを追加＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃＃
    let table = document.getElementById('targetTable');
    let newRow = table.insertRow();

    let newCell = newRow.insertCell();
    let newText = document.createTextNode('山田');
    newCell.appendChild(newText);

    newCell = newRow.insertCell();
    //ここに日付情報が入る
    newText = document.createTextNode(alldate);
    newCell.appendChild(newText);






});











/*
innnerTextは 日本語ならおk






*/



// //関数(メソッド)
// async function addList(user) {
//     const list = document.createElement("li");
//     list.innerText = user.name;
//     // lists.appendChild(list);
// }


// async function listUsers() {
//     const element = document.getElementById('list')
//     const liLast = document.createElement('li')
//     element.appendChild(view_time2);
// }

// /////////////////////////////////////////////////////////////////
// function addElement() {
//     // 要素を作成する
//     const element = document.createElement("text");
//     // 要素を追加する「親要素」を指定する。
//     const parent = document.getElementById("parent");
//     // 要素を追加する
//     parent.appendChild(view_time2);
//     // 次の要素を改行して追加するために br 要素を追加する
// }

























/*  
●fetchを使うと外部とデータのやり取りができる。引数はURLなど


●createElementをつかうと、HTML要素を生成できる
→list要素を作る時は createElementを使う↓こんな感じでいい
    const list = document.createElement("li");
    console.log(list);
→listタグの中に文字を入れたい
    list.innerText = "今日の日付"

●addEventListenerの第二引数はコールバック関数をとることになっている

●innerHTMLとは、html要素の中身を変更できるJavaScriptの便利な機能
●



*/