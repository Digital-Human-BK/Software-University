function generateReport() {
    const headers = document.querySelectorAll('th input');
    const employeesList = document.querySelectorAll('tbody tr');

    const report = [];

    for (let employee of employeesList) {
        let employeeInfo = Array.from(employee.children);
        let info = {};

        for (let i = 0; i < headers.length; i++) {
            const field = headers[i];

            if (field.checked == true) {
                let key = field.getAttribute('name');
                let value = employeeInfo[i].textContent;

                info[key] = value;
            }
        }
        report.push(info);
    }
    document.getElementById('output').textContent = JSON.stringify(report, null, 2);   
}