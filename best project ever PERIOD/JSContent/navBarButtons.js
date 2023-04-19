$("#btnTrainersPage").click((e) => {
    $("#divCoursesTable").hide();
    $("#divTrainersPerCourseTable").hide();

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

