# OOP_Assignment_1_Javier_Coyoc
--To run the system first ensure you have postgresql, npm and node.js installed on your computer:
- Download and extract the zip file containing the folders with the code
- Then open your terminal and create the database using these commands:
psql -U postgres
CREATE DATABASE eventdb;
\q
- Next create the tables using this command: psql -U postgres -d eventdb -f schema.sql
- Next Update your password in the dbConnection file within the db folder (db/dbConnection.js) set the password to your postgres password
- run the command: npx tsc
- run: 'node main.js' to start the server
- Open the index.html file in your web browser an test the system by adding student/events
