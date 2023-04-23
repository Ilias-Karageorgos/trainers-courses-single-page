/// <reference path="../Scripts/jquery-3.6.4.js" />

$("#btnTrainersPage").click((e) => {
    $("#divCoursesTable").hide();
    $("#divTrainersPerCourseTable").hide();
    $("#divAddTrainer").show();
    showTable();
    
})


$("#btnCoursesPage").click((e) => {
    $("#divTrainersTable").hide();
    $("#divAddTrainer").hide();
    $("#divTrainersPerCourseTable").hide();

    showTable();
})

$("#btnTrainerPerCoursesPage").click((e) => {
    $("#divTrainersTable").hide();
    $("#divAddTrainer").hide();
    $("#divCoursesTable").hide();

    showTable();
})

