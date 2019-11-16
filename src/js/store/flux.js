const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			categoria: ["Musica", "Deportes", "Teatro y Cine", "Otros", "Danza", "Infantil"],
			region: [
				{
					nombre: "Aisén del G. Carlos Ibáñez del Campo",
					numero: "XI"
				},
				{
					nombre: "Antofagasta",
					numero: "II"
				},
				{
					nombre: "Arica y Parinacota",
					numero: "XV"
				},
				{
					nombre: "Atacama",
					numero: "III"
				},
				{
					nombre: "Biobío",
					numero: "VIII"
				},
				{
					nombre: "Coquimbo",
					numero: "IV"
				},
				{
					nombre: "La Araucanía",
					numero: "IX"
				},
				{
					nombre: "Libertador General Bernardo O’Higgins",
					numero: "VI"
				},
				{
					nombre: "Los Lagos",
					numero: "X"
				},
				{
					nombre: "Los Ríos",
					numero: "XIV"
				},
				{
					nombre: "Magallanes y de la Antártica Chilena",
					numero: "XII"
				},
				{
					nombre: "Maule",
					numero: "VII"
				},
				{
					nombre: "Metropolitana de Santiago",
					numero: "RM"
				},
				{
					nombre: "Ñuble",
					numero: "XVI"
				},
				{
					nombre: "Tarapacá",
					numero: "I"
				},
				{
					nombre: "Valparaíso",
					numero: "V"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
