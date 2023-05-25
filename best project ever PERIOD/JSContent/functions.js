/// <reference path="../Scripts/jquery-3.6.4.js" />


//FIllTAbles

function fillTrainersTable() {

    for (let t of trainers) {

        let templateTrainers = `
                                        <tr>
                                              <td>${t.firstname}</td>
                                              <td>${t.lastname}</td>
                                              <td>${t.age}</td>
                                              <td><button onclick="editTrainer(${t.id})" type="button" class="btn btn-success">Edit</button> <button onclick="deleteTrainer(${t.id})" type="button" class="btn btn-danger">Delete</button></td>
                                        </tr>
                                   `;

        let eleTrainers = $(templateTrainers);

        $("#tbodyTrainers").append(eleTrainers);

    }
}

function fillCoursesTable() {

    for (let c of courses) {

        let templateCourses = `
                                        <tr>
                                              <td>${c.title}</td>
                                              <td>${c.type}</td>
                                              <td>${c.startDate}</td>
                                              <td>${c.endDate}</td>
                                              <td><button onclick="editCourse(${c.id})" type="button" class="btn btn-success">Edit</button> <button onclick="deleteCourse(${c.id})" type="button" class="btn btn-danger">Delete</button></td>
                                         </tr>
                                   `;

        let eleCourses = $(templateCourses);

        $("#tbodyCourses").append(eleCourses);

    }
}

function fillTrainersPerCoursesTable() {
    for (let tc of courses) {

        let templateTrainersPerCourse = `
                                               <tr>
                                                   <th>${tc.title}</th>
                                                   <th>${tc.trainers.map(x => " " + x.lastname)}</th>
                                                   <td><button onclick="pairingMethod(${tc.id})" type="button" class="btn btn-success">Pair</button>
                                               </tr>
                                           `;

        tc.trainers.map(x => x.lastname);


        let eleTrainersPerCourse = $(templateTrainersPerCourse);

        $("#tbodyTrainersPerCourses").append(eleTrainersPerCourse);

    }
}

//NAVBAR
function showTable() {
    $("#btnCoursesPage").click((e) => {

        $("#divCoursesTable").show();
    })

    $("#btnTrainersPage").click((e) => {

        $("#divTrainersTable").show();
    })

    $("#btnTrainerPerCoursesPage").click((e) => {

        $("#divTrainersPerCourseTable").show();
    })
}


//EDIT TRAINER  

function editTrainer(id) {
    

   let trainer = trainers.filter(trainer => trainer.id == id )[0];

    
let templateForm = `  <form id="editTrainerForm">
                           <input id="ownLastname" type="text" name="editedLastname" value="${trainer.lastname}"  />
                           <input id="ownFirstname" type="text" name="editedFirstname" value="${trainer.firstname}"  />
                           <input id="ownAge" type="number" name="editedAge" value="${trainer.age}"  />
                           <input id="submitEditTrainer" type="submit" value="Modify"/>
                    
                       </form>`;


    $("#editTrainers").append(templateForm);
    
    $("#confirmationDeleteTrainerButtons").empty();


    $("#submitEditTrainer").click((e) => {
        e.preventDefault();
    
        trainer.firstname = $("#ownFirstname").val();
        trainer.lastname = $("#ownLastname").val();
        trainer.age = $("#ownAge").val();



        $("#tbodyTrainers").empty();

        fillTrainersTable();

        $("#editTrainerForm").hide();

    })                  
    
    
}


//EDIT COURSES
function editCourse(id) {

let course = courses.filter(course => course.id == id )[0];


let templateFormEditCourse = `<form id="editCourseForm">
                                   <input id="ownTitle" type="text" name="editedTitle" value="${course.title}"  />
                                   <input id="ownType" type="text" name="editedType" value="${course.type}"  />
                                   <input id="ownStardDate" type="date" name="editedStardDate" value="${course.startDate}"  />
                                   <input id="ownEndDate" type="date" name="editedEndDate" value="${course.endDate}"  />
                                   <input id="submitEditCourse" type="submit" value="Modify"/>
                    
                               </form>`;


    $("#editCourses").append(templateFormEditCourse);

    $("#confirmationDeleteCourseButtons").empty();


            $("#submitEditCourse").click((e) => {
             e.preventDefault();

             course.title = $("#ownTitle").val();
             course.type = $("#ownType").val();
             course.startDate = $("#ownStardDate").val();
             course.endDate = $("#ownEndDate").val();

             $("#tbodyCourses").empty();

             fillCoursesTable();

             $("#editCourseForm").hide();

            });  
    
};




//// DELETE TRAINERS

function deleteTrainer(id) {
    
 let trainer = trainers.filter(trainer => trainer.id == id )[0];


 let templateButtons = ` 
                      <button id="yesDeleteTrainer" onclick="deleteTrainerYes(${trainer.id})" class="btn border border-success"  >I agree to delete Trainer <strong> ${trainer.lastname} ${trainer.firstname} </strong> ?</button>
                      <button id="noDeleteTrainer" onclick="deleteTrainerNo()" class="btn border border-danger" >Nevermind</button>
                      `;


   $("#confirmationDeleteTrainerButtons").append(templateButtons);

   $("#editTrainers").empty();
}


function deleteTrainerYes(id) {

   console.log(23131);
   let indexTrainer =  trainers.map(trainer => trainer.id).indexOf(id);
   
   trainers.splice(indexTrainer, 1);
   
   $("#tbodyTrainers").empty(); 
   
   fillTrainersTable(); 
   
   $("#confirmationDeleteTrainerButtons").empty();
   

}

function deleteTrainerNo() {
    $("#confirmationDeleteTrainerButtons").empty();
}



///DELETE COURSES

function deleteCourse(id) {
    
    let course = courses.filter(course => course.id == id)[0];

    let templateButtons = ` 
                               <button id="yesDeleteCourse" onclick="deleteCourseYes(${course.id})" class="btn border border-success"  >I agree to delete Course <strong> ${course.title} </strong> ?</button>
                               <button id="noDeleteCourse" onclick="deleteCourseNo()" class="btn border border-danger" >Nevermind</button>
                                 ` ;


$("#confirmationDeleteCourseButtons").append(templateButtons);

$("#editCourses").empty();
    
}

function deleteCourseYes(id) {
    
    let indexCourse =  courses.map(course => course.id).indexOf(id);

    courses.splice(indexCourse, 1);

    $("#tbodyCourses").empty();

    fillCoursesTable();

    $("#confirmationDeleteCourseButtons").empty();
}

function deleteCourseNo() {
    $("#confirmationDeleteCourseButtons").empty();
}


//PAIRING TRAINERS AND COURSES

function pairingMethod(id) {

    let course = courses.filter(course => course.id == id )[0];

    $("#divCoursesTable").hide();
    $("#divTrainersTable").hide();
    $("#divAddCourse").hide();
    $("#divAddTrainer").hide();

    

    let templateListCourses = ` Please choose Trainer(s) for <strong>${course.title}</strong>:                
                                                    `;
    
          $('#pairingForms').append(templateListCourses);  
    
    
    

    showTrainersList(id);




    let templateSubmit = `

    <button id="SubmitPairing" onclick="pairTrainerToCourse()" type="button" class="btn btn-outline-warning">Submit</button>

      `;


$("#buttonSubmit").append(templateSubmit);


}

                                     


function showTrainersList() {

    
    
                            let templateListTrainers = `
                                                            <label for="courseSelectTrainer"></label>
                            
                                                            <select id="selectedTrainer" class="form-select" multiple aria-label="multiple select example" >
                                                            ${trainers.map(trainer=>`<option selected value="${trainer.id}">${trainer.lastname}</option>`)}
                                                            </select>
                            
                                                        `;


            $('#pairingForms').append(templateListTrainers);
     }

    



function pairTrainerToCourse() {

    selectedCourseByUser = $("#selectedCourse").val();
    selectedTrainerByUser = $("#selectedTrainer").val();

    


}