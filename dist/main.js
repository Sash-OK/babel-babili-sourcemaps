'use strict';$(function(){function a(a){return!$('.js-regions-list[data-district='+a+']').length}function b(a){for(var b=e(a.length/4),c=[];a.length;)c.push(a.splice(0,b));c=c.map(function(a){return $('<div></div>').addClass('estp-cities__cell').html(a.reduce(function(a,b){return a+=['<a class="js-check-city" data-aoguid='+b.aoguid+'>',b.offname,'</a>','<br>'].join(''),a},''))}),$('.js-cities-content').html(c)}function c(a,b){var c,d=[],f=[];for(var g in a)a.hasOwnProperty(g)&&f.push(a[g]);for(c=e(f.length/2);f.length;)d.push(f.splice(0,c));d=d.map(function(a){return $('<div></div>').addClass('estp-cities__cell').html(a.reduce(function(a,b){return a+=['<a class="estp-cities__region js-region" data-region-code='+b.regioncode+'>',b._displayname,'</a>','<br>'].join(''),a},''))});var h=$('<div></div>').addClass('estp-tabs__i').addClass('estp-tabs__i--'+b).addClass('estp-cities__table').addClass('js-regions-list').attr('data-district',b).html(d);$('.js-district-content').append(h)}function d(a,b){var c={};return $('.js-loader').show(),c='cities'===a?{action:a,regioncode:b}:'regions'===a?{action:a,_foid:b}:{action:a,aoguid:b},$.get('/ajax/fias/',c).success(function(a){return $('.js-loader').hide(),a}).error(function(a){return $('.js-loader').hide(),a})}var e=Math.ceil;console.log(2);var f=$('.js-cities-modal');({}).createDateFromW3C=function(a){var b=a.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/).slice(1).map(function(a,b){return 1===b?a-1:+a});return new Date(b[0],b[1],b[2],b[3],b[4],b[5])},$('.js-cities').on('click',function(b){b.preventDefault(),a(1)?d('regions',1).then(function(a){c(a.data.regions,1),f.modal('show')}):f.modal('show')}),$('.js-district-lnk').on('click',function(){var b=$(this).data('link');a(b)&&d('regions',b).then(function(a){c(a.data.regions,b)})}),console.log(104),$('.js-district-content').on('click','.js-region',function(a){var c=$(this).data('region-code'),e='estp-cities__region--active';a.preventDefault(),$(this).hasClass(e)||($('.'+e).removeClass(e),$(this).addClass(e),d('cities',c).then(function(a){b(a.data.cities)}))}),$('.js-cities-content').on('click','.js-check-city',function(a){var b=$(this).data('aoguid');a.preventDefault(),d('save',b).then(function(a){a&&a.success&&window.location.reload()})}),console.log(166),console.log(213),function(){var a=$('.js-timer-time'),b=localStorage.getItem('estpLocalToServerTimeDelta'),c=$('.js-timer-date'),d=function(b){a.html(b.toTimeString().split(' ')[0]);var d=b.getMonth()+1,e=b.getDate();c.html([(1===(e+'').length&&'0')+e,(1===(d+'').length&&'0')+d,b.getFullYear()].join('.'))};b?d(new Date(+new Date+ +b)):d(new Date),console.log(30)}()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZGF0YSIsInJlc3AiLCJrZXkiLCJwaWVjZVNpemUiLCJsZW5ndGgiLCJyZWdpb25zIiwicHVzaCIsImFyciIsImxpbmtzIiwiZ2V0Q2l0aWVzIiwiYWN0aW9uIiwicGFyYW1zIiwiYWRkQ2xhc3MiLCIkIiwiQ2xvY2siLCJpIiwidGhlbiIsIiRjaXRpZXNNb2RhbCIsIm1vZGFsIiwiaWQiLCJpc1JlZ2lvbnNMb2FkZWQiLCJwcmV2ZW50RGVmYXVsdCIsImFjdGl2ZUNsYXNzIiwicmVtb3ZlQ2xhc3MiLCJkaXNwbGF5Q2l0aWVzIiwid2luZG93IiwiY2l0aWVzIiwiTWF0aCIsImdyb3VwcyIsImNvbnNvbGUiLCJzZXJ2ZXJUaW1lRGVsdGEiLCJsb2NhbFN0b3JhZ2UiLCIkZGF0ZSIsInVwZGF0ZURPTSIsIm5ld0RhdGUiLCIkdGltZSIsImRheSIsImh0bWwiLCJOdW1iZXIiLCJEYXRlIiwibG9nIiwidXRpbCIsImNyZWF0ZURhdGVGcm9tVzNDIl0sIm1hcHBpbmdzIjoiYUFBQSxFQUFFLFVBQU0sQUFDUixDQXFNZ0JBLEFBQVVDLGFBQUtDLEFBQ2xCLE9BQUEsQ0FBQSxFQUFBLG9DQUFBLEtBQUEsQUFDSixNQUVEQyxBQTFDSixDQUFBLEFBQVMsQUFBYyxhQUFRLEFBNEMzQixRQUFBLEdBQVlDLEVBQVEsRUFBQSxPQUFwQixBQUFZQSxBQUFRLEdBQXBCLEFBQ0lDLEFBQVFDLEFBekNaLEtBQU8sRUFBUCxBQUFjLEFBQVEsQUE0Q3RCRCxVQUFBQSxBQUFVQSxLQUFBQSxFQUFBQSxBQUFZLE9BQXRCQSxBQUFVQSxBQUFZLEFBQVVFLEFBQzVCLEFBSVFDLFFBQUFBLEVBQUFBLElBQ0ksV0FBQSxBQTdDWixPQUFPLEdBQUEsQUFBRSxlQUFGLEFBbURDLFNBbkRELEFBbURRQSxxQkFuRFIsQUEwQ0csS0FGVixFQUFBLE9BQUEsYUFBQSxBQXBDUSxDQThEUEMsQUFBVUMsQUFDWEMsVUEvRGlCLENBbURSLHdDQUVSQyxFQUZRLEFB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LEFBQVUsQUFBTyxBQUNsRCxBQUFNLEFBQ0gsY0FBVSxHQUFWLEFBQVUsQUFBSSxBQUNqQixBQUNiLGVBQUEsQUFBUSxJQUFSLEFBQVksQUFDQSxBQWNILEdBdENHLEFBd0NKLEFBZUpTLEFBQUtDLEFBRUQsQUFJUSxDQXNNZixFQTlRRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgoKSA9PiB7XG5jb25zb2xlLmxvZygyKVxuICAgIC8qKlxuICAgICAqINCS0YvRgdGC0LDQstC70LXQvdC40LUg0LLRgNC10LzQtdC90Lgg0Lgg0LTQsNGC0Ysg0LIg0YjQsNC/0LrQtVxuICAgICAqICovXG5cblxuXG5cblxuICAgIGNvbnN0IENsb2NrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0ICR0aW1lID0gJCgnLmpzLXRpbWVyLXRpbWUnKSxcbiAgICAgICAgICAgICAgICBzZXJ2ZXJUaW1lRGVsdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXN0cExvY2FsVG9TZXJ2ZXJUaW1lRGVsdGEnKSxcbiAgICAgICAgICAgICAgICAkZGF0ZSA9ICQoJy5qcy10aW1lci1kYXRlJyksXG5cbiAgICAgICAgICAgICAgICB1cGRhdGVET00gPSBmdW5jdGlvbiAobmV3RGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAkdGltZS5odG1sKG5ld0RhdGUudG9UaW1lU3RyaW5nKCkuc3BsaXQoJyAnKVswXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXkgPSBuZXdEYXRlLmdldERhdGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAkZGF0ZS5odG1sKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIChTdHJpbmcoZGF5KS5sZW5ndGggPT09IDEgJiYgJzAnKSArIGRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChTdHJpbmcobW9udGgpLmxlbmd0aCA9PT0gMSAmJiAnMCcpICsgbW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdEYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcuJykpO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8g0JTQu9GPINGD0YHQutC+0YDQtdC90LjRjyDQvtGC0L7QsdGA0LDQttC10L3QuNGPLCDQsdC10YDQtdC8INC30LDQutC10YjQuNGA0L7QstCw0L3QvdGD0Y4g0YDQsNC30L3QuNGG0YMg0LLQviDQstGA0LXQvNC10L3QuCDRgSDRgdC10YDQstC10YDQvtC8XG4gICAgICAgICAgICBpZiAoc2VydmVyVGltZURlbHRhKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRE9NKG5ldyBEYXRlKE51bWJlcihuZXcgRGF0ZSgpKSArIE51bWJlcihzZXJ2ZXJUaW1lRGVsdGEpKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwZGF0ZURPTShuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIH1cbmNvbnNvbGUubG9nKDMwKTtcbiAgICAgICAgICAgIC8qJC5nZXQoJy9zZXJ2ZXIvdGltZS8nKS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRlVzNDKSB7XG5cbiAgICAgICAgICAgICAgICBkYXRlVzNDID0gZGF0ZVczQy5tb3Njb3dUaW1lO1xuXG4gICAgICAgICAgICAgICAgbGV0IGJhY2tlbmREYXRlID0gdXRpbC5jcmVhdGVEYXRlRnJvbVczQyhkYXRlVzNDKTtcblxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlc3RwTG9jYWxUb1NlcnZlclRpbWVEZWx0YScsIGJhY2tlbmREYXRlIC0gbmV3IERhdGUoKSk7XG5cbiAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tlbmREYXRlID0gbmV3IERhdGUoYmFja2VuZERhdGUuZ2V0VGltZSgpICsgMTAwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRE9NKGJhY2tlbmREYXRlKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH0pOyovXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVXRpbHNcbiAgICAgICAgdXRpbCA9IHt9LFxuXG4gICAgICAgIC8vINCc0L7QtNCw0LvRjNC90L7QtSDQvtC60L3QviDRgSDQs9C+0YDQvtC00LDQvNC4XG4gICAgICAgICRjaXRpZXNNb2RhbCA9ICQoJy5qcy1jaXRpZXMtbW9kYWwnKTtcblxuXG5cblxuICAgIC8qKlxuICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0LHRitC10LrRgiDQtNCw0YLRiyDQsdC10Lcg0YHQvNC10YnQtdC90LjRjyBHTVQgKNC40Lct0LfQsCDQtdCz0L4g0YDQsNC30L3QuNGG0Ysg0LIg0L3QtSDQvtCx0L3QvtCy0LvQtdC90L3Ri9GFINCx0YDQsNGD0LfQtdGA0LDRhSlcbiAgICAgKiBodHRwczovL2hhYnJhaGFici5ydS9wb3N0LzI0MjQ1OS9cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRlVzNDIC0tINCU0LDRgtCwINCyINGE0L7RgNC80LDRgtC1ICcyMDE2LTAzLTMxVDE2OjEwOjE1KzAzOjAwJyAo0LIgUEhQINC60L7QvdGB0YLQsNC90YLQsCAtLSBEQVRFX1czQylcbiAgICAgKiAqL1xuICAgIHV0aWwuY3JlYXRlRGF0ZUZyb21XM0MgPSBmdW5jdGlvbiAoZGF0ZVczQykge1xuXG4gICAgICAgIGxldCBkYXRlQXJyYXkgPSBkYXRlVzNDXG4gICAgICAgICAgICAubWF0Y2goLyhcXGR7NH0pLShcXGR7Mn0pLShcXGR7Mn0pVChcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0pLylcbiAgICAgICAgICAgIC5zbGljZSgxKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocywgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpID09PSAxID8gcyAtIDEgOiArcztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgICAgICAgIGRhdGVBcnJheVswXSxcbiAgICAgICAgICAgIGRhdGVBcnJheVsxXSxcbiAgICAgICAgICAgIGRhdGVBcnJheVsyXSxcbiAgICAgICAgICAgIGRhdGVBcnJheVszXSxcbiAgICAgICAgICAgIGRhdGVBcnJheVs0XSxcbiAgICAgICAgICAgIGRhdGVBcnJheVs1XVxuXG5cblxuXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8qINCf0YDQuCDQvtGC0LrRgNGL0YLQuNC1INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwINC30LDQv9GA0LDRiNC40LLQsNC10Lwg0YHQv9C40YHQvtC6INGA0LXQs9C40L7QvdC+0LIg0KbQtdC90YLRgNCw0LvRjNC90L7Qs9C+INC+0LrRgNGD0LPQsCAqL1xuICAgICQoJy5qcy1jaXRpZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKGlzUmVnaW9uc0xvYWRlZCgxKSkge1xuICAgICAgICAgICAgZ2V0Q2l0aWVzKCdyZWdpb25zJywgMSkudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlSZWdpb25zKHJlc3AuZGF0YS5yZWdpb25zLCAxKTtcblxuICAgICAgICAgICAgICAgICRjaXRpZXNNb2RhbC5tb2RhbCgnc2hvdycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkY2l0aWVzTW9kYWwubW9kYWwoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyog0JfQsNC/0YDQsNGI0LjQstCw0LXQvCDRgdC/0LjRgdC+0Log0YDQtdCz0LjQvtC90L7QsiDQv9C+IElEICovXG4gICAgJCgnLmpzLWRpc3RyaWN0LWxuaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCdsaW5rJyk7XG5cbiAgICAgICAgaWYgKGlzUmVnaW9uc0xvYWRlZChpZCkpIHtcblxuICAgICAgICAgICAgZ2V0Q2l0aWVzKCdyZWdpb25zJywgaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5UmVnaW9ucyhyZXNwLmRhdGEucmVnaW9ucywgaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5cblxuXG5cbiAgICBjb25zb2xlLmxvZygxMDQpO1xuICAgIC8qINCX0LDQv9GA0LDRiNC40LLQsNC10Lwg0YHQv9C40YHQvtC6INCz0L7RgNC+0LTQvtCyINGA0LXQs9C40L7QvdCwINC/0L4gSUQgKi9cbiAgICAkKCcuanMtZGlzdHJpY3QtY29udGVudCcpLm9uKCdjbGljaycsICcuanMtcmVnaW9uJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgbGV0IGlkID0gJCh0aGlzKS5kYXRhKCdyZWdpb24tY29kZScpLFxuICAgICAgICAgICAgYWN0aXZlQ2xhc3MgPSAnZXN0cC1jaXRpZXNfX3JlZ2lvbi0tYWN0aXZlJztcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKGFjdGl2ZUNsYXNzKSkge1xuICAgICAgICAgICAgJCgnLicgKyBhY3RpdmVDbGFzcykucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhhY3RpdmVDbGFzcyk7XG5cbiAgICAgICAgICAgIGdldENpdGllcygnY2l0aWVzJywgaWQpLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q2l0aWVzKHJlc3AuZGF0YS5jaXRpZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5cblxuICAgIC8qINCe0YLQv9GA0LDQstC70Y/QtdC8IElEINCy0YvQsdGA0LDQvdC90L7Qs9C+INCz0L7RgNC+0LTQsCAqL1xuICAgICQoJy5qcy1jaXRpZXMtY29udGVudCcpLm9uKCdjbGljaycsICcuanMtY2hlY2stY2l0eScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGxldCBpZCA9ICQodGhpcykuZGF0YSgnYW9ndWlkJyk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGdldENpdGllcygnc2F2ZScsIGlkKS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICBpZiAocmVzcCAmJiByZXNwLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gaXNSZWdpb25zTG9hZGVkKGlkKSB7XG4gICAgICAgIHJldHVybiAhJCgnLmpzLXJlZ2lvbnMtbGlzdFtkYXRhLWRpc3RyaWN0PScgKyBpZCArICddJykubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0YHQv9C40YHQutCwINCz0L7RgNC+0LTQvtCyICovXG4gICAgZnVuY3Rpb24gZGlzcGxheUNpdGllcyhjaXRpZXMpIHtcbiAgICAgICAgbGV0IHBpZWNlU2l6ZSA9IE1hdGguY2VpbChjaXRpZXMubGVuZ3RoIC8gNCksXG4gICAgICAgICAgICBncm91cHMgPSBbXTtcblxuICAgICAgICB3aGlsZSAoY2l0aWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgZ3JvdXBzLnB1c2goY2l0aWVzLnNwbGljZSgwLCBwaWVjZVNpemUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyb3VwcyA9IGdyb3Vwcy5tYXAoZnVuY3Rpb24gKGFycikge1xuICAgICAgICAgICAgcmV0dXJuICQoJzxkaXY+PC9kaXY+JylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2VzdHAtY2l0aWVzX19jZWxsJylcbiAgICAgICAgICAgICAgICAuaHRtbChhcnIucmVkdWNlKGZ1bmN0aW9uIChsaW5rcywgaXRlbSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzICs9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YSBjbGFzcz1cImpzLWNoZWNrLWNpdHlcIiBkYXRhLWFvZ3VpZD0nICsgaXRlbS5hb2d1aWQgKyAnPicsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9mZm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9hPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGJyPidcbiAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGlua3M7XG4gICAgICAgICAgICAgICAgfSwgJycpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmpzLWNpdGllcy1jb250ZW50JykuaHRtbChncm91cHMpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygxNjYpO1xuICAgIC8qINCe0YLQvtCx0YDQsNC20LXQvdC40LUg0YHQv9C40YHQutCwINGA0LXQs9C40L7QvdC+0LIgKi9cbiAgICBmdW5jdGlvbiBkaXNwbGF5UmVnaW9ucyhyZXNwLCBpZCkge1xuXG4gICAgICAgIGxldCByZWdpb25zID0gW10sXG4gICAgICAgICAgICBkYXRhID0gW10sXG4gICAgICAgICAgICBwaWVjZVNpemU7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHJlc3ApIHtcblxuICAgICAgICAgICAgaWYgKHJlc3AuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKHJlc3Bba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwaWVjZVNpemUgPSBNYXRoLmNlaWwoZGF0YS5sZW5ndGggLyAyKTtcblxuICAgICAgICB3aGlsZSAoZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlZ2lvbnMucHVzaChkYXRhLnNwbGljZSgwLCBwaWVjZVNpemUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lvbnMgPSByZWdpb25zLm1hcChmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gJCgnPGRpdj48L2Rpdj4nKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnZXN0cC1jaXRpZXNfX2NlbGwnKVxuICAgICAgICAgICAgICAgIC5odG1sKGFyci5yZWR1Y2UoZnVuY3Rpb24gKGxpbmtzLCBpdGVtKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGlua3MgKz0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwiZXN0cC1jaXRpZXNfX3JlZ2lvbiBqcy1yZWdpb25cIiBkYXRhLXJlZ2lvbi1jb2RlPScgKyBpdGVtLnJlZ2lvbmNvZGUgKyAnPicsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLl9kaXNwbGF5bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2E+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YnI+J1xuICAgICAgICAgICAgICAgICAgICBdLmpvaW4oJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaW5rcztcbiAgICAgICAgICAgICAgICB9LCAnJykpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgJGRpdiA9ICQoJzxkaXY+PC9kaXY+JylcbiAgICAgICAgICAgIC5hZGRDbGFzcygnZXN0cC10YWJzX19pJylcbiAgICAgICAgICAgIC5hZGRDbGFzcygnZXN0cC10YWJzX19pLS0nICsgaWQpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2VzdHAtY2l0aWVzX190YWJsZScpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2pzLXJlZ2lvbnMtbGlzdCcpXG4gICAgICAgICAgICAuYXR0cignZGF0YS1kaXN0cmljdCcsIGlkKS5odG1sKHJlZ2lvbnMpO1xuXG4gICAgICAgICQoJy5qcy1kaXN0cmljdC1jb250ZW50JykuYXBwZW5kKCRkaXYpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygyMTMpO1xuICAgIC8qINCX0LDQv9GA0L7RgSDQvdCwINGB0LXRgNCy0LXRgCDRgdC/0LjRgdC60L7QsiDQs9C+0YDQvtC00L7QsiDQuNC70Lgg0YDQtdCz0LjQvtC90L7QsiAqL1xuICAgIGZ1bmN0aW9uIGdldENpdGllcyhhY3Rpb24sIGlkKSB7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7fTtcblxuICAgICAgICAkKCcuanMtbG9hZGVyJykuc2hvdygpO1xuXG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdjaXRpZXMnKSB7XG5cbiAgICAgICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgICByZWdpb25jb2RlOiBpZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdyZWdpb25zJykge1xuXG4gICAgICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgX2ZvaWQ6IGlkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgYW9ndWlkOiBpZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAkLmdldCgnL2FqYXgvZmlhcy8nLCBwYXJhbXMpLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICQoJy5qcy1sb2FkZXInKS5oaWRlKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgICAgfSkuZXJyb3IoZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICQoJy5qcy1sb2FkZXInKS5oaWRlKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQ2xvY2soKTtcbn0pOyJdfQ==
