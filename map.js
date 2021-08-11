var map;
function initMap() {
    map = new ymaps.Map("yandexmap", {
        center: [43.905515, 42.715722],
        zoom: 15
    });
}
ymaps.ready(initMap);