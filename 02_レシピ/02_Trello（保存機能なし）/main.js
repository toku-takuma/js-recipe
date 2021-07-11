const inputElement1 = document.getElementById("input-todo1")
const inputElement2 = document.getElementById("input-todo2")
const inputElement3 = document.getElementById("input-todo3")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

// 追加ボタンを押したときの処理を登録
// addButton.onclick = function() {
//   // カードを作成する
//   const card = createCard(inputElement.value)
//   container.append(card)

//   // 入力欄を空にする
//   inputElement.value = ""
// }
inputElement1.onkeypress=function(e){
  if(e.keyCode===13){
    const card = createCard(inputElement1.value)
    container.append(card)
    inputElement1.value=""
  }
}
inputElement2.onkeypress=function(e){
    if(e.keyCode===13){
      const card = createCard(inputElement2.value)
      container.append(card)
      inputElement1.value=""
    }
  }
  inputElement3.onkeypress=function(e){
    if(e.keyCode===13){
      const card = createCard(inputElement3.value)
      container.append(card)
      inputElement1.value=""
    }
  }
    
// 共通の処理：テキストからカードを作成する
const createCard = function(text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}