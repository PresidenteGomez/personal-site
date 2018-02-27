myApp.controller('GithubController', function (GithubService) {
    console.log('GithubController loaded!');

    var vm = this;

    vm.profileData = GithubService.user;
    GithubService.githubProfile();
    console.log('GithubController Data ->', vm.profileData);

});