#!/usr/bin/env node

var fs = require("fs");

var VolunteersCalculator = module.exports = function(){
  return {
    bagsStillNeeded: null,
    bagsStockedPerVolunteer: null,
    volunteersNeeded: null,
    daysCount: null,
    data: null,
    results: null,

    processFile: function(f, done) {
      var self = this;
      fs.readFile(f, 'utf8', function (err,data) {
        var lines = data.split('\n');
        this.volunteerData = [];
        for(var line = 0; line < lines.length; line++){
          this.volunteerData.push(lines[line].split(','));
        }
        var daysCount = (this.volunteerData.length-1);
        var data = this.volunteerData.splice(1);
        self.daysCount = daysCount;
        self.data = data;
        done(daysCount, data);
      });
    },

    dayCount: function() {
      var dayCount = this.data.length;
      return this.dayCount;
    },

    getVolunteersNeeded: function() {
      if (this.volunteersNeeded !== null) {
        return this.volunteersNeeded;
      }
      var volunteersNeeded = [];
      for(var j = 0; j < this.daysCount; j++) {
        var v = (this.getBagsStillNeeded()[j]/this.getBagsStockedPerVolunteer()[j])
        volunteersNeeded.push(v.toFixed(2));
      };
      return volunteersNeeded;
    },

    getResults: function(volunteers) {
      this.results = [];
      for(var i = 0; i < volunteers.length; i++) {
        var result =  ( volunteers[i] + " additional volunteers are needed on day " + (this.data ? this.data[i][3] : i))
        this.results.push(result)
      }
      this.results.sort(function (a, b) { 
        let slicedA = Number(a.slice(0, 5))
        let slicedB = Number(b.slice(0, 5))
        return slicedB - slicedA
      })
      return this.results;
    },


    getBagsStillNeeded: function() {
      if (this.bagsStillNeeded !== null) {
        return this.bagsStillNeeded;
      }

      this.bagsStillNeeded = [];
      for(var i = 0; i < this.daysCount; i++) {
        var bags = (this.data[i][1] - this.data[i][2]);
        this.bagsStillNeeded.push(bags);
      };
      return this.bagsStillNeeded;
    },

    getBagsStockedPerVolunteer: function() {
      if (this.bagsStockedPerVolunteer !== null) {
        return this.bagsStockedPerVolunteer;
      }
      this.bagsStockedPerVolunteer = [];
      for(var i = 0; i < this.daysCount; i++) {
        var bagsStocked = this.data[i][2];
        var volunteers = this.data[i][0];
        this.bagsStockedPerVolunteer.push((bagsStocked/volunteers));
      };
      return this.bagsStockedPerVolunteer;
    }
  }
}

if (require.main === module) {
  var calculator = new VolunteersCalculator();
  var readAndPrint = function(arg) {
    calculator.processFile(arg, function() {
      var volunteers = calculator.getVolunteersNeeded();
      calculator.getResults(volunteers);
    });
  }

  if (process.argv.length === 3) {
    readAndPrint(process.argv[2]);
  } else {
    console.log("Please follow the README instructions to run the program.");
  }
}
