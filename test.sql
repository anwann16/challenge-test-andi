-- Active: 1697437123317@@127.0.0.1@5432@test@public

-- Membuat table
CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    parent_id INT,
    FOREIGN KEY (parent_id) REFERENCES person(id)
);

-- Mengisi Table
INSERT INTO person (name, parent_id) VALUES
('Zaki', 2),
('Ilham', NULL),
('Irwan', 2),
('Arka', 3);


-- Query select
select cust.id , cust.name , cust1.name as parent_name from customer cust
left join customer cust1 on cust.parent_id = cust1.id order by cust.id