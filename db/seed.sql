use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 10000, 1),
    ('Salesperson', 8000, 1),
    ('Lead Engineer', 10000, 2),
    ('Software Engineer', 10000, 2),
    ('Account Manager', 16000, 3),
    ('Accountant', 15000, 3),
    ('Legal Team Lead', 20000, 4),
    ('Lawyer', 10000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('George', 'Norris', 1, NULL),
    ('Gerald', 'Potter', 2, 1),
    ('Ashley', 'Smith', 3, NULL),
    ('Kevin', 'Mills', 4, 3),
    ('Kim', 'Jones', 5, NULL),
    ('Makayla', 'Brown', 6, 5),
    ('Sarah', 'Gill', 7, NULL),
    ('Tom', 'Sawyer', 8, 7);
