const getAllStudentColors = () => {

	for(let i = 0; i < 11; i++){
		let randomNumber = Math.round(Math.random() * 3);
		let color;
		switch (randomNumber){
			case 0:
				color = 'red';
				break;
			case 1:
				color = 'yellow';
				break;
			case 2:
				color = 'blue';
				break;
			case 3:
				color = 'green';
				break;
			default:
				color = 'error'
				break;
		}
		console.log(color);
	}
}
getAllStudentColors();