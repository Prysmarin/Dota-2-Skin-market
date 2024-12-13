let currentPage = 1;

document.getElementById("nextPage").addEventListener("click", () => {
    currentPage++;
    fetch(`/api/articles?page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById("content");
            data.articles.forEach(article => {
                content.innerHTML += `<p>${article.title}</p>`;
            });
        });
});