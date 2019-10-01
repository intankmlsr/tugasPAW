//event pada saat link di klik
$('.page-scroll').on('click', function(){

	//ambil isi herf
	var herf = $(this).attr('herf');

	//tangkap elemen ybs

	var elemenTujuan = $(tujuan);

	//pindahkan scroll

	$('body').animate({
		page-scroll: elemenTujuan.offset().top -50
	},1250, 'swing');

	e.preventDefault();

});