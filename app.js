let participantCount;
let word = "";
let gameCount = 0;
let $userInputWord = document.querySelector("#user-input-word");

// promptHandler
const promptHandler = () => {
    let userInput = window.prompt("참가자 수: ");
    // 참가자 수가 2 이상인지 확인
    if (userInput < 2) {
        alert("참가자 수는 2명 이상이어야 합니다.");
        return promptHandler();
    }
    // 참가자 수 변경
    participantCount = parseInt(userInput);
};

// 입력 버튼 이벤트 핸들러
const onClickInputButton = (event) => {
    let userInput = document.querySelector("#input").value;
    // 올바른 입력인지 확인
    if (isValidInput(userInput)) {
        // 1: 올바른 입력
        // 제시어 변경
        word = userInput;
        // 화면 표시 제시어 변경
        changeUserInputWord(word);
        // 게임 카운트 증가
        checkNthParticipant(++gameCount, participantCount);
    } else {
        // 2: 올바르지 않은 입력
        // 경고창 띄우기
        alert("올바른 입력이 아닙니다.");
    }
    // 입력칸 비워두기
    document.querySelector("#input").value = "";
};

// 올바른 입력인지 확인 함수
const isValidInput = (input) => {
    // 입력이 비었으면 false
    if (input === "") {
        return false;
    }
    // 제시어가 빈 문자열이 아닌지 확인
    if (word === "") {
        return true;
    }
    // 제시어의 마지막 글자와 입력한 단어의 첫 글자가 같은지 확인
    if (compareLetter(word, input) === false) {
        return false;
    }
    // 문제 없으면 return true
    return true;
};

// change nth participant
const checkNthParticipant = (gameCount, participantCount) => {
    document.querySelector("#current-participant").innerText = `${(gameCount % participantCount) + 1}번째 참가자`;
};

// change user-input-word
const changeUserInputWord = (word = "") => {
    $userInputWord.innerText = `제시어: ${word}`;
};

// compare last letter of word and first letter of input
const compareLetter = (word, input) => {
    return word[word.length - 1] === input[0];
};

document.getElementById("submit-btn").addEventListener("click", onClickInputButton);

// 초기화
promptHandler();
changeUserInputWord();
document.querySelector("#input").focus();
document.querySelector("#input").value = word;
checkNthParticipant(gameCount, participantCount);
