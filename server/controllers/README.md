# What is a Controller and how does it work?

Our controllers will be responsible for adding new 
data to our database from our schema that 
we created in the models folder

When a user visits a route, our server accept our
request via express function and then use the controller to 
perform the action of sumbiting our data and sending 
our response back to the client

User submits form that performs a post request /guests, the route 
for guests will accept our controller 
as a parameter and will perform the network logic in there
