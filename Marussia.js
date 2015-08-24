/**
 * Turn on <streetName>  * Поверните <направо/налево> на <улицу>
 * Let's take <streetName>  * Едем через <улицу>
 * Keep on  <streetName> * Держитесь <левее/правее> на <улицу>
 * U-Turn on <streetName> * Развернитесь на <улицу>
 * @customfunction
 * 10/08/15
 */
function Accusativ(StringTTS) {
  StringTTS = StringTTS.replace(/(\bна\b)(.*?)\b(улица|набережная|дорога|линия|аллея|площадь|просека|автодорога|эстакада|магистраль|дамба)/, // feminine
    function (onFullName,on,streetName,streetStatus) { 
      streetName = streetName.replace(/ая\b/g,"ую"); // Пушкинская -> Пушкинскую
      streetName = streetName.replace(/яя\b/g,"юю"); // Зимняя -> Зимнюю
      streetName = streetName.replace(/ья\b/,"ью"); // третья -> третью, Казачья -> Казачью
      streetName = streetName.replace(/а\b/,"у"); // Репищева -> Репищеву
      streetName = streetName.replace(/-я\b/,"-ю"); // 1-я -> 1-ю
      switch (streetStatus) {
        case 'улица': streetStatus = 'улицу'; break;
        case 'набережная': streetStatus = 'набережную'; break;
        case 'дорога': streetStatus = 'дорогу'; break;
        case 'линия': streetStatus = 'линию'; break;
        case 'аллея': streetStatus = 'аллею'; break;
        case 'просека': streetStatus = 'просеку'; break;
        case 'эстакада': streetStatus = 'эстакаду'; break;
        case 'дамба': streetStatus = 'дамбу'; break;
      }  
      return on + streetName + streetStatus;
    });
  StringTTS = StringTTS.replace(/\bна\s+(на|в|к|под|с|от)\b/, 
    function (onto,to) { 
      return to;
    });
  return StringTTS;  
}

/**
 * Continue straight for X minutes to <streetName>.
 * продолжайте движение X минут до улицы
 * @customfunction
 * 17/08/15
 */
function Genitiv(StringTTS) {
  StringTTS = StringTTS.replace(/\bдо\s+(на|в|к)\b/,
    function (toto,to) {
      return "до поворота " + to;
    });
  result = StringTTS.replace(/(\bдо\b)(.*?)\b(улица|набережная|дорога|линия|аллея|площадь|просека|автодорога|эстакада|магистраль|дамба)/, // feminine
    function (onFullName,to__until,streetName,streetStatus) {
      streetName = streetName.replace(/ая\b/g,"ой"); // Пушкинская -> Пушкинской, Садовая-Спасская -> Садовой-Спасской
      streetName = streetName.replace(/яя\b/g,"ей"); // Зимняя -> Зимней
      streetName = streetName.replace(/ья\b/,"ьей"); // третья -> третьей, Казачья -> Казачьей
      streetName = streetName.replace(/а\b/,"ой"); // Репищева -> Репищевой
      streetName = streetName.replace(/3-я\b/,"3-ей"); // 3-я -> 3-ей
      streetName = streetName.replace(/-я\b/,"-ой"); // 1-я -> 1-ой
      switch (streetStatus) {
        case 'улица': streetStatus = 'улицы'; break;
        case 'набережная': streetStatus = 'набережной'; break;
        case 'дорога': streetStatus = 'дороги'; break;
        case 'линия': streetStatus = 'линии'; break;
        case 'аллея': streetStatus = 'аллеи'; break;
        case 'площадь': streetStatus = 'площади'; break;
        case 'просека': streetStatus = 'просеки'; break;
        case 'автодорога': streetStatus = 'автодороги'; break;
        case 'эстакада': streetStatus = 'эстакады'; break;
        case 'магистраль': streetStatus = 'магистрали'; break;
        case 'дамба': streetStatus = 'дамбы'; break;
      }
      return to__until + streetName + streetStatus;
    });
  if (StringTTS !== result) { return result }
  result = StringTTS.replace(/(\bдо\b)(.*?)\b(проспект|переулок|проезд|тупик|бульвар|тракт|объезд|заезд|съезд|просек|микрорайон|взвоз|спуск|переезд|квартал|путепровод|мост|обвод|поселок|городок|разворот|шлагбаум|обход|подъезд)/, // masculine
    function (onFullName,to__until,streetName,streetStatus) {
      streetName = streetName.replace(/чий\b/,"чьего"); // Заячий -> Заячьего
      streetName = streetName.replace(/тий\b/,"тьего"); // третий -> третьего
      streetName = streetName.replace(/ний\b/,"него"); // Верхний -> Верхнего
      streetName = streetName.replace(/(ой|ий|ый)\b/g,"ого"); // Большой Смоленский -> Большого Смоленского, Зелёный -> Зелёного
      streetName = streetName.replace(/ов\b/,"ова"); // Агатов -> Агатова
      streetName = streetName.replace(/ин\b/,"ина"); // Апраксин -> Апраксина
      streetName = streetName.replace(/-й\b/,"-го"); // 1-й -> 1-го
      switch (streetStatus) {
        case 'проспект': streetStatus = 'проспекта'; break;
        case 'переулок': streetStatus = 'переулка'; break;
        case 'проезд': streetStatus = 'проезда'; break;
        case 'тупик': streetStatus = 'тупика'; break;
        case 'бульвар': streetStatus = 'бульвара'; break;
        case 'тракт': streetStatus = 'тракта'; break;
        case 'объезд': streetStatus = 'объезда'; break;
        case 'заезд': streetStatus = 'заезда'; break;
        case 'съезд': streetStatus = 'съезда'; break;
        case 'просек': streetStatus = 'просека'; break;
        case 'микрорайон': streetStatus = 'микрорайона'; break;
        case 'взвоз': streetStatus = 'взвоза'; break;
        case 'спуск': streetStatus = 'спуска'; break;
        case 'переезд': streetStatus = 'переезда'; break;
        case 'квартал': streetStatus = 'квартала'; break;
        case 'путепровод': streetStatus = 'путепровода'; break;
        case 'мост': streetStatus = 'моста'; break;
        case 'обвод': streetStatus = 'обвода'; break;
        case 'поселок': streetStatus = 'поселка'; break;
        case 'городок': streetStatus = 'городка'; break;
        case 'разворот': streetStatus = 'разворота'; break;
        case 'шлагбаум': streetStatus = 'шлагбаума'; break;
        case 'обход': streetStatus = 'обхода'; break;
        case 'подъезд': streetStatus = 'подъезда'; break;
        case 'кольцо': streetStatus = 'кольца'; break;
      }
      return to__until + streetName + streetStatus;
    });
  if (StringTTS !== result) { return result }
  result = StringTTS.replace(/(\bдо\b)(.*?)\b(шоссе|кольцо)/, // neuter gender
    function (onFullName,to__until,streetName,streetStatus) {
      streetName = streetName.replace(/ое\b/g,"ого"); // Нефтеюганское -> Нефтеюганского
      streetName = streetName.replace(/ье\b/,"ьего"); // третье -> третьего, Казачье -> Казачьего
      streetName = streetName.replace(/-е\b/,"-го"); // 1-е -> 1-го
      switch (streetStatus) {
        case 'кольцо': streetStatus = 'кольца'; break;
      }
      return to__until + streetName + streetStatus;
    });
  return result;
}
