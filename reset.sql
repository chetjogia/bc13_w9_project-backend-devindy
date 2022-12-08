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
    image_url VARCHAR(500),
    description
);

INSERT INTO bootcampers
    (first_name, last_name, password, image_url, description)
VALUES
    ('Alex', 'Chappell', 'password1', 'https://i.imgur.com/m9bWfmm.png', 'hello this is a paragraph about Alex'),
    ('Chet', 'Jogia', 'password2', 'https://i.imgur.com/iQnoRtI.png', 'hello this is a paragraph about Chet'),
    ('Luke', 'Adams', 'password3', 'https://i.imgur.com/sH2CoOS.png','hello this is a paragraph about Alex'),
    ('Jason', 'Riley', 'password4', 'https://i.imgur.com/Kx2Tm8U.png', 'hello this is a paragraph about Jason');


CREATE TABLE strengths_weaknesses (
    strength_id SERIAL PRIMARY KEY,
    bootcamper_id INT REFERENCES bootcampers (bootcamper_id),
    topic_id INT REFERENCES topics (topic_id),
    strength_weakness BOOL,
    unique_id TEXT
);

INSERT INTO strengths_weaknesses
    (bootcamper_id, topic_id, strength_weakness, unique_id)
VALUES
    (1, 1, true, '7459d024-ffc8-4d53-8e35-5f35667a0c12'),
    (1, 2, true, '5eb33834-596b-4160-b645-c33e099fca95'),
    (1, 3, true, '05fab129-bf85-455e-a68e-628d403036ea'),
    (1, 5, false, 'ebc8b791-8e05-40da-902c-eb8a70129aa8'),
    (1, 7, false, 'a6f519b7-99ca-4531-9543-5ed8037b1770'),
    (2, 3, true, 'dc0109bd-eff3-4b0a-96ab-03a720c1ac46'),
    (2, 6, false, '41658f90-8c10-4fb8-a1c6-c5bf92a23d03'),
    (2, 7, false, 'd42a69fd-737c-4b11-8627-c6c1d35b6dee'),
    (3, 6, true, '6ae412db-d268-4d13-bf22-ad9c4858a8ea'),
    (3, 7, true, 'ef6e32e2-373d-4e61-a55b-2ad3926719e9'),
    (3, 2, true, '097c955a-40ff-473b-8e99-54ad4d07aba2'),
    (3, 3, false, '27a3255f-3b2a-49c7-ad95-d387e9bdbed7'),
    (4, 2, true, '4db773a2-f79c-40ac-9cf1-d3910fb062ba'),
    (4, 6, true, 'ff9c2e37-c303-46c8-ae13-c86ee57065bd'),
    (4, 4, true, 'e9554285-21a7-460a-9865-338f2ef4fe26'),
    (4, 1, false, '9dbad395-155d-46dd-9c28-8285bfc65435'),
    (4, 7, false, 'b2877834-dd8d-4ef0-a07e-2df35c9bdea4');