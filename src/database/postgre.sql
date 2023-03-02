CREATE TABLE films (
  film_id SERIAL PRIMARY KEY,
  title VARCHAR(50) UNIQUE NOT NULL,
  description VARCHAR(500) NOT NULL,
  release_year VARCHAR(20) NOT NULL
);

INSERT INTO films(title, description, release_year)
VALUES ('they', 'sad horror', '01/02/2023');