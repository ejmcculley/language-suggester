$(document).ready(function() {
  $("button#begin").click(function() {
    $("#survey").show();
    $("#header, #question-two, #question-three, #question-four, #question-five-fe, #question-five-be").hide();
  });
  $("button#q1").click(function() {
    let questionOneInput = $("button#q1").val();
      if (questionOneInput === "One") {
        $("#question-two").show();
        $("#question-one").hide();
    }
  });
  $("button#q2").click(function() {
    let questionTwoInput = $("button#q2").val();
      if (questionTwoInput === "Two") {
        $("#question-three").show();
        $("#question-two").hide();
    }
  });
  $("button#q3").click(function() {
    let questionThreeInput = $("button#q3").val();
      if (questionThreeInput === "Three") {
        $("#question-four").show();
        $("#question-three").hide();
    }
  });
  $("button#q4").click(function(event) {
    event.preventDefault();
    let questionFourInput = event.target.value;
    if (questionFourInput === "A") {
      $("#question-five-fe").show();
      $("#question-four").hide();
    } else if (questionFourInput === "B") {
        $("#question-five-be").show();
        $("#question-four").hide();
    }
  });  
  $("button#q5-fe").click(function(event) {
    event.preventDefault();
    let questionFeInput = event.target.value;
    if (questionFeInput === "A") {
      $("#survey-results").show();
      $("#front-end-b, #back-end-a, #back-end-b, #question-five-fe, #contact-info").hide();  
    } else if (questionFeInput === "B") {
      $("#survey-results").show();
      $("#front-end-a, #back-end-a, #back-end-b, #question-five-fe, #contact-info").hide();
    }
  });
  $("button#q5-be").click(function(event) {
    event.preventDefault();
    let questionBeInput = event.target.value;
    if (questionBeInput === "A") {
      $("#survey-results").show();
      $("#front-end-a, #front-end-b, #back-end-b, #question-five-be, #contact-info").hide();
    } else if (questionBeInput === "B") {
      $("#survey-results").show();
      $("#front-end-a, #front-end-b, #back-end-a, #question-five-be, #contact-info").hide();
    }
  });
  $("button#next").click(function() {
    $("#survey-results").hide();
    $("#contact-info").show();
   });
  $("#contact-info").submit(function(event) {
    event.preventDefault();
    const firstName = $("input#first-name").val();
    const lastName = $("input#last-name").val();
    const emailOne = $("input#email").val();
  
    $(".firstname1").text(firstName);
    $(".lastname1").text(lastName);
    $(".email1").text(emailOne);
  
    $("#contact-info").hide();
    $("#follow-up").show();
  });
});