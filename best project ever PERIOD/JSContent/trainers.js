﻿/// <reference path="../Scripts/jquery-3.6.4.js" />

function trainer(id, firstname, lastname, age) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}


let t1 = new trainer(1, "Labros", "Papadimitriou", 32 ,);
let t2 = new trainer(2, "Panos", "Sakellarios", 92);
let t3 = new trainer(3, "Giorgos", "Kesopoulos", 34);
let t4 = new trainer(4, "Stavros", "Gouleas", 30);
let t5 = new trainer(5, "Giannis", "Apostolopoulos", 22);
let t6 = new trainer(6, "Themos", "Patarias", 25);
let t7 = new trainer(7, "Ilias", "Karageorgos", 29);

let trainers = [t1, t2, t3, t4, t5, t6, t7];




let templateTableTrainers = `<table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Firstname</th>
                                            <th>Lastname</th>
                                            <th>Age</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyTrainers"></tbody>
                             </table>`;

let foo = $(templateTableTrainers);

$("#divTrainersTable").append(foo);

fillTrainersTable();
