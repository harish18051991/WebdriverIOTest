Feature: Autoplay test

    Web player autoplay test
    @demo
  Scenario: Search for wdio in Google and open the test1
  Given Open https://solutions.brightcove.com/poneill/experiments/autoplay/vjs/attrs/autoplay.html webpage
  And Wait for 5 seconds
  And User click on pause

  Scenario: Search for wdio in Google and open the test2
  Given Open https://solutions.brightcove.com/poneill/experiments/autoplay/vjs/attrs/autoplay-muted.html webpage
  And Wait for 5 seconds
  And User click on pause