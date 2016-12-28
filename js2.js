var arrName = [];

function usersInputAction() {
    for (var i = 0; i < 5; i++) {
        arrName[i] = prompt("Введите имя" + (i+1))
    }
    console.log(arrName);
}

usersInputAction();
// var arrName = [];

// for (var i = 0; i <=4 ; i++) {

// 	var name = prompt('Введите имя', '');
// 	arrName.push(name);
// 	};

 name = prompt('Введите имя для проверки', '');

for (var i = 0; i <=4 ; i++) {

	if ( name === arrName[i] ) {
		alert(name + ' , вы успешно вошли ');
		break;
	}  else  if( i == 4 ) {alert('Такого имени нет!!');}
};