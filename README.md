# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The browser(client) asks a DNS server for the IP address for www.techtonic.com.  The client will continue to processed by sending a 'hello packet'
to IP:443 and proceeds to negotiate encryption keys and checks the SSL certificate for the domain. If all goes well the server sends back an html document that the browser can decrypt, parse the html line by line as it is received, and render it on the screen.    

## From start to finish, how does data reach you to be rendered in the browser?

The network layer. As the HTTP request leaves my computer the router checks the Subnet Mask against the destination IP of the request. When they don't match the router sends the packet out to the internet. A sequence of routers passes the packet along until it finds its way the LAN that the server is on. Along to a system that is listening for the connect. Then back again packet by packet. 


## What code is rendered in the browser?

The contents of the html document, along with any image sources and styles applied to them.

## What is the server-side code’s main function?

Server-side code's main function to run work loads that the client simply can't due to latency issues or run code you don't everyone to see. i.e. a database that you don't want to give a user full access to, or simply don't need to transfer all the data every time you get a request.

## What is the client-side code’s main function?

Client-side code is used to help generate statefulness in a web-application (providing communication and context for the server side HTTP commands). As well provide dynamic interaction with the DOM.

## What is runtime?

Runtime is the functional relationship between an algorithms input size and the time it takes to run.  

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

A single instance of the client-side assets are created and sent from their respective places to the client.  

## How many instances of the server-side code are available at any given time?

It highly depends on the server system it self, the amount of traffic it gets, and the work load the server-side code is running. I don't know what kind of server is, yet even if I did I don't know that much about how they are optimized for request processing (parallelization, address space sharing).
At least one for each server system that is serving the web application, and hopefully enough to handle all the traffic in a timely manner.          

## How many instances of the databases connected to the server application are created?

I depends on how you have the database setup (i.e. distributed database). In general from the view of the server application only one. It connects to it and expects the internal mechanisms of the database to ensure transactions are handled properly.
