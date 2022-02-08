
/*
Скрипт для добавления классов Fotorama в страницы с инструкциями
Если указать класс напрямую, то клиент с выключенным JS загружает всего одну картинку из нескольких

Таким образом если класс добавлять из JS скрипта, то в обычном случае все останется так же как и было
А те, у кого выключен JS (или блокируется подгрузка сторонних скриптов) увидят все картинки, а не только одну первую
*/

if(location.href.includes("guides/")){
  $("div.images_app-provider").addClass("fotorama")
}