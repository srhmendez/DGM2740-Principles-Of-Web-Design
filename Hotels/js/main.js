// what is the path to the JSON file?
const apiURL = "../../Hotels/hoteldata.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    
    for (i = 0; i < myList.length; i ++) {

    let myImageTag = document.createElement('img');
    myImageTag.src = myList[i].photo;

    let myCaptionTag = document.createElement('figcaption');
    myCaptionTag.textContent = myList[i].name;

    let myFigureTag = document.createElement('figure');
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);
    myFigureTag.className = 'polaroid'
    
    let myAddress1 = document.createElement('p');
    myAddress1.textContent = myList[i].address[0];

    let myAddress2 = document.createElement('p');
    myAddress2.textContent = myList[i].address[1];

    let iconLeftTag = document.createElement('i');
    iconLeftTag.className = "ion-md-car";
    

    let thePhoneNumber = document.createElement('p');
    thePhoneNumber.textContent = myList[i].phone;
    thePhoneNumber.className = 'phoneNumber'

    let iconRightTag = document.createElement('i');
    iconRightTag.className = "ion-md-call";
    

    //Creating Div for Addresses 
    let addressDiv = document.createElement('div');
    addressDiv.appendChild(myAddress1)
    addressDiv.appendChild(myAddress2)
    addressDiv.className = 'address'

    // SPAN ELEMENTS 

    let spanLeftTag = document.createElement('span');
    spanLeftTag.appendChild(iconLeftTag);
    spanLeftTag.appendChild(addressDiv)
    spanLeftTag.className = 'spanLeft'



    let spanRightTag = document.createElement('span');
    spanRightTag.appendChild(iconRightTag);
    spanRightTag.appendChild(thePhoneNumber);
    spanRightTag.className = 'spanRight'

    // CREATE DIV

    let childDiv = document.createElement('div');
    childDiv.appendChild(spanLeftTag);
    childDiv.appendChild(spanRightTag);

    // ADD CLASS TO DIV

    childDiv.className = "child"

    let containerDiv = document.createElement('div');
    containerDiv.appendChild(myFigureTag);
    containerDiv.appendChild(childDiv)
    containerDiv.className = 'container'

    document.getElementById('hotels').appendChild(containerDiv);
    

    
  }
    
    
    
    
    
    
}); //end of "then" fat arrow function