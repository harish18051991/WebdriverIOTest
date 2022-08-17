Feature: Google search demo

    Demo wdio by google search
    @demo
  Scenario: Search for wdio in Google and open the test
  Given Open http://google.com webpage
  When Search for the text WDIO
  And Click on the first element
  Then https://webdriver.io/ page should load
