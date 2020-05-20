# Apollo MySQL Server

Node.js server with Apollo GraphQL and MySQL.

## DigitalOcean Installation

1. Sign-in in to your DigitalOcean account.
2. Select Create -> Droplet for creating a new droplet.
3. From Distributions list please select CentOS.
4. Choose the plan and the datacenter region that meet your requirements.
5. Also please alter the remaining options regarding to your needs.
6. Click on Create Droplet.

7. Select Networking -> Firewalls -> Create Firewall.
8. Set a name to your new Firewall.
9. Add a Custom inbound rule with the TCP protocol using the port number 3001.
10. Add a MySQL inbound rule with the TCP protocol using the port number 3306.
11. Scroll down to the bottom of the page and apply the Firewall to the recently created droplet.
12. Click on Create Firewall.

13. Sign-in to your droplet via terminal using root user.
14. Install Node.js using<br>`yum install -y nodejs`
15. Install Git using<br>`yum install -y git`
16. Create a folder called Server using<br>`mkdir Server`
17. Enter the recently created folder with<br>`cd Server`
18. Clone the following GitHub repo using<br>`git clone https://github.com/carloschfa/apollo-mysql-server`
19. Enter the cloned repo folder with<br>`cd apollo-mysql-server`

## MySQL Installation and Configuration

20. Start the MySQL installation with<br>`rpm -Uvh https://repo.mysql.com/mysql80-community-release-el7-3.noarch.rpm`
21. Finish the MySQL installation with<br>`yum install -y mysql-server`
22. Start the MySQL Service using<br>`service mysqld start`
23. Configure MySQL using<br>`mysql_secure_installation`
24. Answer the following questions as described below.<br>
- Would you like to setup VALIDATE PASSWORD component? - `No`
- Please set the password for root here. New password: - `Related123`
- Remove anonymous users? - `Yes`
- Disallow root login remotely? - `No`
- Remove test database and access to it? - `Yes`
- Reload privilege tables now? - `Yes`

## MySQL Database and User Configuration

25. To customize your MySQL database and MySQL user account details make changes in the following files:
- `database/CreateDatabase.sql`
- `database/CreateUser.sql`
- `.env`

26. Enter MySQL console using<br>`mysql -u root -p`
27. Enter the MySQL password provided recently<br>`Related123`
28. Create the MySQL database using<br>`SOURCE database/CreateDatabase.sql;`
29. Create the MySQL user account using<br>`SOURCE database/CreateUser.sql;`
30. Exit MySQL console using<br>`EXIT;`

## Server Installation

31. Install the predefined packages using<br>`npm install`
32. Install PM2 using<br>`npm install pm2 -g`
33. Start the Apollo server with<br>`pm2 start index.js`
34. You can exit from the droplet using<br>`exit`

## Apollo GraphQL admin page

You can check the Apollo GraphQL admin page from your browser entering the server ip address with the port number (like this: http://your-server-ip-address:3001).

## Remote Database Access

To connect your Database remotely using a Database Manager application, please use the following values:

- Host: your-server-ip-address
- Port: 3306
- User: remote
- Password: Related123
- Database: messenger
