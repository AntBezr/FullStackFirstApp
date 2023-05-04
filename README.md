# Simple full stack app

This very simple project is used for learning how to make full-stack app using React, PHP and MySQL together for only creating and reading operations.

## Steps to follow to prepare application to work

- Make sure to copy api folder inside php-mamp src folder
- Create a new database in phpmyadmin e.g. laundry with table colled booking
- Declare the data types for form e.g. id, name, appartment date(type date) and time(type time)
- Add following lines to db in sql to create an event that will delete the line if it passed

```
CREATE EVENT deleteEvent
ON SCHEDULE
EVERY 1 DAY
STARTS '2023-05-03 00:00:00'
DO
  DELETE FROM booking WHERE date < CURDATE()
```

- Remember to put Auto Increment for id
- npm start

## Technologies used

- ReactJS
- PHP
- MySQL
- phpMyAdmin
