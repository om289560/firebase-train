$(document).ready(function () {

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

    $('#submit').on('click', function (event) {
        event.preventDefault();

        database.ref().on("child_added", function (snapshot) {
            var newstart = snapshot.val();
            var body = $("#form-group");
            var row = $("<tr>").appendTo(body);
            var interval = snapshot.val().frequency;
            var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
            var now = moment();
            var frequency = 0;
            var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
            var remainder = diffTime % frequency;
            var minutesAway = frequency - remainder;
            var nextArrival = moment().add(tMinutesTillTrain, "minutes");


            console.log('today' + strDay);

            row.append(`<td>${newstart.trainName}</td>`);
            row.append(`<td>${newstart.destination}</td>`);
            row.append(`<td>${newstart.firstTrainTime}</td>`);
            row.append(`<td>${newstart.frequency}</td>`);

            console.log(newPost);

        });
    });
})