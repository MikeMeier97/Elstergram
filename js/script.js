var comments = [
  {
    name: "MikeHowards",
    commentText: "Sehr sehr schöner Ort",
  },
  {
    name: "Lisa24",
    commentText: "Da wäre ich jetzt auch gerne..",
  },
];

function onload() {
  renderComments();
}

function like() {
  document.getElementById("likeButton").src = "./img/heart-red.png";
  document.getElementById('Likes').innerHTML = `Gefällt 36 Mal`;
}

function pushComment() {
  let Username = document.getElementById('commentUsername').value; 
  let Text = document.getElementById('commentText').value; 
  comments.push = {"name": Username, "commentText": Text};
  console.log(comments);
  document.getElementById('commentUsername').value = ``;
  document.getElementById('commentText').value = ``;
  renderComments();
}

function renderComments() {
  let commentField = document.getElementById("commentField");
  commentField.innerHTML = ``;
  for (let i = 0; i < comments.length; i++) {
    let comment = comments[i];
    commentField.innerHTML += `<p class="commentLine"><b>${comment["name"]} </b> ${comment["commentText"]}</p>`;
  }
}
