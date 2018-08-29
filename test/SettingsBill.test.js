let assert = require("assert");
let SettingsBill = require("../SettingsBill");

describe('Settings widget using ExpressJS', function() {
  it('should calculate total number of calls made', function() {
    var Set = SettingsBill();


    Set.Callprice(2.50);
    Set.Bill_Type('call');
    Set.Bill_Type('call');
    Set.Bill_Type('call');
    Set.Bill_Type('call');

    assert.equal(Set.Totals(), 10);

  });

  it('should show total number of sms', function() {
    var Set = SettingsBill()

    Set.Smsprice(0.75);
    Set.Bill_Type('sms');
    Set.Bill_Type('sms');

    assert.equal(Set.Totals(), 1.5);
  });


  it("should return the total of 'call' and 'sms' added together  " ,function()  {
    var Set = SettingsBill() 

    Set.Smsprice(0.75);
    Set.Callprice(2)
    Set.Bill_Type('sms')
    Set.Bill_Type('sms')
    Set.Bill_Type('call')

    assert.equal(Set.Totals(),3.50);
  });

  

 




    it('should show warning level amount of R6', function() {
      var Set = SettingsBill()
      Set.warningL(6);

      assert.equal(Set.getWarningLevel(), 6);
    });


        it('should show critical level amount R12', function() {
          var Set = SettingsBill()
         Set.criticalL(12);
          assert.equal(Set.getCriticalLevel(), 12);
        });


});
