var Nightmare = require('nightmare');       
var nightmare = Nightmare({ show: true });
var fs = require('fs')


loopAgain();

function loopAgain(){

  nightmare
    .goto('http://www.inc.com/inc5000/list/2016/0/.html/')
    .wait('#right')
    .click('#page_tuner > div.box.arrow-r > i')
    .evaluate(function () {

      var rows = []

      for (var i = 1; i <= 56; i++){
        var name      = $(`#right > table > tbody > tr:nth-child(${i}) > td.c2 > a`).text().replace(',',"");
        var growth    = $(`#right > table > tbody > tr:nth-child(${i}) > td.c3`).text().replace(',',"");
        var revenue   = $(`#right > table > tbody > tr:nth-child(${i}) > td.c4`).text().replace(',',"");
        var industry  = $(`#right > table > tbody > tr:nth-child(${i}) > td.c5`).text().replace(',',"");
        var state     = $(`#right > table > tbody > tr:nth-child(${i}) > td.c6`).text().replace(',',"");
        var city      = $(`#right > table > tbody > tr:nth-child(${i}) > td.c7`).text().replace(',',"");
        var employees = $(`#right > table > tbody > tr:nth-child(${i}) > td.c8`).text().replace(',',"");

        rows.push([name, growth, revenue, industry, state, city, employees, '\n'])

      }

      return rows;

    })
    .then(function (result) {
      console.log(result);
      fs.appendFile('list_2016.csv', result, function(){
        console.log('done')
        loopAgain();
      })
    })
    .catch(function (error) {
      console.error('Search failed:', error);
    });

}