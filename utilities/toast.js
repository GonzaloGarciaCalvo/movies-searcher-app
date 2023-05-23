import Swal from 'sweetalert2'

export function customSwalAlert() { Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong, try later please!',
  timer:3000
})
}