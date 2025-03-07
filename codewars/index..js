document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector("#search-form");
    const searchInput = document.querySelector("#search-input");
    const listItems = document.querySelectorAll("#tag-list li");

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();

        listItems.forEach((item) => {
            const text = item.textContent;
            const lowerText = text.toLowerCase();

            if (!query) {
                item.innerHTML = text;
                item.style.display = "list-item";
                return;
            }

            const index = lowerText.indexOf(query);

            if (index !== -1) {
                const highlightedText = text.substring(index, index + query.length);
                item.innerHTML = text.replace(
                    new RegExp(highlightedText, "gi"),
                    (match) => <span style="background-color: yellow;">${match}</span>
                );
                item.style.display = "list-item";
            } else {
                item.style.display = "none";
            }
        });
    });
});