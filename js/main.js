$(() => {
console.log('aaa')
    /**
     * Выставление времени и даты в шапке
     * */





    const Clock = function () {
            let $time = $('.js-timer-time'),
                serverTimeDelta = localStorage.getItem('estpLocalToServerTimeDelta'),
                $date = $('.js-timer-date'),

                updateDOM = function (newDate) {
                    $time.html(newDate.toTimeString().split(' ')[0]);
                    let month = newDate.getMonth() + 1,
                        day = newDate.getDate();

                    $date.html([
                        (String(day).length === 1 && '0') + day,
                        (String(month).length === 1 && '0') + month,
                        newDate.getFullYear()
                    ].join('.'));

                };

            // Для ускорения отображения, берем закешированную разницу во времени с сервером
            if (serverTimeDelta) {
                updateDOM(new Date(Number(new Date()) + Number(serverTimeDelta)));
            } else {
                updateDOM(new Date());
            }
console.log('bbb');
            /*$.get('/server/time/').success(function (dateW3C) {

                dateW3C = dateW3C.moscowTime;

                let backendDate = util.createDateFromW3C(dateW3C);

                localStorage.setItem('estpLocalToServerTimeDelta', backendDate - new Date());

                setInterval(function () {
                    backendDate = new Date(backendDate.getTime() + 1000);

                    updateDOM(backendDate);
                }, 1000);
            });*/
        },

        // Utils
        util = {},

        // Модальное окно с городами
        $citiesModal = $('.js-cities-modal');




    /**
     * Возвращает объект даты без смещения GMT (из-за его разницы в не обновленных браузерах)
     * https://habrahabr.ru/post/242459/
     *
     * @param dateW3C -- Дата в формате '2016-03-31T16:10:15+03:00' (в PHP константа -- DATE_W3C)
     * */
    util.createDateFromW3C = function (dateW3C) {

        let dateArray = dateW3C
            .match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/)
            .slice(1)
            .map(function (s, i) {
                return i === 1 ? s - 1 : +s;
            });

        return new Date(
            dateArray[0],
            dateArray[1],
            dateArray[2],
            dateArray[3],
            dateArray[4],
            dateArray[5]




        );
    };

    /* При открытие модального окна запрашиваем список регионов Центрального округа */
    $('.js-cities').on('click', function (e) {
        e.preventDefault();

        if (isRegionsLoaded(1)) {
            getCities('regions', 1).then(function (resp) {
                displayRegions(resp.data.regions, 1);

                $citiesModal.modal('show');
            });
        } else {
            $citiesModal.modal('show');
        }
    });

    /* Запрашиваем список регионов по ID */
    $('.js-district-lnk').on('click', function () {
        let id = $(this).data('link');

        if (isRegionsLoaded(id)) {

            getCities('regions', id).then(function (resp) {
                displayRegions(resp.data.regions, id);
            });
        }
    });






    console.log('ccc');
    /* Запрашиваем список городов региона по ID */
    $('.js-district-content').on('click', '.js-region', function (e) {
        let id = $(this).data('region-code'),
            activeClass = 'estp-cities__region--active';

        e.preventDefault();

        if (!$(this).hasClass(activeClass)) {
            $('.' + activeClass).removeClass(activeClass);
            $(this).addClass(activeClass);

            getCities('cities', id).then(function (resp) {
                displayCities(resp.data.cities);
            });
        }
    });




    /* Отправляем ID выбранного города */
    $('.js-cities-content').on('click', '.js-check-city', function (e) {
        let id = $(this).data('aoguid');

        e.preventDefault();

        getCities('save', id).then(function (resp) {
            if (resp && resp.success) {
                window.location.reload();
            }
        });
    });

    function isRegionsLoaded(id) {
        return !$('.js-regions-list[data-district=' + id + ']').length;
    }

    /* Отображение списка городов */
    function displayCities(cities) {
        let pieceSize = Math.ceil(cities.length / 4),
            groups = [];

        while (cities.length) {
            groups.push(cities.splice(0, pieceSize));
        }

        groups = groups.map(function (arr) {
            return $('<div></div>')
                .addClass('estp-cities__cell')
                .html(arr.reduce(function (links, item) {

                    links += [
                        '<a class="js-check-city" data-aoguid=' + item.aoguid + '>',
                        item.offname,
                        '</a>',
                        '<br>'
                    ].join('');

                    return links;
                }, ''));
        });

        $('.js-cities-content').html(groups);
    }
    console.log('ddd');
    /* Отображение списка регионов */
    function displayRegions(resp, id) {

        let regions = [],
            data = [],
            pieceSize;

        for (let key in resp) {

            if (resp.hasOwnProperty(key)) {

                data.push(resp[key]);
            }
        }

        pieceSize = Math.ceil(data.length / 2);

        while (data.length) {
            regions.push(data.splice(0, pieceSize));
        }

        regions = regions.map(function (arr) {
            return $('<div></div>')
                .addClass('estp-cities__cell')
                .html(arr.reduce(function (links, item) {

                    links += [
                        '<a class="estp-cities__region js-region" data-region-code=' + item.regioncode + '>',
                        item._displayname,
                        '</a>',
                        '<br>'
                    ].join('');

                    return links;
                }, ''));
        });

        let $div = $('<div></div>')
            .addClass('estp-tabs__i')
            .addClass('estp-tabs__i--' + id)
            .addClass('estp-cities__table')
            .addClass('js-regions-list')
            .attr('data-district', id).html(regions);

        $('.js-district-content').append($div);
    }
    console.log('eee');
    /* Запрос на сервер списков городов или регионов */
    function getCities(action, id) {
        let params = {};

        $('.js-loader').show();

        if (action === 'cities') {

            params = {
                action: action,
                regioncode: id
            };
        } else if (action === 'regions') {

            params = {
                action: action,
                _foid: id
            };
        } else {

            params = {
                action: action,
                aoguid: id
            };
        }

        return $.get('/ajax/fias/', params).success(function (resp) {
            $('.js-loader').hide();
            return resp;
        }).error(function (resp) {
            $('.js-loader').hide();
            return resp;
        });
    }

    Clock();
});