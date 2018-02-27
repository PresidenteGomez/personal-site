myApp.controller('UserController', function(UserService) {
  console.log('UserController loaded!');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

});
