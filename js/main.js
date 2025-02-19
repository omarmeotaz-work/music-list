const total = document.getElementById("total");
const hide = document.getElementById("mix-hide");
const show = document.getElementById("mix-show");
const musicList = [
  "Time to Pretend",
  "O-o-oh Child",
  "Wish You Were Here",
  "Heroes",
  "I Put a Spell on You",
  "Call Me",
  "Paper Planes",
  "Jolene",
  "You Don't Own Me",
  "Fast Car",
  "Run the World (Girls)",
  "Superstition",
];
function musicmix(list) {
  for (let i = 0; i < list.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `${i + 1} :${list[i]} `;
    hide.append(li);
    total.innerText = `${list.length} great songs`;
  }
}

show.addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    musicmix(musicList);
  },
  { once: true }
);
