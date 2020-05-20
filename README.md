# Apollo MySQL Server

Node.js server with Apollo GraphQL and MySQL.

## DigitalOcean Droplet Installation

1. Sign in to your DigitalOcean account.
2. Select Create -> Droplet for creating a new droplet.
3. From the Distributions list please select CentOS.
4. Choose the plan and the datacenter region that meet your requirements.
5. Also please alter the remaining options regarding your needs.
6. Click on Create Droplet.

## DigitalOcean Firewall Configuration

7. Select Networking -> Firewalls -> Create Firewall.
8. Set a name for your new Firewall.
9. Add a Custom inbound rule with the TCP protocol using the port number 3001.
10. Add a MySQL inbound rule with the TCP protocol using the port number 3306.
11. Scroll down to the bottom of the page and apply the Firewall to the recently created droplet.
12. Click on Create Firewall.

## Droplet Setup

13. Sign in to your droplet via terminal with root user.
14. Install Node.js using<br>`yum install -y nodejs`
15. Install MySQL using<br>`yum install -y mysql-server`
16. Install Git using<br>`yum install -y git`
17. Clone the following GitHub repo using<br>`git clone https://github.com/relatedcode/apollo-mysql-server`
18. Enter the cloned repo folder with<br>`cd apollo-mysql-server`

## MySQL Configuration

19. Start the MySQL Service using<br>`service mysqld start`
20. Configure MySQL using<br>`mysql_secure_installation`
21. Answer the following questions as described below.<br>
- Would you like to setup VALIDATE PASSWORD component? - `No`
- Please set the password for root here. New password: - `Related123`
- Remove anonymous users? - `Yes`
- Disallow root login remotely? - `No`
- Remove test database and access to it? - `Yes`
- Reload privilege tables now? - `Yes`

## MySQL Database and User Configuration

22. To customize your MySQL database and MySQL user account details make changes in the following files:
- `database/CreateDatabase.sql`
- `database/CreateUser.sql`
- `.env`

23. Enter MySQL console using<br>`mysql -u root -p`
24. Enter the MySQL password provided earlier<br>`Related123`
25. Create the MySQL database using<br>`SOURCE database/CreateDatabase.sql;`
26. Create the MySQL user account using<br>`SOURCE database/CreateUser.sql;`
27. Exit MySQL console using<br>`EXIT;`

## Apollo Server Installation

28. Install the predefined packages using<br>`npm install`
29. Install PM2 using<br>`npm install pm2 -g`
30. Start the Apollo server with<br>`pm2 start index.js`
31. You can exit from the droplet using<br>`exit`

## Apollo GraphQL admin page

You can check the Apollo GraphQL admin page from your browser entering the server IP address with the port number (like this: http://your-server-ip-address:3001).

## Remote Database Access

To connect your Database remotely using a Database Manager application, please use the following values:

- Host: your-server-ip-address
- Port: 3306
- User: remote
- Password: Related123
- Database: messenger
