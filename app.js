$(document).ready(function() {
  var newDate;
  var newTime;
  $('.second').css('display', 'none');
  $('.result').css('display', 'none');

    //Set formatted date
    var calendarOpts = {
      type: 'date',
      //To show date as a string
      onChange: function (date, text) {
       var newValue = text;
       newDate = newValue;
     },
     //For return formated date
      formatter: {
          date: function (date, settings) {
              if (!date) return '';
              var day = date.getDate() + '';
              if (day.length < 2) {
                  day = '0' + day;
              }
              var month = (date.getMonth() + 1) + '';
              if (month.length < 2) {
                  month = '0' + month;
              }
              var year = date.getFullYear();
              return month + '/' + day + '/' + year;
          }
      }
  };

  //Set Calendar
  $('#calendar').calendar(calendarOpts);

  //Set Time
  $('#time').calendar({
  type: 'time',
    //To show Time as a string
    onChange: function (date, text) {
     var newValue = text;
     newTime = newValue;
   }
 });
  //Check dropdown
  $('.ui.dropdown').dropdown({
          allowAdditions: true,
          hideAdditions: false
  });

  $('.btn-first').on('click', function(e){
    e.preventDefault();
    var newPartySize = $('.partySize').val();
    //Check first validatation
    if(!newDate || !newTime || !newPartySize) {
      if(!newPartySize) {
        $('.partySize').parent().addClass('notValid');
      } else {
        $('.partySize').parent().removeClass('notValid');
      }
      if(!newDate) {
        $('input.calendar').addClass('notValid');
      } else {
        $('input.calendar').removeClass('notValid');
      }
      if(!newTime) {
        $('input.time').addClass('notValid');
      } else {
        $('input.time').removeClass('notValid');
      }
    } else {
      $('.showDate').text(newDate);
      $('.showTime').text(newTime);
      $('.showParty').text(newPartySize);
      $('.first').css('display','none');
      $('.second').css('display','block');
    }
  });

  //Check last validation
  $('.confirmRes').on('click', function(e){
    e.preventDefault();
    var firstName = $('.firstName').val();
    var lastName = $('.lastName').val();
    var email = $('.email').val();
    var phoneNumber = $('.phoneNumber').val();
    var SpecReq = $('.SpecReq').val();
    if(!firstName || !lastName || !emailIsValid(email) || !phoneIsValid(phoneNumber) || !SpecReq) {
      if(!firstName) {
        $('input.firstName').addClass('notValid');
      } else {
        $('input.firstName').removeClass('notValid');
      }
      if(!lastName) {
        $('input.lastName').addClass('notValid');
      } else {
        $('input.lastName').removeClass('notValid');
      }
      if(!emailIsValid(email)) {
        $('input.email').addClass('notValid');
      } else {
        $('input.email').removeClass('notValid');
      }
      if(!phoneIsValid(phoneNumber)) {
        $('input.phoneNumber').addClass('notValid');
      } else {
        $('input.phoneNumber').removeClass('notValid');
      }
      if(!SpecReq) {
        $('textarea.SpecReq').addClass('notValid');
      } else {
        $('textarea.SpecReq').removeClass('notValid');
      }
    } else {
      $('.resInfo.forName').text(firstName + ' ' + lastName);
      $('.resInfo.forEmail').text(email);
      $('.resInfo.forPhone').text(phoneNumber);
      $('.resInfo.forReq').text(SpecReq);
      $('.second').css('display','none');
      $('.result').css('display','block');
    }

    //Regexp check for email addresses
    function emailIsValid(check) {
      var emailRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
      if (emailRegex.test(check)) {
          return true;
      }
    }
    //Regexp check for phone number
    function phoneIsValid(check) {
      var phoneRegex = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
      if (phoneRegex.test(check)){
        return true;
      }
    }
  });
}); //End Ready
