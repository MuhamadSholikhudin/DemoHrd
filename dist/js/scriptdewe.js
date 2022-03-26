$(document).ready(function() {
     //Initialize Select2 Elements
     $('.select2').select2()

     //Initialize Select2 Elements
     $('.select2bs4').select2({
       theme: 'bootstrap4'
     })
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('#modal-primary').on('shown.bs.modal', function () {
    $('#modal-primary').trigger('focus')
  })

