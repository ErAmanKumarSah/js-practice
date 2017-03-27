	var box = {};
	undefined
	box.book = "react";
	"react"
	box.book;
	"react"
	var cb = box.book;
	undefined

	box.book = "node";
	"node"

	cb;
	"react"

	box.book;
	"react"

	box.size;
	undefined

	box['book'] = "react";
	"react"

	var cb = box["book"];
	undefined

	var key = "book"
	undefined

	box[key];
	"react"

	console.log(key);
	book
	undefined

	var func = function(){
	return "book"
	}
	undefined

	box[func()];
	"react"

	box['key'];
	undefined

	box[key];
	"react"

	box.key;
	undefined

	box[0] = "pdf";
	"pdf"

	box["^&*%"] = "test 123"
	"test 123"

	var text = box["^&*%"];
	undefined

	box["size"] = {"height":5,"width":85};

	box.area = function(){
	return box.size.height * box.size.width;};
	box.area();
	425