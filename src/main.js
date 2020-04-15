import $ from 'jquery';
import { Journal } from './journal.js';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';


$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    var title = $("#titleForm").val();
    var body = $("#bodyForm").val();
    var name = $("#nameForm").val();

    var journal = new Journal(title, body, name);

    console.log(journal);
    console.log(journal.countWords());
    var output = journal.getTeaser();
    console.log(output);
    $("#output").append("<li>" + output + "</li>");


  });

});