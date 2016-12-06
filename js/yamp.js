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
            gridSize: 128
        });
    var officeButton = new ymaps.control.Button("Офисы");
    var tradeButton  = new ymaps.control.Button("Торговые");
    var storeButton  = new ymaps.control.Button("Склад");
    var prodButton  = new ymaps.control.Button("Производство");
    var strFilter = function () {
        var result='';
        
        if (officeButton.isSelected()){
            result = '';
        }
        else
        {
            result = 'properties.type != "office"';
        }

        if (tradeButton.isSelected()){
            
            result +=''
        }
        else
        {
            if(result!='')
                result += ' && ';
            result +=' properties.type != "trade"';
            
        }
        if (storeButton.isSelected()){
            result += '';
            
        }
        else
        {
             if(result!='')
                result += ' && ';
            result +='properties.type != "store"';
        }
        if (prodButton.isSelected()){
            result += '';
        }
        else
        {
            if(result!='')
                result += ' && ';
            result +='properties.type != "prod"';
        }
        return result;
    };
    myMap.controls.add(officeButton, {float: 'left'});
    myMap.controls.add(tradeButton, {float: 'left'});
    myMap.controls.add(storeButton, {float: 'left'});
    myMap.controls.add(prodButton, {float: 'left'});

    officeButton.events.add('select', function (e) {
        objectManager.setFilter(strFilter())
         
        });
    tradeButton.events.add('select', function (e) {
        objectManager.setFilter(strFilter())
         
        });
    storeButton.events.add('select', function (e) {
        objectManager.setFilter(strFilter())
         
        });
    prodButton.events.add('select', function (e) {
        objectManager.setFilter(strFilter())
         
        });
    officeButton.events.add('deselect', function (e) {
        objectManager.setFilter(strFilter())
         
        });
    tradeButton.events.add('deselect', function (e) {
        objectManager.setFilter(strFilter())
         
        });
    storeButton.events.add('deselect', function (e) {
        objectManager.setFilter(strFilter())
         
        });
    prodButton.events.add('deselect', function (e) {
        objectManager.setFilter(strFilter())
         
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
               /* if (objectState.isClustered) {
                    clusterCounter++;
                } else {
                    if (objectState.isShown) {*/
                        singleCounter++;
                        var preset ='islands#blueDotIcon';
                        switch(object.properties.type)
                        {
                                case 'office':
                                    preset = 'islands#blueCircleDotIcon';
                                break;
                                case 'trade':
                                    preset = 'islands#redCircleDotIcon';
                                break;
                                case 'prod':
                                    preset = 'islands#blackCircleDotIcon';
                                break;
                                case 'store':
                                    preset = 'islands#violetCircleDotIcon';
                                break;
                        }
                        
                        {
                            object.options.preset=preset;
                        }
                        
        //}
    //}
});
        });

    }