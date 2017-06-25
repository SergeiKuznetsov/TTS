/** Accusativ - винительный падеж. Кого? Что?
* turn <left/right> on <streetName>  * поверните <направо/налево> на <улицу>
* exit <left/right> on <streetName> * съезд <справа/слева> на <улицу>
* keep <left/right> on <streetName> * держитесь <левее/правее> на <улицу>
* make u-turn on <streetName> * развернитесь на <улицу>
* @customfunction
*/
function Accusativ(text) {
    text = text.replace(/(.*\bна\b)(.*?)\b(улица|набережная|дорога|линия|аллея|площадь|просека|автодорога|эстакада|магистраль|дамба|хорда|коса|деревня|переправа|площадка|дорожка|трасса)\b/, // feminine

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
          case 'автодорога': streetStatus = 'автодорогу'; break;
          case 'эстакада': streetStatus = 'эстакаду'; break;
          case 'дамба': streetStatus = 'дамбу'; break;
          case 'хорда': streetStatus = 'хорду'; break;
          case 'коса': streetStatus = 'косу'; break;
          case 'деревня': streetStatus = 'деревню'; break;
          case 'переправа': streetStatus = 'переправу'; break;
          case 'площадка': streetStatus = 'площадку'; break;
          case 'дорожка': streetStatus = 'дорожку'; break;
          case 'трасса': streetStatus = 'трассу'; break;
        }
        return on + streetName + streetStatus;
      });
  return text;
} // Accusativ

/** Genitiv - родительный падеж. Кого? Чего?
* continue straight for X minutes to <streetName>.
* продолжайте движение около X мин. до <улицы>
* @customfunction
*/
function Genitiv(text) {
  if ( text.match(/до поворота/i) ) return text;
      result = text.replace(/(\bдо\b)(.*?)\b(улица|набережная|дорога|линия|аллея|площадь|просека|автодорога|эстакада|магистраль|дамба|хорда|коса|деревня|переправа|площадка|дорожка|трасса)\b/, // feminine
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
            case 'хорда': streetStatus = 'хорды'; break;
            case 'коса': streetStatus = 'косы'; break;
            case 'деревня': streetStatus = 'деревни'; break;
            case 'переправа': streetStatus = 'переправы'; break;
            case 'площадка': streetStatus = 'площадки'; break;
            case 'дорожка': streetStatus = 'дорожки'; break;
            case 'трасса': streetStatus = 'трассы'; break;
          }
          return to__until + streetName + streetStatus;
        });
      if (text !== result) { return result }
      result = text.replace(/(\bдо\b)(.*?)\b(проспект|переулок|проезд|тупик|бульвар|тракт|просек|взвоз|спуск|разъезд|переезд|квартал|путепровод|путеправо́д|мост|сад|сквер|тоннель|туннель|парк|проток|канал|остров|микрорайон|район|городок|посёлок|поселок|вал|проулок|объезд|заезд|съезд|обвод|шлагбаум|обход|подъезд)\b/, // masculine
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
            case 'просек': streetStatus = 'просека'; break;
            case 'взвоз': streetStatus = 'взвоза'; break;
            case 'спуск': streetStatus = 'спуска'; break;
            case 'разъезд': streetStatus = 'разъезда'; break;
            case 'переезд': streetStatus = 'переезда'; break;
            case 'квартал': streetStatus = 'квартала'; break;
            case 'путепровод': streetStatus = 'путепровода'; break;
            case 'путеправо́д': streetStatus = 'путеправо́да'; break;
            case 'мост': streetStatus = 'моста'; break;
            case 'сад': streetStatus = 'сада'; break;
            case 'сквер': streetStatus = 'сквера'; break;
            case 'тоннель': streetStatus = 'тоннеля'; break;
            case 'туннель': streetStatus = 'туннеля'; break;
            case 'парк': streetStatus = 'парка'; break;
            case 'проток': streetStatus = 'протока'; break;
            case 'канал': streetStatus = 'канала'; break;
            case 'остров': streetStatus = 'острова'; break;
            case 'микрорайон': streetStatus = 'микрорайона'; break;
            case 'район': streetStatus = 'района'; break;
            case 'городок': streetStatus = 'городка'; break;
            case 'посёлок': streetStatus = 'посёлка'; break;
            case 'поселок': streetStatus = 'поселка'; break;
            case 'вал': streetStatus = 'вала'; break;
            case 'проулок': streetStatus = 'проулка'; break;
            case 'объезд': streetStatus = 'объезда'; break;
            case 'заезд': streetStatus = 'заезда'; break;
            case 'съезд': streetStatus = 'съезда'; break;
            case 'обвод': streetStatus = 'обвода'; break;
            case 'шлагбаум': streetStatus = 'шлагбаума'; break;
            case 'обход': streetStatus = 'обхода'; break;
            case 'подъезд': streetStatus = 'подъезда'; break;
          }
          return to__until + streetName + streetStatus;
        });
      if (text !== result) { return result }
      result = text.replace(/(\bдо\b)(.*?)\b(шоссе|кольцо)\b/, // neuter gender
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
} // Genitiv

/** Dative - дательный падеж. Кому? Чему?
* Let's take <streetName>  * Поедем по <улице>
* @customfunction
*/
function Dative(text) {
  text = text.replace(/(\bПоедем по\b|,)(.*?)\b(улица|набережная|дорога|линия|аллея|площадь|просека|автодорога|эстакада|магистраль|дамба|хорда|коса|деревня|переправа|площадка|дорожка|трасса)\b/g, // feminine
    function (onFullName,to__until,streetName,streetStatus) {
      streetName = streetName.replace(/ая\b/g,"ой"); // Пушкинская -> Пушкинской, Садовая-Спасская -> Садовой-Спасской
      streetName = streetName.replace(/яя\b/g,"ей"); // Зимняя -> Зимней
      streetName = streetName.replace(/ья\b/,"ьей"); // третья -> третьей, Казачья -> Казачьей
      streetName = streetName.replace(/а\b/,"ой"); // Репищева -> Репищевой
      streetName = streetName.replace(/3-я\b/,"3-ей"); // 3-я -> 3-ей
      streetName = streetName.replace(/-я\b/,"-ой"); // 1-я -> 1-ой
      switch (streetStatus) {
        case 'улица': streetStatus = 'улице'; break;
        case 'набережная': streetStatus = 'набережной'; break;
        case 'дорога': streetStatus = 'дороге'; break;
        case 'линия': streetStatus = 'линии'; break;
        case 'аллея': streetStatus = 'аллее'; break;
        case 'площадь': streetStatus = 'площади'; break;
        case 'просека': streetStatus = 'просеке'; break;
        case 'автодорога': streetStatus = 'автодороге'; break;
        case 'эстакада': streetStatus = 'эстакаде'; break;
        case 'магистраль': streetStatus = 'магистрали'; break;
        case 'дамба': streetStatus = 'дамбе'; break;
        case 'хорда': streetStatus = 'хорде'; break;
        case 'коса': streetStatus = 'косе'; break;
        case 'деревня': streetStatus = 'деревне'; break;
        case 'переправа': streetStatus = 'переправе'; break;
        case 'площадка': streetStatus = 'площадке'; break;
        case 'дорожка': streetStatus = 'дорожке'; break;
        case 'трасса': streetStatus = 'трассе'; break;
      }
      return to__until + streetName + streetStatus;
    });
  text = text.replace(/(\bПоедем по\b|,)(.*?)\b(проспект|переулок|проезд|тупик|бульвар|тракт|просек|взвоз|спуск|разъезд|переезд|квартал|путепровод|путеправо́д|мост|сад|сквер|тоннель|туннель|парк|проток|канал|остров|микрорайон|район|городок|посёлок|поселок|вал|проулок|объезд|заезд|съезд|обвод|обход|подъезд)\b/g, // masculine
    function (onFullName,to__until,streetName,streetStatus) {
      streetName = streetName.replace(/чий\b/,"чьему"); // Заячий -> Заячьему
      streetName = streetName.replace(/тий\b/,"тьему"); // третий -> третьему
      streetName = streetName.replace(/ний\b/,"него"); // Верхний -> Верхнего
      streetName = streetName.replace(/(ой|ий|ый)\b/g,"ому"); // Большой Смоленский -> Большому Смоленскому, Зелёный -> Зелёному
      streetName = streetName.replace(/ов\b/,"ову"); // Агатов -> Агатову
      streetName = streetName.replace(/ин\b/,"ину"); // Апраксин -> Апраксину
      streetName = streetName.replace(/-й\b/,"-му"); // 1-й -> 1-му
      switch (streetStatus) {
        case 'проспект': streetStatus = 'проспекту'; break;
        case 'переулок': streetStatus = 'переулку'; break;
        case 'проезд': streetStatus = 'проезду'; break;
        case 'тупик': streetStatus = 'тупику'; break;
        case 'бульвар': streetStatus = 'бульвару'; break;
        case 'тракт': streetStatus = 'тракту'; break;
        case 'просек': streetStatus = 'просеку'; break;
        case 'взвоз': streetStatus = 'взвозу'; break;
        case 'спуск': streetStatus = 'спуску'; break;
        case 'разъезд': streetStatus = 'разъезду'; break;
        case 'переезд': streetStatus = 'переезду'; break;
        case 'квартал': streetStatus = 'кварталу'; break;
        case 'путепровод': streetStatus = 'путепроводу'; break;
        case 'путеправо́д': streetStatus = 'путеправо́ду'; break;
        case 'мост': streetStatus = 'мосту'; break;
        case 'сад': streetStatus = 'саду'; break;
        case 'сквер': streetStatus = 'скверу'; break;
        case 'тоннель': streetStatus = 'тоннелю'; break;
        case 'туннель': streetStatus = 'туннелю'; break;
        case 'парк': streetStatus = 'парку'; break;
        case 'проток': streetStatus = 'протоку'; break;
        case 'канал': streetStatus = 'каналу'; break;
        case 'остров': streetStatus = 'острову'; break;
        case 'микрорайон': streetStatus = 'микрорайону'; break;
        case 'район': streetStatus = 'району'; break;
        case 'городок': streetStatus = 'городку'; break;
        case 'посёлок': streetStatus = 'посёлку'; break;
        case 'поселок': streetStatus = 'поселку'; break;
        case 'вал': streetStatus = 'валу'; break;
        case 'проулок': streetStatus = 'проулку'; break;
        case 'объезд': streetStatus = 'объезду'; break;
        case 'заезд': streetStatus = 'заезду'; break;
        case 'съезд': streetStatus = 'съезду'; break;
        case 'обвод': streetStatus = 'обводу'; break;
        case 'обход': streetStatus = 'обходу'; break;
        case 'подъезд': streetStatus = 'подъезду'; break;
      }
      return to__until + streetName + streetStatus;
    });
  text = text.replace(/(\bПоедем по\b|,)(.*?)\b(шоссе|кольцо)\b/g, // neuter gender
    function (onFullName,to__until,streetName,streetStatus) {
      streetName = streetName.replace(/ое\b/g,"ому"); // Нефтеюганское -> Нефтеюганскому
      streetName = streetName.replace(/ье\b/,"ьему"); // третье -> третьему, Казачье -> Казачьему
      streetName = streetName.replace(/-е\b/,"-му"); // 1-е -> 1-му
      switch (streetStatus) {
        case 'кольцо': streetStatus = 'кольцу'; break;
      }
      return to__until + streetName + streetStatus;
    });
  return text;
} // Dative

if ( text.match(/(поверните|съезд|держитесь|развернитесь).* на/i) )
{
  text = Accusativ(text);
};

if ( text.match(/продолжайте движение/i) )
{
  text = Genitiv(text);
};


if ( text.match(/Поедем по/i) )
{
  text = Dative(text);
};

