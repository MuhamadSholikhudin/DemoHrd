$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('#modal-primary').on('shown.bs.modal', function () {
    $('#modal-primary').trigger('focus')
  })