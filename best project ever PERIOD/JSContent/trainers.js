function trainer(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}


let t1 = new trainer("Labros", "Papadimitriou", 32);
let t2 = new trainer("Panos", "Sakellarios", 92);
let t3 = new trainer("Giorgos", "Kesopoulos", 34);
let t4 = new trainer("Stavros", "Gouleas", 30);
let t5 = new trainer("Giannis", "Apostolopoulos", 22);
let t6 = new trainer("Themos", "Patarias", 25);
let t7 = new trainer("Ilias", "Karageorgos", 29);

let trainers = [t1, t2, t3, t4, t5, t6, t7];




let templateTableTrainers = `<table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Lastname</th>
                                            <th>Firstname</th>
                                            <th>Age</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbodyTrainers"></tbody>
                             </table>`;

let foo = $(templateTableTrainers);

$("#divTrainersTable").append(foo);

fillTrainesTable();



