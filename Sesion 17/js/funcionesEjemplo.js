$(document).ready(function() {
    $("#form").validate({
      rules: {
        name: {
          required: true,
          minleght:3
        },
        email: {
          required: true,
          email: true
        }
      }
    });
  });