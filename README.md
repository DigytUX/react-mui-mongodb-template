![Group 62](https://user-images.githubusercontent.com/44784345/209415730-618bc1bb-3e30-4a1c-9cf4-0a78c3caa482.png)

# React + MUI + MONGODB
Fullstack React and MongoDB with built in and configured backend right out of the box. Recommended deployment to a VPS server (using NGINX or Apache). Its recommended to separate the logic of the two layers on its own tier and using an API to connect.

## Prerequisites

## **Download Nodejs and Create React App**

You can download the most stable version of Nodejs by visiting [https://nodejs.org/en/](https://nodejs.org/en/)<span style="text-decoration:underline;">.</span> `Create-react-app` can be downloaded from [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)<span style="text-decoration:underline;">.</span>


## **Create the directory project directory**

Here is where you will be installing the client and server folder. Inside of the new directory, create a `/client` and `/server` directory respectively.

Inside of `/server` run then execute the following

`npm init -y`

yarn add express cors body-parser mongoose


## **Babel Setup**

Run the following commands inside the root of `/server`. This will make sure that our code is backward compatible with older browser versions.

`babel-cli, babel-preset-env, babel-preset-stage-0`

Afterward, create a .babelrc file and add the following code

```
{

   "presets":[**

       "env",**

       "stage-0" // includes all latest changes to the javascript**

   ]

}
```


## **Environment variables**

### Creating your MongoDB Database
Visit www.mongodb.com and create a free account. Afterwards you will need to create a database using Mongodb Atlas.
Using the Atlas CLI optional but will make you a badass dev if you do use it. Once you're completed with that, 
click on the <code>`Database Access`</code> option menu in the left column under <code>`Security`</code>. 

Click "Add New Database User" , and select the password authentication method, create a username and password and then save.

Go back to your database and then click the <code>Connect</code> button and choose connect to your application. Copy the URI and
return to your project


Inside the root of your project, add a file named .env and add the MONGO_URI variable and the connection string with your username and password.

MONGO_URI="mongodb+srv://&lt;username>:&lt;password>@yourdatabase.mongodb.net/?retryWrites=true&w=majority"

Run npm `init -y` from the root of your repository to create a node project

`npm install concurrently –-save`

This will allow you to run both the client and server at the same time using one command




