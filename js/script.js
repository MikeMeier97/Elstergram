let comments = [
  {
    name: "MikeHowards",
    commentText: "Sehr sehr schöner Ort",
  },
];

function onload() {
  renderComments();
}

function like() {
  document.getElementById("likeButton").src = "./img/heart-red.png";
}

function pushComment() {
  console.log();
}

function renderComments() {
  let commentField = document.getElementById("commentField");
  commentField.innerHTML = ``;
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    commentField.innerHTML += `<p class="pl-2"><b>${comment["name"]} </b> ${comment["commentText"]}</p>`;
  }
}
