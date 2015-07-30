var File = require('../websites/models/schema/files.js');

var BaseConocimiento = new File({
	subject: 'Man United',//nombre materia
	description: 'El contenido de esta materia es programar en prolog',//descripcion
	teacher: 'Ivan',//profesor
	level: '8',//nivel
	code: 'EIS54125',//codigo
	equipo: "Los Alchones",
	gf: 4,
	gc: 4,
	pg: 2, 
	pe: 2, 
	pp: 2,
	entrenador:"Mario Gomez",
	presidente:"Terrateniente",
	jugadores:[
		{
		nombre:"Antonio Valencia",
		goles :1
		},
		{
		nombre:"Rooney",
		goles :13
		},
		{
		nombre:"De Gea",
		goles :0
		}
		,
		{
		nombre:"Falcao",
		goles :1
		},
		{
		nombre:"Zuck Zack",
		goles :2
		},
		{
		nombre:"Rafael",
		goles :9
		},
		{
		nombre:"Mario",
		goles :2
		},
		{
		nombre:"Hermes",
		goles :5
		}
	],



	homework:[
		{partial_n:'1',
		 homework_n:[
			{description:'prolog los campesino',url:'wwww.mega.con'},
			{description:'Resumen de paper tecnico',url:'wwww.mega.con'}
		]},
		{partial_n:'2',
		 homework_n:[
			{description:'prolog los canibales',url:'wwww.mega.con'},
			{description:'resumen del capitulo 11',url:'wwww.mega.con'}
		]},
		{partial_n:'3',
		 homework_n:[
			{description:'Redsemantica',url:'wwww.mega.con'},
			{description:'Redsemeantica',url:'wwww.mega.con'}
		]}
		],
	exam:[
		{
			partial_n:'1',
			description:'Examanes teorico hasta el capitulo cinco',
			url:'www.mega.com/parcial'
		},
		{
			partial_n:'2',
			description:'Examen de canibales',
			url:'www.mega.com/parcial'
		}

		],
	materia:[
		{
		partial_n:'1',
		materia_n:[
			{description:'Capitulo 1', url:'www.mega.con/dddd'},
			{description:'Capitulo 2', url:'www.mega.con/aaa'}
			]
		},
		{
		partial_n:'2',
		materia_n:[
			{description:'Capitulo 4', url:'www.mega.con/capitulo4'},
			{description:'Capitulo 5', url:'www.mega.con/capitulo5'}
			]
		}
		]
	

	});//end red semantica	

BaseConocimiento.save(function (err, justin){
	console.log('Equipo Guardadi');		
});