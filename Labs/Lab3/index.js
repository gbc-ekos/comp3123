const http = require("http");
const employeeModule = require("./employee");
console.log("Lab 03 -  NodeJs");

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Welcome to Lab Exercise 03</h1>');
            return;
        }

        if (req.url === '/employee') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(employeeModule.getEmployees()));
            return;
        }

        if (req.url === '/employee/names') {
            const names = employeeModule.getEmployeeNames();
            const sortedNames = names.sort();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');

            res.end(JSON.stringify(sortedNames));
            return;
        }

        if (req.url === '/employee/totalsalary') {
            const salaries = employeeModule.getEmployeeSalaries();
            const totalSalary = salaries.reduce((acc, cur) => acc + cur, 0);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ total_salary: totalSalary }));
            return;
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})