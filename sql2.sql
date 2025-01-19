CREATE DATABASE bengkerr;
USE bengkerr;

CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15),
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user','owner') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Services (
    service_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    image varchar(255),
    duration INT NOT NULL DEFAULT 0
);

CREATE TABLE Orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    service_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    motor varchar(100),
    plate_number varchar(50),
    queue_number INT,
    status ENUM('pending', 'completed', 'canceled') DEFAULT 'pending',
	compliant text,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (service_id) REFERENCES Services(service_id)
);

CREATE TABLE Payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_method ENUM('bank_transfer', 'credit_card', 'cash') NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

CREATE TABLE Invoices (
    invoice_id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT,
    invoice_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) NOT NULL,
    status ENUM('unpaid', 'paid') DEFAULT 'unpaid',
    FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);

CREATE TABLE Chats (
    chat_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    admin_id INT,
    message TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (admin_id) REFERENCES Users(user_id)
);

CREATE TABLE mechanics (
    mechanic_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE mechanic_presence (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mechanic_id INT NOT NULL,
    presence_date DATE NOT NULL,
    status ENUM('present', 'absent') NOT NULL, -- 'present' or 'absent'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (mechanic_id) REFERENCES mechanics(mechanic_id) -- Relasi ke tabel mechanics
);

INSERT INTO mechanics (name, email, phone_number)
VALUES ('John Doe', 'johndoe@example.com', '081234567890');
ALTER TABLE mechanic_presence ADD CONSTRAINT unique_mechanic_date UNIQUE (mechanic_id, presence_date);




INSERT INTO orders (`user_id`, `service_id`, `order_date`, `status`, `motor`, `plate_number`, `complaint`, `queue_number`)
VALUES (
    1, 
    9, 
    '2025-01-20 10:00:00', 
    'pending', 
    'Honda Vario', 
    'AB1234CD', 
    'Mesin berbunyi keras',
    '1'
);

INSERT INTO services (title, price, description, created_at, image)
VALUES
('Haircut', 50000.00, 'Basic haircut for men and women', NOW(), 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHjj2b_zUDAc2eN_nGiCqF45GS6-ZCtMQceQ&s'),
('Hair Wash', 20000.00, 'Hair wash service', NOW(), 'https://cdn0-production-images-kly.akamaized.net/t9MaUEl3m8OscZ0VyVQEbELCza4=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1626211/original/018798800_1497611622-Bengkel-Motor-Kebanjiran-Order4.jpg')
;

INSERT INTO orders (`user_id`, `service_id`, `order_date`, `status`, `motor`, `plate_number`, `complaint`, `queue_number`)
VALUES (
    1, 
    9, 
    '2025-01-20 10:00:00', 
    'pending', 
    'Honda Vario', 
    'AB1234CD', 
    'Mesin berbunyi keras',
    '1'
);
            


