function login() {
    var userid = prompt("아이디입력", "ssafy");
    if (userid.length == 0) {
        alert("아이디 입력!!!");
        //return;
    }
    var userpass = prompt("비밀번호입력", "1234");
    if (userpass.length == 0) {
        alert("비밀번호 입력!!!");
        //return;
    }
    if (userid == "ssafy" && userpass == "1234") {
        alert("로그인 성공");
        document.getElementById("profile_img").src = "img/profile.png";
        document.getElementById("header_nav_confirm_off").style.display = "none";
        document.getElementById("header_nav_confirm_on").style.display = "block";
    } else {
        alert("아이디 또는 비밀번호를 확인 하십시오");
    }
}

function logout() {
    document.getElementById("profile_img").src = "img/noimg.png";
    document.getElementById("header_nav_confirm_off").style.display = "block";
    document.getElementById("header_nav_confirm_on").style.display = "none";
}

var cnt = 0;
function slideDown(areaid) {
    if (areaid.style.display == "none") {
        areaid.style.display = "block";
        cnt++;
    } else if (areaid.style.display == "block") {
        areaid.style.display = "none";
        cnt--;
    }

    if (cnt == 4) {
        document.getElementsByClassName("store_display_off")[0].style.display = "block";
        document.getElementsByClassName("store_display_on")[0].style.display = "none";
    } else {
        document.getElementsByClassName("store_display_off")[0].style.display = "none";
        document.getElementsByClassName("store_display_on")[0].style.display = "block";
    }
}

function allSlide(onoff) {
    var subs = document.getElementsByClassName("store_item_sub");
    if (onoff == "on") {
        for (i of subs) i.style.display = "block";
        cnt = 4;
        document.getElementsByClassName("store_display_off")[0].style.display = "block";
        document.getElementsByClassName("store_display_on")[0].style.display = "none";
    } else {
        for (i of subs) i.style.display = "none";
        cnt = 0;
        document.getElementsByClassName("store_display_off")[0].style.display = "none";
        document.getElementsByClassName("store_display_on")[0].style.display = "block";
    }
}

function poll() {
    var votes = document.getElementsByName("vote_answer");
    for (i of votes) {
        if (i.checked == true) {
            sel_menu = i.value;
            break;
        }
    }
    alert(sel_menu + "를 선택했습니다.")
}

function pollMake() {
    window.open("pollmake.html", "poll", "width=420, height=300, top=0, left=0");
}

function addAnswer() {
    var listDiv = document.getElementById("poll_answer_list");

    var divEl = document.createElement("div");
    divEl.className = "poll_answer_item";
    var inputEl = document.createElement("input");
    inputEl.type = "text";
    inputEl.name = "answer";
    var buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.className = "button";
    buttonEl.appendChild(document.createTextNode("삭제"));

    buttonEl.addEventListener("click", function (e) {
        listDiv.removeChild(this.parentNode);
    });

    divEl.appendChild(inputEl);
    divEl.appendChild(buttonEl);
    listDiv.appendChild(divEl);
}

function makePoll() {
    if (document.querySelector("#question").value.length == 0) {
        alert("비었음");
        return;
    }

    var answers = document.getElementsByName("answer");
    for ([i, j] of answers.entries()) {
        if (j.value.length == 0) {
            alert((i + 1) + "번 째 요소가 비었음");
            return;
        }
    }
    alert("투표생성");
    self.close();
}
// finding("[name='answer']");
/*
//로그인----------------------------------------------------------
//로그아웃--------------------------------------------------------
//지역매장 펼치기/접기--------------------------------------------
//전국매장 펼치기 / 접기------------------------------------------
//투표하기-------------------------------------------------------
//관리자(투표만들기)----------------------------------------------
//답변 항목 추가-------------------------------------------------
//투표생성----------------------------------------------------------
function makePoll() {
    if (!document.querySelector("#question").value) {
        alert("질문 내용을 입력하시오.");
        return;
    }

    var answers = document.getElementsByName("answer");
    for (var i = 0; i < answers.length; i++){
        if (!answers[i].value) {
            alert("답변 항목에 입력하시오");
            return;
        }
    }
    alert("투표를 생성합니다.");
    self.close();
}
*/