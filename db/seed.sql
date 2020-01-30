INSERT INTO 
    department (name) 
VALUES
    ("Legal"),
    ("Sales"),
    ("Engineering"),
    ("Finance");

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 70000, 3),
       ("Engineer", 90000, 12),
       ("Lawyer", 90000, 24,),
       ("Acountant", 70000, 13),
       ("Sales Person", 70000, 35);

INSERT INTO employee (first_name, last_name, role, manager_id)
VALUES ("Sarah", "Smith", "Sales Lead", 444),
       ("Tom", "Hamm", "Engineer", NULL),
       ("Kevin", "Blue", "Lawyer", NULL),
       ("Susan", "Brown", "Accountant", NULL),
       ("Bill", "Boyle", "Sales Person", NULL);


    