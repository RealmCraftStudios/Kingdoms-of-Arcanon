document.addEventListener('DOMContentLoaded', function() {
    const filterNameInput = document.getElementById('filter-name');
    const filterCategorySelect = document.getElementById('filter-category');
    const dataTable = document.getElementById('data-table');

    // Load data on page load
    loadData();

    // Event listeners for filters
    filterNameInput.addEventListener('input', loadData);
    filterCategorySelect.addEventListener('change', loadData);

    function loadData() {
        // Fetch data from CSV file (replace with your CSV file path)
        fetch('data.csv')
            .then(response => response.text())
            .then(data => {
                const rows = data.trim().split('\n').map(row => row.split(','));
                displayData(rows);
            })
            .catch(error => console.error('Error loading data:', error));
    }

    function displayData(rows) {
        const filterName = filterNameInput.value.trim().toLowerCase();
        const filterCategory = filterCategorySelect.value.trim();

        // Clear previous table content
        dataTable.innerHTML = '';

        // Create table header
        const headerRow = document.createElement('tr');
        const headers = rows.shift(); // Assuming the first row contains headers
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        dataTable.appendChild(headerRow);

        // Create table rows based on filters
        rows.forEach(row => {
            const name = row[0].toLowerCase();
            const category = row[1];

            if ((filterName === '' || name.includes(filterName)) &&
                (filterCategory === '' || category === filterCategory)) {
                const tr = document.createElement('tr');
                row.forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell;
                    tr.appendChild(td);
                });
                dataTable.appendChild(tr);
            }
        });
    }
});
