var mongoose = require('mongoose');
var modelArticle = require('./schema/files.js');

var archivos = function  (conf) {
	conf = conf || {};
	this.model = modelArticle;
}

//guardar y actualizar
archivos.prototype.save = function(data,callback) {
	this.model.findOneAndUpdate({
		subject:data.subject,
		description:data.description,
		teacher:data.teacher
	},data,{upsert:true}).exec(function(err,doc){
		callback(doc);
	});
};
//========================obtener todos==================================
archivos.prototype.findAll = function(callback) {
	this.model
	.find(
		{},
		{  subject: 1,equipo:1, _id:1 , gf:1 , gc:1, pg:1, pe:1, pp:1  })
	.exec(function(err, data){
			if(err) throw err;
			callback(data);
	})
};
//obetener los datos de un archivo por un atributo
archivos.prototype.findLevel = function(leveln, callback) {
	this.model.find(
		{level:leveln},
		{_id: 0, subject:1, description:1, teacher:1, level:1,
		 "homework.partial_n":1 , "homework.homework_n.description":1, "homework.homework_n.url":1,
		 "exam.partial_n":1, "exam.description":1, "exam.url":1,
		 "materia.partial_n":1, "materia.materia_n.description":1, "materia.materia_n.url":1})
		.exec(function(err, doc){
		callback(doc)
	})
};

archivos.prototype.findId = function(id, callback) {
	this.model.findOne(
		{_id:id},
		{_id: 0, subject:1, equipo:1, description:1, teacher:1, level:1,entrenador:1 , presidente:1, 
		 "jugadores.nombre":1, "jugadores.goles":1, "homework.partial_n":1 , "homework.homework_n.description":1, "homework.homework_n.url":1,
		 "exam.partial_n":1, "exam.description":1, "exam.url":1,
		 "materia.partial_n":1, "materia.materia_n.description":1, "materia.materia_n.url":1})
		.exec(function(err, doc){
			if(err) throw err;
			callback(doc);
		})
};

//==========================borrar x id==================================
archivos.prototype.delete_id = function(id, callback) {
	this.model.remove({_id:id})
		.exec(function(err, doc){
			if(err) throw err;
			callback();
	})
};
//=======================actualizar=================================
archivos.prototype.update = function(id,data,callback) {
	this.model.findOneAndUpdate(
		{_id:id},
		{_id: 0, subject:1, description:1, teacher:1, level:1,
		 "homework.partial_n":1 , "homework.homework_n.description":1, "homework.homework_n.url":1,
		 "exam.partial_n":1, "exam.description":1, "exam.url":1,
		 "materia.partial_n":1, "materia.materia_n.description":1, "materia.materia_n.url":1
		},
		function(err,data){
			if(err) throw err;
			callback(data);	
		})
};
module.exports = archivos;