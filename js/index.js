var article_1 = {
	'foto': 'https://itproger.com/img/news/1517501131.jpg',
	'title': 'Устаревшие языки, которые уже не стоит изучать',
	'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
};

var article_2 = {
	'foto': 'https://itproger.com/img/news/1520152698.jpg',
	'title': 'Зачем нужен язык программирования Rust?',
	'intro': 'Rust набирает популярность, но при этом многие до сих пор не понимают его ценности и функций. Мы расскажем про основные преимущества языка программирования Rust.'
};

var article_3 = {
	'foto': 'https://itproger.com/img/news/1518258565.jpg',
	'title': 'Что выбрать C++ или C#? С чего лучше начать?',
	'intro': 'Между собой оба языка очень похожи. Статья поможет расставить всё по своим местам.'
};

var article_4 = {
	'foto': 'https://itproger.com/img/tasks/1516438067.jpg',
	'title': '3 логические задачи для настоящего программиста',
	'intro': 'Компании любят проверять молодых специалистов на различные логические задачи. Мы подобрали три интересных задачи, которые заставят вас задуматься.'
};

var article_5 = {
	'foto': 'https://itproger.com/img/news/1517495970.jpg',
	'title': 'Как создать свою криптовалюту?',
	'intro': 'Создание собственной криптовалюты это сложная задача, на которую уйдет не мало сил и времени. Мы расскажем вам общий алгоритм!'
};

var article_6 = {
	'foto': 'https://itproger.com/img/news/1516439711.jpg',
	'title': 'ТОП 10: Подборка хобби для программиста',
	'intro': 'Мы подобрали 10 хороших хобби, чтобы можно было с удовольствием провести время вне работы, а также улучшить логические и креативные способности мозга.'
};

var article_7 = {
	'foto': 'https://itproger.com/img/news/1516890380.jpg',
	'title': 'СЕО-продвижение – верный способ улучшить свой бизнес',
	'intro': 'Продвижение сайта это сложная работа, требующая вложений как денег, так и времени. Мы расскажем про верные способы СЕО-продвижения, позволяющие раскрутить сайт!'
};

var article_8 = {
	'foto': 'https://itproger.com/img/news/1516366532.jpg',
	'title': '10 самых популярных сайтов написанных на Django',
	'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};
	
var articles = [article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8];

// C какого элемента по индексу начинать. Изначально с индекса 0 (первый элемент)
var start = 0;

$("#loadMore").on("click", function () {
	var htmlToInsert = ''; // Сюда запишем весь HTML для размещения на странице
	
	for(var i = start; i < articles.length; i++) {
		if(i > 3 + start) // Всегда отображаем лишь по 4 статьи, поэтому если больше 3, то выходим из цикла
			break;
		htmlToInsert += "<div class='card'><img src='" + articles[i].foto + "' class='card-img-top' alt='" + articles[i].title + "'><div class='card-body'><h5 class='card-title'>" + articles[i].title + "</h5><p class='card-text'>" + articles[i].intro + "</p><a href='#' class='btn btn-warning'>Читать далее</a></div></div>";
		
		// Если индекс сейчас равен количеству элементов и минус один, то мы скрываем кнопку загрузить больше
		if(i == articles.length - 1) {
			$("#loadMore").hide();
			break;
		}
	}
	// Вставляем в конец блока все новые статьи, плюс в конце ставим разделение между блоками
	$("#loadMoreBlock").append(htmlToInsert + "<div style='clear: both'></div>");
	
	start += 4; // Добавляем 4, чтобы в следующий раз начинали с тех статей, которые еще не отображены
});

// create overlay

var search = document.querySelector("#search");
var overlay = document.querySelector("#overlay");
var closeBtn = document.querySelector("#close-btn");

function showOverlay () {
    overlay.style.display = "block";
}

search.addEventListener("click", showOverlay);

function closeOverlay () {
    overlay.style.display = "none";
}

closeBtn.addEventListener("click", closeOverlay);