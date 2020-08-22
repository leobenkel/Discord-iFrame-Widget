var serverID = getParameterByName('serverID');
var title = getParameterByName('title') ? getParameterByName('title') : false;
var invite = getParameterByName('invite') ? getParameterByName('invite') : false;
var theme = getParameterByName('theme') ? getParameterByName('theme') : 'dark';

$.getJSON('https://discordapp.com/api/servers/' + serverID + '/widget.json', function(data) {
	$("head").append('<link rel="stylesheet" href="css/' + theme + '.css" />');

	var titlebar = ``;
	title = title ? title : data.name;
	
	titlebar += `<h3 class='title-text'>` + title + ' (' + data.members.length + ')</h3>`;
	
	if (invite) {
		titlebar += `<span class='invite-text'><a target="_parent" class='invite-button' href='` + data.instant_invite + `'>JOIN</a></span>`;
	}

	$('.discord-title').html(titlebar);
});



function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
