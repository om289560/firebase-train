var config = {
    apiKey: "AIzaSyAz-1DqJ_VtdTeyIBUJ_z8Cz3w3ImS-heA",
    authDomain: "train-schedule-c2e01.firebaseapp.com",
    databaseURL: "https://train-schedule-c  2e01.firebaseio.com",
    projectId: "train-schedule-c2e01",
    storageBucket: "",
    messagingSenderId: "124878699224",
    appId: "1:124878699224:web:6e4f02e3db5acbca"
};

firebase.initializeApp(config);

var database = firebase.database();

$('#submit').on('click', function (event) {
    event.preventDefault();

    database.ref().push({
        trainName: $('#Train Name').val().trim(),
        destination: $('#Destination').val().trim(),
        firstTrainTime: $('#Next Arrival').val().trim(),
        frequency: $('#Frequency (min)').val().trim(),
    });
}); 

database.ref().on("child_added", function(snapshot) {
    var newPost = snapshot.val();
    var body = $("#data-table");
    var row = $("<tr>").appendTo(body);
    var interval = snapshot.val().frequency;
    var now = moment().toDate();

    console.log('today' + strDay);

    row.append(`<td>${newPost.trainName}</td>`);
    row.append(`<td>${newPost.destination}</td>`);
    row.append(`<td>${newPost.firstTrainTime}</td>`);
    row.append(`<td>${newPost.frequency}</td>`);

    console.log(newPost);
    
  });
