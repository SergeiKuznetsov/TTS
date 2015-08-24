/**
* Turn on <streetName>  * Поверните <направо/налево> на <улицу>
* Let's take <streetName>  * Едем через <улицу>
* Keep on  <streetName> * Держитесь <левее/правее> на <улицу>
* U-Turn on <streetName> * Развернитесь на <улицу>
* @customfunction
*/
function Accusativ(text) {
  if ( text.match(/(поверните|съезд|держитесь|развернитесь).* на/i) ) 
  {
    text = text.replace(/(\bна\b)(.*?)\b(улица|набережная|дорога|линия|аллея|площадь|просека|автодорога|эстакада|магистраль|дамба|деревня)/, // feminine
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
          case 'деревня': streetStatus = 'деревню'; break;
        }  
        return on + streetName + streetStatus;
      });
    text = text.replace(/\bна\s+(на|в|к|под|с|от)\b/, 
      function (onto,to) { 
        return to;
      });
  };
  return text;
} // Accusativ