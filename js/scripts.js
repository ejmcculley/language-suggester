$(document).ready(function() {
  $("button#begin").click(function() {
    $("#survey").show();
    $("#header, #question-two, #question-three, #question-four, #question-five-fe, #question-five-be").hide();
  });
  $("button#q1").click(function() {
    $("#question-two").show();
    $("#question-one").hide();
  });
  $("button#q2").click(function() {
    $("#question-three").show();
    $("#question-two").hide();
  });
  $("button#q3").click(function() {
    $("#question-four").show();
    $("#question-three").hide();
  });
  $("button#q4a").click(function() {
    $("#question-five-fe").show();
    $("#question-four").hide();
  });
  $("button#q4b").click(function() {
    $("#question-five-be").show();
    $("#question-four").hide();
  });
  $("button#q5-fe-a").click(function() {
    $("#survey-results").show();
    $("#front-end-b, #back-end-a, #back-end-b, #question-five-fe, #contact-info").hide();
  });
  $("button#q5-fe-b").click(function() {
    $("#survey-results").show();
    $("#front-end-a, #back-end-a, #back-end-b, #question-five-fe, #contact-info").hide();
  });
  $("button#q5-be-a").click(function() {
    $("#survey-results").show();
    $("#front-end-a, #front-end-b, #back-end-b, #question-five-be, #contact-info").hide();
  });
  $("button#q5-be-b").click(function() {
    $("#survey-results").show();
    $("#front-end-a, #front-end-b, #back-end-a, #question-five-be, #contact-info").hide();
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

