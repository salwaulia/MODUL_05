$(document).ready(function() {
    // Ketika gambar diklik, tampilkan modal dengan gambar besar
    $('.image-item img').click(function() {
        var imgSrc = $(this).attr('src');
        var captionText = $(this).attr('alt');
        $('#modalImage').attr('src', imgSrc);
        $('#caption').text(captionText);
        $('#imageModal').addClass('show'); // Menampilkan modal
    });

    // Ketika tombol close diklik, tutup modal
    $('#closeModal').click(function() {
        $('#imageModal').removeClass('show'); // Menyembunyikan modal
    });

    // Menutup modal jika mengklik di luar gambar
    $(window).click(function(event) {
        if ($(event.target).is('#imageModal')) {
            $('#imageModal').removeClass('show');
        }
    });
});
