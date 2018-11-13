# mock-service
This is a sample nodejs rest api, for mocking and using at the time of any demo.

**To run the application use the following command from your command line/terminal  
` cmd
  npm install   
  node app.js 
`
  

It will start the app at port 3000  

CRUD Operations:  

1) To Get all users (GET Method)  
	http://localhost:3000/users  


2) To add a biogragraphy (POST Method)  
	http://localhost:3000/addBio  
	Sample Request JSON   
	{  	
		  "firstName": "Jon",  
	    "lastName": "Doe",  
	    "favoriteLanguage": "Angular",  
	    "yearStarted": 2014,  
	    "imagePath": null  
	}   


3) To get a details bio with respect to id=338f0585-6737-48a0-b4be-d88fc011b72d   (GET Method)  
http://localhost:3000/bio/338f0585-6737-48a0-b4be-d88fc011b72d  


4) To Delete a biography with respect to an id=f75733d8-b0f0-4a45-8dad-9f0ae8d4791d (DELETE Method)  
http://localhost:3000/deleteBio/f75733d8-b0f0-4a45-8dad-9f0ae8d4791d  


5) To update a biography of a user (PUT Method)  
http://localhost:3000/updateBio  
Sample Request JSON  
{
        "id": "338f0585-6737-48a0-b4be-d88fc011b72d",  
        "firstName": "Bill",  
        "lastName": "Gates",  
        "favoriteLanguage": "Python",  
        "yearStarted": 1978,  
        "imagePath": null  
 }  
 
 
 
 
