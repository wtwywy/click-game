function doSomething() {
    var numElement = document.getElementById("num");
    // Get the current value and convert it to a number
    var currentNum = parseInt(numElement.innerText);
    // Increment the value by 1
    var newNum = currentNum - 1;
    if(newNum < 0){
        var button = document.getElementById("click");
        button.style.display = "none";
        return;
    }
    numElement.innerText = newNum;
    desc(newNum);
    updateBossImage(newNum)

    // Set the updated value back to the element
}

function desc(number) {
    var descElement = document.getElementById("desc");

    if (number > 490) {
        descElement.innerText = "จอมมาร: เข้ามาเลย";
    } else if (number >= 450) {
        descElement.innerText = "ก็เก่งเหมือนกันนี่";
    } else if (number >= 400) {
        descElement.innerText = "จอมมาร: ฝีมือก็พอใช้ได้แต่จะปราบข้าได้จริงรึ";
    } else if (number >= 350) {
        descElement.innerText = "พยายามเข้า +++";
    } else if (number >= 251) {
        descElement.innerText = "อย่ายอมแพ้";
    } else if (number >= 150) {
        descElement.innerText = "ครึ่งทางแล้วล่ะ !";
    } else if (number >= 75) {
        descElement.innerText = "จอมมาร: โอ้ยย";
    } else if (number > 0) {
        descElement.innerText = "จะหมดแล้วอีกนิดเดียว!";
    } else if (number == 0) {
        descElement.innerText = "สุดยอดมากคนเก่ง เอาให้คนข้าง ๆ ดูสิ อาจจะมีรางวัลให้";
    } else {
        descElement.innerText = "แปลกจัง เป็นงี้ได้ไง";
    }
}

function updateBossImage(hp) {
    var bossImageElement = document.getElementById("bossImage");

    if (hp > 400) {
        bossImageElement.src = "images/demon1.png";
    } else if (hp > 251) {
        bossImageElement.src = "images/demon2.png";
    } else if (hp > 0) {
        bossImageElement.src = "images/demon3.png";
    } else {
        bossImageElement.src = "images/demon4.png";
    }
}
