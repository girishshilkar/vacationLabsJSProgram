var i=1;

	for(i=1;i<=100;i++){

		if(i%9==0){
		  console.log("Pluto");
		continue;
		}

		if(i%5==0){
		  console.log("Jupiter");
		continue;
		}

		if(i%3==0){
		  console.log("Earth");
		continue;
		}

		  console.log(i);
	}
