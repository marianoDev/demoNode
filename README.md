# Template para crear el webserver y estructura de API

# Instalar dependencias
npm i

# Deployar en Heroku
Crear una cuenta en Heroku https://www.heroku.com/

Install the Heroku CLI
Download and install the Heroku CLI devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Clone the repository
Use Git to clone your_heroku_app source code to your local machine.

$ heroku git:clone -a your_heroku_app 
$ cd your_heroku_app
Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master

https://webserver-nodejpa.herokuapp.com