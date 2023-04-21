/// <reference path="../Scripts/jquery-3.6.4.js" />

function course(title, type, startDate, endDate, trainers) {
    this.title = title;
    this.type = type;
    this.startDate = startDate;
    this.endDate = endDate;
    this.trainers = trainers;
}



let c1 = new course("C#", "Full-time", "2023 / 10 / 01 ", "2023 / 12 / 01", [trainers[0], trainers[5]]);
let c2 = new course("JavaScript", "Full-time", "2023 / 07 / 01 ", "2023 / 09 / 01", [trainers[2], trainers[4], trainers[5]]);
let c3 = new course("Python", "Full-time", "2024 / 01 / 01 ", "2024 / 03 / 01", [trainers[3], trainers[6]]);
let c4 = new course("Java", "Part-time", "2024 / 02 / 01 ", "2023 / 06 / 01", [trainers[0], trainers[1], trainers[2], trainers[3], trainers[4], trainers[5], trainers[6]]);
let c5 = new course("C++", "Part-time", "2024 / 05 / 01 ", "2023 / 09 / 01", [trainers[0], trainers[3]]);


let courses = [c1, c2, c3, c4, c5];



let templateTableCourses = `<table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Type</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyCourses"></tbody>
                             </table>`;

let doo = $(templateTableCourses);

$("#divCoursesTable").append(doo);


fillCoursesTable();


let templatetableTrainersPerCourse = `<table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>Trainers</th>                                                    
                                                </tr>
                                            </thead>
                                            <tbody id="tbodyTrainersPerCourses"></tbody>
                                        </table>`;

let koo = $(templatetableTrainersPerCourse);

$("#divTrainersPerCourseTable").append(koo);

fillTrainersPerCoursesTable();



$("#buttonAddTrainer").click(() => {


    $("#divCoursesTable").hide();

    $("#divTrainersPerCourseTable").hide();

    let templateForm = `  <form id="formAddTrainer">
                           <input id="newLastname" type="text" name="givenLastname" value="" placeholder="Give new Lastname" />
                           <input id="newFirstname" type="text" name="givenFirstname" value="" placeholder="Give new Firstname" />
                           <input id="newAge" type="number" name="givenAge" value="" placeholder="Give age" />
                           <input id="submitNewTrainer" type="submit" value="Create!"/>
                    
                       </form>`;

    $("#divAddTrainer").append(templateForm);


    $("#submitNewTrainer").click((e) => {
        e.preventDefault();

        let lastName = $("#newLastname").val();
        let firstName = $("#newFirstname").val();
        let age = $("#newAge").val();

        let newTrainer = {};
        newTrainer.lastname = lastName;
        newTrainer.firstname = firstName;
        newTrainer.age = age;



        trainers.push(newTrainer);

        $("#tbodyTrainers").empty();
        fillTrainesTable();

       
    });

    
});




