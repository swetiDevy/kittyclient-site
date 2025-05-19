function setYear(year: number, text: string): void {
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = text + year.toString() ;
    } else {
        console.error("Element o id 'year' nie został znaleziony.");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const kitty = "Kitty Client© ";
    setYear(currentYear,kitty);
});

