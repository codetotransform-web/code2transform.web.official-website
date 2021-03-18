// function sendEmail() { 
//     Email.send({ 
//       Host: "smtp.gmail.com", 
//       Username: "technicaldwiti@gmail.com", 
//       Password: "Enter your password", 
//       To: 'receiver@email_address.com', 
//       From: "technicaldwiti@gmail.com", 
//       Subject: "Sending Email using javascript", 
//       Body: "Well that was easy!!", 
//       Attachments: [ 
//         { 
//           name: "File_Name_with_Extension", 
//           path: "Full Path of the file" 
//         }] 
//     }) 
//       .then(function (message) { 
//         alert("Mail has been sent successfully") 
//       }); 
// } 
window.onload = function() {
  (function() {
    emailjs.init("user_NSzCGaTPEuYA4cjF8nAF9");
    })();
  document.getElementById('website_contact_form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      // this.contact_number.value = Math.random() * 100000 | 0;
      var params = {
          from_name : document.getElementById('from_name').value,
          from_email : document.getElementById('from_email').value,
          message : document.getElementById('message').value,

      }
      
      // these IDs from the previous steps
      emailjs.send('service_vyqi1jd', 'template_gvspoqf',params)
          .then(function() {
            swal({
              title: "Thank You for Your Interest!",
              text: "Your message has been successfully delevered.We will get back to you soon!",
              icon: "success",
            });
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}
