import _ from 'lodash'
import angular from 'angular';
import * as UserModule from './user/user.module';

console.log('angular', angular.version.full);
console.log('lodash', _.VERSION);

angular.module('myApp', [])
  .factory('userSvc', UserModule.svc)
  .controller('userCtrl', UserModule.ctrl);

