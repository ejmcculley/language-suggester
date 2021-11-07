$(document).ready(function() {
  $("button#begin").click(function() {
    $("#survey").show();
    $("#header").hide();
    $("#question-two").hide();
    $("#question-three").hide();
    $("#question-four").hide();
    $("#question-five-fe").hide();
    $("#question-five-be").hide();
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
    $("#front-end-b").hide();
    $("#back-end-a").hide();
    $("#back-end-b").hide();
    $("#question-five-fe").hide();
    $("#contact-info").hide();
  });
  $("button#q5-fe-b").click(function() {
    $("#survey-results").show();
    $("#front-end-a").hide();
    $("#back-end-a").hide();
    $("#back-end-b").hide();
    $("#question-five-fe").hide();
    $("#contact-info").hide();
  });
  $("button#q5-be-a").click(function() {
    $("#survey-results").show();
    $("#front-end-a").hide();
    $("#front-end-b").hide();
    $("#back-end-b").hide();
    $("#question-five-be").hide();
    $("#contact-info").hide();
  });
  $("button#q5-be-b").click(function() {
    $("#survey-results").show();
    $("#front-end-a").hide();
    $("#front-end-b").hide();
    $("#back-end-a").hide();
    $("#question-five-be").hide();
    $("#contact-info").hide();
  });
  $("button#next").click(function() {
    $("#survey-results").hide();
    $("#contact-info").show();
  });
});

