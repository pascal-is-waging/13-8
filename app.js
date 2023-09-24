let title = "Space is a privilege";
let written =
  "anything that creates volume cradles privilege, from the 1 million sq ft data centers to the claustrophobic space of your room; both of which predicate this very website.";
let words1 = title.split(" ");
let words2 = written.split(" ");
console.log(words1);
console.log(words2);
const ourdiv = $(".contain");
const temp2 = document.createElement("p");
for (let x = 0; x < words1.length; x++) {
  const neword = document.createElement("span");
  neword.classList.add("word1");
  neword.innerHTML = `${words1[x]} `;
  temp2.append(neword);
  temp2.innerHTML += ` `;
}
ourdiv.append(temp2);
const temp = document.createElement("p");
temp.classList.add("para2");
for (let x = 0; x < words2.length; x++) {
  //   const neword = $("<span></span>");
  const neword = document.createElement("span");
  //   neword.text(words2[x]);
  //   neword.addClass("word2");
  neword.classList.add("word2");
  neword.innerHTML = `${words2[x]} `;
  temp.append(neword);
  temp.innerHTML += ` `;
}
ourdiv.append(temp);

// $(".contain").
