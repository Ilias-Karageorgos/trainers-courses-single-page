/// <reference path="../Scripts/jquery-3.6.4.js" />


//FIllTAbles

function fillTrainersTable() {

    for (let t of trainers) {

        let templateTrainers = `
                                        <tr>
                                              <td>${t.firstname}</td>
                                              <td>${t.lastname}</td>
                                              <td>${t.age}</td>
                                              <td><button onclick="editTrainer(${t.id})" type="button" class="btn btn-success">Edit</button> <button onclick="deleteTrainer()" type="button" class="btn btn-danger">Delete</button></td>
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
                                              <td><button onclick="editCourse(${c.id})" type="button" class="btn btn-success">Edit</button> <button onclick="deleteCourse()" type="button" class="btn btn-danger">Delete</button></td>
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


    $("#divAddTrainer").append(templateForm);


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


    $("#divAddCourse").append(templateFormEditCourse);


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
