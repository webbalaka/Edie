// const show_card1 = document.getElementById("card1");
// const show_card2 = document.getElementById("card2");
// const show_card3 = document.getElementById("card3");
// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");

function change1 (event) {
    if (event.type == 'mouseover') {
        card1.style.boxShadow = "0px 10px 30px rgba(51, 51, 51, 0.1)";
        card1.style.cursor = "pointer";
        btn1.style.background = "#2D9CDB";
        btn1.style.color = "white";
    }
    if (event.type == 'mouseout') {
        card1.style.boxShadow = "";
        btn1.style.background = "#E0E0E0";
        btn1.style.color = "#828282";
    }
}

function change2 (event) {
    if (event.type == 'mouseover') {
        card2.style.boxShadow = "0px 10px 30px rgba(51, 51, 51, 0.1)";
        card2.style.cursor = "pointer";
        btn2.style.background = "#2D9CDB";
        btn2.style.color = "white";
    }
    if (event.type == 'mouseout') {
        card2.style.boxShadow = "";
        btn2.style.background = "#E0E0E0";
        btn2.style.color = "#828282";
    }
}

function change3 (event) {
    if (event.type == 'mouseover') {
        card3.style.boxShadow = "0px 10px 30px rgba(51, 51, 51, 0.1)";
        card3.style.cursor = "pointer";
        btn3.style.background = "#2D9CDB";
        btn3.style.color = "white";
    }
    if (event.type == 'mouseout') {
        card3.style.boxShadow = "";
        btn3.style.background = "#E0E0E0";
        btn3.style.color = "#828282";
    }
}


card1.onmouseover = card1.onmouseout = change1;
card2.onmouseover = card2.onmouseout = change2;
card3.onmouseover = card3.onmouseout = change3;

