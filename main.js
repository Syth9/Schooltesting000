
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const rows = document.querySelectorAll(".school-table tbody tr");

    
    function filterTable() {
        const filterValue = searchInput.value.toLowerCase();

        rows.forEach((row) => {
            const name = row.querySelector("td:nth-child(3)").textContent.toLowerCase();
            const id = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
              const section = row.querySelector("td:nth-child(6)").textContent.toLowerCase();
                


            if (section.includes(filterValue) || name.includes(filterValue) || id.includes(filterValue)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
               

            }
        });
    }

   
    searchInput.addEventListener("input", filterTable);
});

