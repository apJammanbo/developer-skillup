function onload() {
  var undoButton = document.getElementById("undoButton");
  var addButton = document.getElementById("addButton");
  var subButton = document.getElementById("subButton");
  var redoButton = document.getElementById("redoButton");

  undoButton.onclick = handleClick;
  addButton.onclick = handleClick;
  subButton.onclick = handleClick;
  redoButton.onclick = handleClick;
}

// input에 숫자를 입력하고 + 버튼을 클릭하면 결과값에 입력한 숫자 만큼 더해지고 input의 값은 없어진다.
// input에 숫자를 입력하고 - 버튼을 클릭하면 결과값에 입력한 숫자 만큼 빼지고 input의 값은 없어진다.
// input에 유효하지 않은 숫자를 입력하고 +, - 버튼을 클릭하면 동작은 무시 되되고 input의 값은 없어진다.(정수만 입력할 수 있다.)

// undo를 클릭하면 이전 값으로 돌아간다. undo 버튼을 클릭해도 이전 인풋값은 유지 된다.
// redo를 클릭하면 이후 값으로 되돌린다. redo 버튼을 클릭해도 이전 인풋값은 유지 된다.
// undo와 redo는 동작이 가능할때만 활성화 상태가 된다.

// input에 유효한 숫자를 입력하고 +, - 버튼을 클릭했을때 이후 값들은 없어지고 Redo 버튼은 비활성화된다.
// -> 1 입력 후 + : 결과값 1
// -> 2 입력 후 + : 결과값 3
// -> 3 입력 후 + : " 결과값 6
// -> undo 버튼 : 결과값 3
// -> 4 입력 후 + : 결과값 7
// -> undo 버튼 : 결과값 3 -> redo 버튼 활성화
// -> undo 버튼 : 결과값 1
// -> undo 버튼 : 결과갑 0 -> undo 버튼 비활성화
// -> redo 버튼 : 결과갑 1 -> undo 버튼 활성화

let result = [0];
let currentIndex = 0;

function handleClick(event) {
  const actionId = event.target.id;

  if (actionId === "addButton" || actionId === "subButton") {
    const number = popInputValue();
    if (number) {
      addNumber(number * (actionId === "subButton" ? -1 : 1));
    }
  } else if (actionId === "undoButton") {
    currentIndex -= 1;
  } else if (actionId === "redoButton") {
    currentIndex += 1;
  }

  setDisplay();
}

function popInputValue() {
  const inputValue = document.getElementById("inputbox").value;
  document.getElementById("inputbox").value = "";
  if (/^[-|1-9][0-9]*$/.test(inputValue)) {
    const number = Number(inputValue);
    if (number) {
      return number;
    }
  }
  alert(`${inputValue}는 유효하지 않습니다.`);
  return null;
}

function addNumber(number) {
  result = result.splice(0, currentIndex + 1);
  result.push(result[currentIndex] + number);
  currentIndex += 1;
}

function setDisplay() {
  document.getElementById("valuebox").innerText = result[currentIndex];
  document.getElementById("undoButton").disabled = !(currentIndex > 0);
  document.getElementById("redoButton").disabled = !(currentIndex < result.length - 1);
}
