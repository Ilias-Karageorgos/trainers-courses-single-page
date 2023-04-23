/// <reference path="../Scripts/jquery-3.6.4.js" />

$("#btnTrainersPage").click((e) => {
    $("#divCoursesTable").hide();
    $("#divTrainersPerCourseTable").hide();
    $("#divAddTrainer").show();
    $("#divAddCourse").hide();

    showTable();
    
})


$("#btnCoursesPage").click((e) => {
    $("#divTrainersTable").hide();
    $("#divAddTrainer").hide();
    $("#divTrainersPerCourseTable").hide();
    $("#divAddCourse").show();

    showTable();
})

$("#btnTrainerPerCoursesPage").click((e) => {
    $("#divTrainersTable").hide();
    $("#divAddTrainer").hide();
    $("#divCoursesTable").hide();
    $("#divAddCourse").hide();

    showTable();
})

