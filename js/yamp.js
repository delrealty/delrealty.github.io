ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32
        });
       var firstButton = new ymaps.control.Button("Кнопка");
        myMap.controls.add(firstButton, {float: 'left'});
         firstButton.events.add('click', function (e) {
            objectManager.setFilter('id > 20');
        });
    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    //objectManager.objects.options.set('preset', 'islands#greenCircleIcon');
     /*objectManager.objects.each(function(object){
        var objectState = objectManager.getObjectState(object.id);
            if (objectState.isClustered) {
                
            } else {
                if (objectState.isShown) {
                    if (object.id > 20)
                    {
                        object.options.set('preset', 'islands#blueDotIcon')
                    }
                    else
                    {
                        object.options.set('preset', 'islands#greenCircleIcon')
                    }
                }
            }
            
        });*/
  

    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "js/data.json"
    }).done(function(data) {
        objectManager.add(data);
         var singleCounter = 0,
    clusterCounter = 0;
objectManager.objects.each(function (object) {
    var objectState = objectManager.getObjectState(object.id);
    if (objectState.isClustered) {
        clusterCounter++;
    } else {
        if (objectState.isShown) {
            singleCounter++;
            if (object.id > 20)
            {
                object.options.preset='islands#greenCircleIcon';///    object.options.set('preset', 'islands#blueDotIcon');
            }
            else
            {
                object.options.preset='islands#blueCircleIcon';///    object.options.set('preset', 'islands#blueDotIcon');   
            }
        }
    }
});
    });

}