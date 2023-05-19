import Swal from 'sweetalert2';

const deleteToy = (url) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deleteCount) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          }
        });
     
    }
  });
};

export default deleteToy;
