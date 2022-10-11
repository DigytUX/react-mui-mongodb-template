# React + MUI + MONGODB
Build react without the crap!

## Prerequisites
You obviously will need a stable version of node and react to get started. Visit https://nodejs.org/en/ to install node and install 
Create React App by visiting https://create-react-app.dev/.

### Creating your MongoDB Database
Visit www.mongodb.com and create a free account. Afterwards you will need to create a database using Mongodb Atlas.
Using the Atlas CLI optional but will make you a badass dev if you do use it. Once you're completed with that, 
click on the <code>Database Access</code> option menu in the left column under <code>Security</code>. 

Click "Add New Database User" , and select the password authentication method, create a username and password and then save.

Go back to your database and then click the <code>Connect</code> button and choose connect to your application. Copy the URI and
return to your project

### Updating the environment variable(s)
Inside of the root folder, create a <code>.env</code> and add the following contents

<code>
  MONGO_URI="mongodb+srv://username:yourpassword@mernapp.dntw1yd.mongodb.net/?retryWrites=true&w=majority"
</code>
<code>
  POST=8080
</code>


This will automatically connect you to your database. The code is already set and contains explainations of what is going on.
