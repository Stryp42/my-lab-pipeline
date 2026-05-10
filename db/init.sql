SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO contacts (name, role) VALUES
('Артем Мозгунов', 'Студент-розробник'),
('В''ячеслав Старченко', 'Керівник / Викладач'),
('Адміністратор', 'Мережевий інженер');