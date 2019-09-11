# darden
In order to run this app, you need to have npm and node installed. If you want to visualize the data as you use the app,
download MongoDB too. 

Once you have these things downloaded, open the file in a code editor and run npm start in your terminal while you're 
in the folder. 


The idea behind the app is essentially an Uber, but for work. 

Mind you that uber has a driver and a rider option. When you signup as a rider, you just need to provide a payment option 
and you can take rides, When you signup as a driver, you would need to provide your car and personal details. Well for this 
app, it's the same process. We have two options, a service seeker and a service privider, in the remaining of this doc they
will be referred to as seekers and providers. When a seeker signs up, they won't need to provide any other information and 
they'll be able to use the functionalities of the app. 

The providers, on the other hand, when they sign up, they need to provide some more info such as they skills they can provide. 
Once the providers finished their signing up process, they will be placed into a database where unapproved users are. Once 
they book an interview with the admins and get approved, they will be removed from the current database and moved to the 
approved user database. 

Now with the admins, there will be admins set up separately, admins gets to approve the providers and gets to see their data. 

Now the dashboard for the providers and the seekers are really under developed, we havent decided on what to put on it and are
still coming up with the design. While the page for providers is techinally blank, the page for seekers have something. When
you sign up as a seeker, you will see a booking button on your page, which will guide you to a booking form, which will prompt
you first to state what services you're looking for. Once you pick your skill, you'll need to put in your location, the time 
you need the service, the hourly wage, a short description, your name, email, and also phone number. Once you hit proceed, you
will be guided to a confirmation page with payment. Once you paid and the payment is received by stripe, the booking form will
be sent to the backend and be logged int othe database, and while its doing that, it will use the booking form data and run a 
matching algorithm in the approved user database, and return top 3 providers. When the providers are returned from the 
algorithm, it will trigger twillio to sent messages to these providers and asking them if they wanted to accept this job(the
message contains the information about this booking form). They user will be promped to respond yes plus the booking 
number(which is included in the previous message). When the user responds correctly, it will trigger a change in the database
with the booking forms, attaching the user who responded to the text message to the booking form. 
