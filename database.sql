
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "exercise" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) UNIQUE NOT NULL,
	"date" DATE NOT NULL DEFAULT CURRENT_DATE,
	"is_completed" BOOLEAN
);

CREATE TABLE "user_exercise" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"exercise_id" INT REFERENCES "exercise",
	"sets" NUMERIC,
	"reps" NUMERIC,
	"lifitng_weights" NUMERIC
);
