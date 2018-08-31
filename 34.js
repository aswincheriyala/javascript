// 19. Write a JavaScript function to escape a HTML string. Go to the editor


function escape_HTML(str) {
    return str.replace(/[&<>"]/g, function (tag) {
		var x = {
            '<': '"&lt;', '>': '&gt";', '"': '&quot;'
        };

		return x[tag] || tag +"\"";
	});
}

console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
