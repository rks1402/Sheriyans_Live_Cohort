async function getQuote() {
    try {
        // Show loader again when new quote is being fetched
        document.querySelector(".loader").classList.remove('hidden');
        document.getElementById("quote").textContent = "";
        document.getElementById("author").textContent = "";

        const response = await fetch("http://api.quotable.io/random");
        const data = await response.json();

        document.querySelector(".loader").classList.add('hidden');
        document.getElementById("quote").textContent = `"${data.content}"`;
        document.getElementById("author").textContent = `— ${data.author}`;
    } catch (error) {
        document.querySelector(".loader").classList.add('hidden');
        document.getElementById("quote").textContent = "Failed to fetch quote.";
        document.getElementById("author").textContent = "";
        console.error(error);
    }
}

function copyQuote(){
    const quoteText = document.getElementById("quote").textContent;
    const authorText = document.getElementById("author").textContent;
    const fullQuote = `${quoteText} ${authorText}`;
    const tooltip = document.getElementById("copy-tooltip");

    if(quoteText && authorText){
        navigator.clipboard.writeText(fullQuote)
            .then(() => {
                tooltip.classList.add("show");
                setTimeout(() => {
                    tooltip.classList.remove("show");
                }, 1500); // Tooltip disappears after 1.5 seconds
            })
            .catch((error) => {
                console.error("Failed to copy quote: ", err);
            })
    }
}

function toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}

getQuote();