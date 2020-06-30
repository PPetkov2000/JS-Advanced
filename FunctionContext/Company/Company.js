class Company {
  constructor() {
    this.departments = [];
  }

  addEmployee(username, salary, position, department) {
    if (!username || !salary || !position || !department || salary < 0) {
      throw new Error("Invalid input!");
    }

    let obj = this.departments.find((d) => d.name === department);

    if (obj === undefined) {
      obj = {
        name: department,
        employees: [],
        avgSalary: function () {
          return (
            this.employees.reduce((acc, curr) => acc + curr.salary, 0) /
            this.employees.length
          );
        },
      };
      this.departments.push(obj);
    }
    obj.employees.push({ username, salary, position });

    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  bestDepartment() {
    let output = "";

    this.departments
      .sort((a, b) => b.avgSalary() - a.avgSalary())
      .slice(0, 1)
      .forEach((d) => {
        output += `Best Department is: ${
          d.name
        }\nAverage salary: ${d.avgSalary().toFixed(2)}\n`;
        d.employees
          .sort(
            (a, b) =>
              b.salary - a.salary || a.username.localeCompare(b.username)
          )
          .forEach(
            (emp) =>
              (output += `${emp.username} ${emp.salary} ${emp.position}\n`)
          );
      });

    return output.trim();
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

// Points 100/100 - Got help for this one
