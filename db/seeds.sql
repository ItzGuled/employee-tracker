INSERT INTO departments (dept_name)
VALUES 
('Engineering'),
('Accounting'),
('HR'),
('Sales');

INSERT INTO roles (title, dept_id, salary)
VALUES
('Software Engineer', 1, 70000),
('Senior Engineer',1, 130000),
('Accountant', 2, 60000),
('Credit Analyst', 2, 75000),
('HR Director', 3, 105000),
('Recruiter', 3, 55000),
('Sales Associate', 4, 40000),
('Account Manager', 4, 50000);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Tony', 'Soprano', 1, Null ),
('Silvio', 'Dante', 2, NULL),
('Artie', 'Bucco', 3, 1),
('Phil', 'Leotardo', 4, 2),
('Johnny', 'Sacks', 1, 1),
('Paulie', 'Gualtieri', 1, 2 ),
('AJ', 'Soprano', 3, 1),
('Carmela', 'Soprano', 4, 2),
('Patsy', 'Parisi', 1, 1),
('Vito', 'Spatafore', 2, 2);

