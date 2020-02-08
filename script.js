// mudar imagem da tela inicial | change image home
$('iframe').load( function() {
    var	contents = $('iframe').contents(),
		body = contents.find('body'),
		styleTag = $('<style>hole</style>').appendTo(contents.find('head'));
});