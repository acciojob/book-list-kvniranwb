const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

// ADD BOOK
submitBtn.addEventListener("click", function () {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if (!title || !author || !isbn) return;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    bookList.appendChild(row);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
});


bookList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.closest("tr").remove();
    }
});