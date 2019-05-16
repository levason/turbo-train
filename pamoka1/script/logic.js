// var Katalogas1=[{
// 	GrozyneLyt:[{
// 		knyga1:["ADGJL",metai=2018,"loa","150"],
// 		knyga2:["HKLADJLG",metai=2017,"manija","300"],
// 		knyga3:["ASFGADSCV",metai=2014,"Nenoriu","70"],
// 		knyga4:["ASCVDFGH",metai=2019,"NArkomanas","420"]
// 	}]
// }];

var Katalogas={
	Grozyne:{
		Knyga1:{
			ID:"H46DF",
			Metai:"2018",
			Pavadinimas:"Dramblys",
			PuslSk:30
		},
		Knyga2:{
			ID:"JKCB5",
			Metai:"2017",
			Pavadinimas:"Kaulu Idaras",
			PuslSk:400
		},
		Knyga3:{
			ID:"H46DF",
			Metai:"2018",
			Pavadinimas:"Dramblys",
			PuslSk:30
		},
		Knyga4:{
			ID:"JKCB5",
			Metai:"2017",
			Pavadinimas:"Kaulu Idaras",
			PuslSk:400
		}
	},
	Fantastine:{
		Knyga1:{
			ID:"HJD4F",
			Metai:"2017",
			Pavadinimas:"Apple",
			PuslSk:150
		},
		Knyga2:{
			ID:"HVJDF",
			Metai:"2019",
			Pavadinimas:"Sazam",
			PuslSk:100
		},
		Knyga3:{
			ID:"HJD4F",
			Metai:"2017",
			Pavadinimas:"Apple",
			PuslSk:150
		},
		Knyga4:{
			ID:"HVJDF",
			Metai:"2016",
			Pavadinimas:"Sazam",
			PuslSk:100
		},
		Knyga5:{
			ID:"HJD4F",
			Metai:"2017",
			Pavadinimas:"Apple",
			PuslSk:150
		},
	},
	Istorine:{
		Knyga1:{
			ID:"C3KV1",
			Metai:"2018",
			Pavadinimas:"Kanja",
			PuslSk:1000
		},
		Knyga2:{
			ID:"NBX24",
			Metai:"2020",
			Pavadinimas:"JADZE",
			PuslSk:300
		},
		Knyga3:{
			ID:"J84AK",
			Metai:"2018",
			Pavadinimas:"Kamaras",
			PuslSk:120
		}
	}
}
var string= " (Nauja Knyga)";
//console.log(Katalogas);
for(var prop_1 in Katalogas){
	console.log(prop_1+" (Knygos: "+Object.keys(Katalogas[prop_1]).length+")");
	for(var prop_2 in Katalogas[prop_1]){
		console.log(prop_2);
		for(var prop_3 in Katalogas[prop_1][prop_2]){
			if (Katalogas[prop_1][prop_2].Metai>=2018){
				Katalogas[prop_1][prop_2].Metai += string;
				console.log(prop_3+": "+Katalogas[prop_1][prop_2][prop_3]);
			}else{
				console.log(prop_3+": "+Katalogas[prop_1][prop_2][prop_3]);
			}
		}

	}
}