const search = document.getElementById('search');
const random = document.getElementById('randomSearch');
const header = document.getElementById('searchedHeader');
const searchItem = document.getElementById('searchItem');
const searchFor = document.getElementById('searchedFor');
const results = document.getElementById('wikiData');

header.style.display = 'none';

function searchCall() {
  // https://cors-anywhere.herokuapp.com/ if needed on codepen

  const api = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchItem.value}&limit=5&origin=*`;

  header.style.display = 'block';

  function displayResults(d) {
    results.innerHTML = '';
 

    const titles = d[1];
    const excerpt = d[2];
    const link = d[3];

    for (let i = 0; i < titles.length; i++) {
      const result = `<a href="${link[i]}" target="_blank">
      <div class="results fade-in">
      <span class="resultHeader">${titles[i]}</span>
      <br/>
      <span>${excerpt[i]}</span>
      </div></a>`;
      results.innerHTML += result;
    }
  }

  fetch(api)
    .then((response) => {
      response.json()
        .then((data) => {
          displayResults(data);
        });
    })
    .catch((err) => {
      console.error(err);
    });
}

function randomCall() {
  const api = 'https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=5&rnnamespace=0&prop=extracts&explaintext&exintro=&format=json&origin=*';

  header.style.display = 'block';

  function displayResults(d) {
    results.innerHTML = '';
    searchFor.innerHTML = 'Check out these random articles!';

    for (let i = 0; i < d.query.random.length; i++) {
      const result = `<a href="http://en.wikipedia.org/?curid=${d.query.random[i].id}" target="_blank">
      <div class="results fade-in">
      <span class="resultHeader">${d.query.random[i].title}</span>
      </div></a>`;
      results.innerHTML += result;
    }
  }

  fetch(api)
    .then((response) => {
      response.json()
        .then((data) => {
          displayResults(data);
        });
    })
    .catch((err) => {
      console.error(err);
    });
}

search.addEventListener('click', searchCall);
random.addEventListener('click', randomCall);

searchItem.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    searchCall();
  }
});