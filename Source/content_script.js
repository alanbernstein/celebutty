walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch(node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
    var v = textNode.nodeValue;

    v_orig = v
    v = v.replace(/\bThe Cloud\b/g, "My Butt");
    v = v.replace(/\bThe cloud\b/g, "My butt");
    v = v.replace(/\bthe Cloud\b/g, "my Butt");
    v = v.replace(/\bthe cloud\b/g, "my butt");
    v = v.replace(/\bDonald Trump\b/gi, "A big butt");
    v = v.replace(/\bDonald J. Trump\b/gi, "A big butt");
    v = v.replace(/\bDonald John Trump\b/gi, "A big stinky butt");
    v = v.replace(/\bTrump\b/gi, "Butt");
    v = v.replace(/\bJustin Bieber\b/gi, "My Butt");
    v = v.replace(/\bBieber\b/gi, "My Butt");
    v = v.replace(/\bKourtney Kardashian\b/gi, "My Butt");
    v = v.replace(/\bKardashian\b/gi, "My Butt");
    

    if(v_orig.indexOf('Trump') >=0)
	console.log(v_orig, v)

    textNode.nodeValue = v;
}

