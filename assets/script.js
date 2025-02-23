const ul = document.querySelector(".js-items");
const template = document.querySelector(".js-template").content;

const docFrg = document.createDocumentFragment();

films.forEach((item) => {
  const clone = template.cloneNode(true);
  clone.querySelector(".js-tittle").textContent = item.title;
  clone.querySelector(".js-img").src = item.poster;
  clone.querySelector(".js-genres").textContent = item.overview;
  clone.querySelector(".js-overview").textContent = item.genres;
  docFrg.append(clone);
});

ul.append(docFrg);  