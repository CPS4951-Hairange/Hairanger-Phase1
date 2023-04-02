-- Create the hair_styles table
CREATE TABLE hair_styles (
    hair_style_id INT PRIMARY KEY,
    hair_style_name VARCHAR(50),
    category VARCHAR(50),
    image_url VARCHAR(255)
);

-- Insert sample data into the hair_styles table
INSERT INTO hair_styles (hair_style_id, hair_style_name, category, image_url) VALUES
(1, 'Buzz Cut', 'Men', 'https://example.com/images/buzz_cut.jpg'),
(2, 'Pompadour', 'Men', 'https://example.com/images/pompadour.jpg'),
(3, 'Bob', 'Women', 'https://example.com/images/bob.jpg'),
(4, 'Pixie', 'Women', 'https://example.com/images/pixie.jpg'),
(5, 'Layered', 'Women', 'https://example.com/images/layered.jpg');

-- Create the services table
CREATE TABLE services (
    service_id INT PRIMARY KEY,
    service_name VARCHAR(50),
    price DECIMAL(10, 2)
);

-- Insert sample data into the service table
INSERT INTO services (service_id, service_name, price) VALUES
(1, 'Haircut', 25.00),
(2, 'Shampoo', 10.00),
(3, 'Hair Coloring', 50.00),
(4, 'Hair Perming', 60.00),
(5, 'Hair Styling', 35.00);

-- Create the barbers table
CREATE TABLE barbers (
    barber_id INT PRIMARY KEY,
    name VARCHAR(50),
    rating DECIMAL(3,2),
    current_status VARCHAR(50),
    shift_start TIME,
    shift_end TIME
);

-- Insert sample data into the barber table
INSERT INTO barbers (barber_id, name, rating, current_status, shift_start, shift_end) VALUES
(1, 'John', 4.5, 'Available', '09:00:00', '17:00:00'),
(2, 'Alice', 4.3, 'Busy', '10:00:00', '18:00:00'),
(3, 'Bob', 4.8, 'Available', '11:00:00', '19:00:00'),
(4, 'Eve', 3.9, 'On Break', '09:00:00', '17:00:00'),
(5, 'Charlie', 4.0, 'Busy', '10:00:00', '18:00:00');

-- Create the barber_services table
CREATE TABLE barber_services (
    barber_service_id INT PRIMARY KEY,
    barber_id INT,
    service_id INT,
    FOREIGN KEY (barber_id) REFERENCES barbers(barber_id),
    FOREIGN KEY (service_id) REFERENCES services(service_id)
);

-- Insert sample data into the barber_service table
INSERT INTO barber_services (barber_service_id, barber_id, service_id) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 2, 3),
(5, 3, 1),
(6, 3, 4),
(7, 4, 1),
(8, 4, 5),
(9, 5, 1),
(10, 5, 2);

-- Create the customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    name VARCHAR(50),
    phone VARCHAR(15    membership_level VARCHAR(50),
    points INT
);

-- Insert sample data into the customers table
INSERT INTO customers (customer_id, name, phone, membership_level, points) VALUES
(1, 'Michael', '555-123-4567', 'Gold', 1200),
(2, 'Emma', '555-987-6543', 'Silver', 800),
(3, 'Lucas', '555-222-3333', 'Bronze', 300),
(4, 'Sophia', '555-444-5555', 'Silver', 950),
(5, 'Mia', '555-666-7777', 'Gold', 1300);

-- Create the appointments table
CREATE TABLE appointments (
    appointment_id INT PRIMARY KEY,
    customer_id INT,
    barber_id INT,
    service_id INT,
    appointment_time TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (barber_id) REFERENCES barbers(barber_id),
    FOREIGN KEY (service_id) REFERENCES services(service_id)
);

-- Insert sample data into the appointments table
INSERT INTO appointments (appointment_id, customer_id, barber_id, service_id, appointment_time) VALUES
(1, 1, 1, 1, '2023-04-01 10:00:00'),
(2, 2, 2, 3, '2023-04-01 11:00:00'),
(3, 3, 3, 1, '2023-04-01 14:00:00'),
(4, 4, 4, 5, '2023-04-01 15:00:00'),
(5, 5, 5, 2, '2023-04-01 16:00:00');

-- Create the reviews table
CREATE TABLE reviews (
    review_id INT PRIMARY KEY,
    barber_id INT,
    customer_id INT,
    rating DECIMAL(3,2),
    content TEXT,
    created_at TIMESTAMP,
    FOREIGN KEY (barber_id) REFERENCES barbers(barber_id),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Insert sample data into the reviews table
INSERT INTO reviews (review_id, barber_id, customer_id, rating, content, created_at) VALUES
(1, 1, 1, 5.0, 'Great haircut!', '2023-03-15 12:30:00'),
(2, 2, 2, 4.0, 'Good service, but a bit pricey.', '2023-03-16 15:20:00'),
(3, 3, 3, 4.5, 'Amazing experience!', '2023-03-17 10:45:00'),
(4, 4, 4, 3.0, 'Not the best haircut I have had.', '2023-03-18 14:10:00'),
(5, 5, 5, 4.5, 'I love my new hairstyle!', '2023-03-19 16:30:00');
