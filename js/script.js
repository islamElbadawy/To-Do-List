
// Setting Up Variables
let theInput = document.querySelector('.add-task input'),
    addButton = document.querySelector('.add-task .plus'),
    tasksContainer = document.querySelector('.tasks-content'),
    defaultMessage = document.querySelector('.default'),
    tasksCount = document.querySelector('tasks-count span'),
    tasksDone = document.querySelector('tasks-done span');


// Focus On Input Field
window.onload = function() {
    theInput.focus();
};

// Adding The Task
addButton.onclick = function() {

    // If Input Is Emppty
    if ( theInput.value === ''){

        console.log("No Value");

    }else{

        //
        let defaultMessage = document.querySelector('.default');

        if ( document.body.contains(document.querySelector('.default')) ) {

            // Remove No Task Message
            defaultMessage.remove();
        };

        // Create Span Element
        let mainSpan = document.createElement("span");

        // Create Delete Button
        let deleteBuuton = document.createElement("span");

        // Create The Span Text 
        let text = document.createTextNode(theInput.value);

        // Create The Delete Button Text
        let deleteText = document.createTextNode("Dlete");

        // Add Text To Span
        mainSpan.appendChild(text);

        //Add Text To Delete Button
        deleteBuuton.appendChild(deleteText);

        // Add Class To Main Span
        mainSpan.className = 'task-box';

        // Add Class To Delete Button
        deleteBuuton.className = "delete";

        // Add Delete Button To Main Span
        mainSpan.appendChild(deleteBuuton);

        //Add Main Span To Task Container
        tasksContainer.appendChild(mainSpan);

        // Empty The Input
        theInput.value  = '';

        // Focus On Field
        theInput.focus();
        
        calcTasks() ;
       
    }
     

};


document.addEventListener('click', function(e) {

    //Delete Task
    if ( e.target.className == 'delete'){

        //Remove Current Task 
        e.target.parentNode.remove();

        //Check Number Of Tasks Inside The Container
        if (tasksContainer.childElementCount == 0){
            createDefaultMessage();
        }
    }

     //Finish Task
     if ( e.target.classList.contains('task-box') ){

        //Toggle Class 'finished' 
        e.target.classList.toggle('finished');
    }

   
    
});

// Function To Create Default Message
function createDefaultMessage() {

    // Create Message Span Element
    let msgSpan = document.createElement("span");

    // Create The Text Message
    let msgText = document.createTextNode("No Tasks To Show");

    //Add Text To Msg Span
    msgSpan.appendChild(msgText);

    //Add Class To Msg Span
    msgSpan.className = "default";

    //Add Msg Span To Tasks Container
    tasksContainer.appendChild(msgSpan);
}

// Function To Calculate Tasks
function calcTasks() {

    // Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  
    // Calculate Completed Tasks
    tasksDone.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
  
  }
// Function To Calculate Tasks
// function calculateTasks() {

//     // Calculate All Tasks
//     tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  
//     // Calculate Completed Tasks
//     tasksDone.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
  
//   }