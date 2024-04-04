
## Carboncell_Assessment

### Problem
Develop a backend API for an carbon cell assessment. The API should support basic CRUD operations for data retrival records. 
There will be 1 models: 
1. User


## Project SetUp

### Pre Requisites 
Please make sure your system has following things before setting up the project
1. NodeJs
2. Npm or yarn
3. MySql

## Instalation Steps
1. git clone git@github.com:Madhan-creat/OrderManagementSystem.git
2. cd 
rderManagementSystem
3. npm install
4. Open your MySqlShell and execute folowing steps in sequence
    - 4.1 ```\sql``` --> this switches shell to support sql commands
    - 4.2 ```\c yourlocalmysqlusearname@localost``` --> Please provide your local db user password
    - 4.3 ```create database Carbon;``` --> Create a database
    - 4.4 ```use Carbon;``` --> use the newly created database
5. Once we create the db, Please create all the required tables in order mentioned below
    ```
    create table users (user_id INT AUTO_INCREMENT PRIMARY KEY, user_name VARCHAR(255) NOT NULL, user_email VARCHAR(255) NOT NULL, user_password VARCHAR(255) NOT NULL);
    ```
6. `npm Start` ---> this runs the local server

**Note: Please update your local mqsql username and password in the CARBON_ASSESSMENT\src\configs\configs.ts file as well before running the server**







