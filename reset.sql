CREATE TABLE topics (
    topic_id SERIAL PRIMARY KEY,
    topic_name TEXT
);

INSERT INTO topics
    (topic_name)
VALUES
    ('React'),
    ('Node'),
    ('SQL'),
    ('CSS'),
    ('UI/UX'),
    ('JavaScript'),
    ('HTML');


CREATE TABLE bootcampers (
    bootcamper_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL,
    image_url VARCHAR(500)
);

INSERT INTO bootcampers
    (first_name, last_name, password, image_url)
VALUES
    ('Alex', 'Chappell', 'https://i.imgur.com/m9bWfmm.png'),
    ('Chet', 'Jogia', 'https://i.imgur.com/iQnoRtI.png'),
    ('Luke', 'Adams', 'https://i.imgur.com/sH2CoOS.png'),
    ('Jason', 'Riley', 'https://i.imgur.com/Kx2Tm8U.png');


CREATE TABLE strengths_weaknesses (
    strength_id SERIAL PRIMARY KEY,
    bootcamper_id INT REFERENCES bootcampers (bootcamper_id),
    topic_id INT REFERENCES topics (topic_id),
    strength_weakness BOOL
);

INSERT INTO strengths_weaknesses
    (bootcamper_id, topic_id, strength_weakness)
VALUES
    (1, 1, true),
    (1, 2, true),
    (1, 3, true),
    (1, 5, false),
    (1, 7, false),
    (2, 3, true),
    (2, 6, false),
    (2, 7, false),
    (3, 6, true),
    (3, 7, true),
    (3, 2, true),
    (3, 3, false),
    (4, 2, true),
    (4, 6, true),
    (4, 4, true),
    (4, 1, false),
    (4, 7, false);