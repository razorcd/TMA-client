'use strict';

app.factory('Menu', function($resource) {
  return $resource('//tma-develop.herokuapp.com/v1/menus');
});
