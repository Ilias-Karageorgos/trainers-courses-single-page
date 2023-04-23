/// <reference path="../Scripts/jquery-3.6.4.js" />


//FIllTAbles

function fillTrainesTable() {

    for (let t of trainers) {

        let templateTrainers = `
                                        <tr>
                                              <td>${t.firstname}</td>
                                              <td>${t.lastname}</td>
                                              <td>${t.age}</td>
                                              <td><button onclick="editTrainer(${t.lastname})" type="button" class="btn btn-success">Edit</button> <button onclick="deleteTrainer(${t.lastname})" type="button" class="btn btn-danger">Delete</button></td>
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
                                              <td><button onclick="editCourse(${c.title})" type="button" class="btn btn-success">Edit</button> <button onclick="deleteCourse(${c.title})" type="button" class="btn btn-danger">Delete</button></td>
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


//EDIT TRAINER  NA DO POS VAZO VALUE

function editTrainer() {
    
let templateForm = `  <form id="editTrainer">
                           <input id="ownLastname" type="text" name="editedLastname" value=""  />
                           <input id="ownFirstname" type="text" name="editedFirstname" value=""  />
                           <input id="ownAge" type="number" name="editedAge" value=""  />
                           <input id="submitEditTrainer" type="submit" value="Modify"/>
                    
                       </form>`;
    
}