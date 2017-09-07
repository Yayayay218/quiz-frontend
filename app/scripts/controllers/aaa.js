(function () {
    app.controller('quiziqDetailController', function ($scope, $http, $state, $filter, $stateParams, $timeout, ezfb) {
        requestAds();
        var id = $stateParams.quiziqkey;
        $scope.id_quiz = id;
        $scope.quiziqDetail = [];
        $scope.multipleQues = [];
        $scope.multipleResult = [];
        $scope.indexStt = 0;
        $scope.maxSize = 2;
        $scope.currentPage = 1;
        $scope.entrylimit = 1;
        $scope.filteredItems = "";
        $scope.totalItems = "";
        $scope.corrects = 0;
        $scope.check_play = 0;
        var selected = [];
        var score = 0;
        var tylescore = 0;
        var l = 0;
        var check_click = false;
        $http.get('http://en.topquiz.co/quiz/iq/' + id).success(function (response) {
            if (response.error !== "") {
                $scope.quiziqDetail = response;
                console.log($scope.quiziqDetail);
            } else {
                $scope.quiziqDetail = [];
            }
            $scope.multipleQues = $scope.quiziqDetail[0].details;
            $scope.multipleResult = $scope.quiziqDetail[0].results;
            $scope.urlFB = window.location.href;
            document.title = $scope.quiziqDetail[0].title;
            $scope.titleShare = $scope.quiziqDetail[0].title;
            $scope.desShare = $scope.quiziqDetail[0].description;
            $scope.thumbShare = $scope.quiziqDetail[0].thumb.large;
            $scope.shareFB = function () {
                var no = 1, callback = function (res) {
                    console.log('FB.ui callback execution', no++);
                    console.log('response:', res);
                };
                ezfb.ui({
                    method: 'feed',
                    name: $scope.titleShare,
                    picture: $scope.thumbShare,
                    link: $scope.urlFB + "?ref=share",
                    description: $scope.desShare,
                }, callback).then(callback);
            };
            $scope.choingay = function () {
                $("show-first").css('display', 'none');
                $("show-seccond").css('display', 'block');
                $('.show-second').css('opacity', '1');
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    $('.header-title').css('display', 'none');
                }
                $scope.data = {progress: 100};
                (function progress() {
                    if ($scope.data.progress > 0) {
                        var id = $timeout(function () {
                            $scope.data.progress -= 1;
                            progress();
                        }, $scope.multipleQues[$scope.indexStt].time * 11, 1);
                        $scope.filteredItems = $scope.multipleQues.length;
                        $scope.totalItems = $scope.multipleQues.length;
                        $scope.setPage = function (pageNo) {
                            $scope.currentPage = pageNo;
                        }
                        $scope.chooseAns = function (index, answer) {
                            $timeout.cancel(id);
                            $scope.data = {progress: 0.1};
                            $('#adContainer div').css("display", "none");
                            if ($scope.indexStt <= $scope.totalItems - 1) {
                                if (check_click == false) {
                                    if ($scope.multipleQues[$scope.indexStt].answers[index].bool == true) {
                                        score = score + 1;
                                    }
                                    $timeout(function () {
                                        for (var i = 0; i < $scope.multipleQues[$scope.indexStt].answers.length; i++) {
                                            if ($scope.multipleQues[$scope.indexStt].answers[i].bool == true) {
                                                $(".question-btn-group>.box-answer:nth-child(" + (i + 1) + ")").addClass('true');
                                                $(".question-btn-group>.box-answer-img:nth-child(" + (i + 1) + ")").addClass('true');
                                            }
                                        }
                                    }, 200);
                                    $timeout(function () {
                                        for (var i = 0; i < $scope.multipleQues[$scope.indexStt].answers.length; i++) {
                                            if ($scope.multipleQues[$scope.indexStt].answers[i].bool == true) {
                                                $(".question-btn-group>.box-answer:nth-child(" + (i + 1) + ")").removeClass('true');
                                                $(".question-btn-group>.box-answer-img:nth-child(" + (i + 1) + ")").removeClass('true');
                                            }
                                        }
                                    }, 1300);
                                    $timeout(function () {
                                        $scope.currentPage++;
                                        $scope.indexStt++;
                                        $('.question-number>.pagination>li[data-lp=1]:not(.prev,.next)').addClass('active');
                                        check_click = false;
                                        if ($scope.indexStt == 4) {
                                            channel_id = '3290166774';
                                            href_ads = top.window.location.href;
                                            url_ads = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=image_text_flash&client=ca-games-pub-5477307030870200&description_url=" + href_ads + "&channel=" + channel_id + "&videoad_start_delay=0&hl=en&max_ad_duration=30000";
                                            $("#adContainer").css("display", "block");
                                            $("#xemcautiep").css("display", "block");
                                            setTimeout(function () {
                                                requestAds();
                                            }, 300);
                                        }
                                        if ($scope.indexStt == $scope.totalItems) {
                                            $('.show-second').css("display", "none");
                                            $('.show-result').css("display", "block");
                                            $('.show-result').css("opacity", "1");
                                            tylescore = score / $scope.totalItems * 100;
                                            var a = [];
                                            for (var n = 0; n < $scope.multipleResult.length; n++) {
                                                a[n] = Math.abs($scope.multipleResult[n].percent - tylescore);
                                            }
                                            var ind = indexOfMax(a);
                                            $scope.desShare = $scope.des = $scope.multipleResult[ind].description;
                                            $scope.thumbShare = $scope.files = $scope.multipleResult[ind].image;
                                            $scope.title = score + "/" + $scope.totalItems + " " + $scope.multipleResult[ind].caption;
                                            $scope.titleShare = $scope.quiziqDetail[0].title + " - " + $scope.title;
                                            setTimeout(function () {
                                                document.getElementById('xemketqua').style.display = "block";
                                            }, 200);
                                            setTimeout(function () {
                                                document.getElementById('adContainer').style.display = 'block';
                                                channel_id = '2963511176';
                                                var href_ads = top.window.location.href;
                                                url_ads = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=image_text_flash&client=ca-games-pub-5477307030870200&description_url=" + href_ads + "&channel=" + channel_id + "&videoad_start_delay=0&hl=en&max_ad_duration=30000";
                                                requestAds();
                                            }, 500);
                                            $scope.close = function () {
                                                document.getElementById('sharefacebook').style.display = 'none';
                                            };
                                            $scope.shareFB = function () {
                                                document.getElementById('sharefacebook').style.display = 'none';
                                                var no = 1, callback = function (res) {
                                                    console.log('FB.ui callback execution', no++);
                                                    console.log('response:', res);
                                                };
                                                ezfb.ui({
                                                    method: 'feed',
                                                    name: $scope.titleShare,
                                                    picture: $scope.thumbShare,
                                                    link: $scope.urlFB + "?ref=share",
                                                    description: $scope.desShare,
                                                }, callback).then(callback);
                                            }
                                        } else {
                                            $scope.data = {progress: 100};
                                            progress();
                                        }
                                    }, 1500);
                                }
                                check_click = true;
                            }
                        }
                    } else {
                        check_click == true;
                        $timeout.cancel(id);
                        $timeout(function () {
                            for (var i = 0; i < $scope.multipleQues[$scope.indexStt].answers.length; i++) {
                                if ($scope.multipleQues[$scope.indexStt].answers[i].bool == true) {
                                    $(".question-btn-group>.box-answer:nth-child(" + (i + 1) + ")").addClass('true');
                                    $(".question-btn-group>.box-answer-img:nth-child(" + (i + 1) + ")").addClass('true');
                                }
                            }
                        }, 200);
                        $timeout(function () {
                            for (var i = 0; i < $scope.multipleQues[$scope.indexStt].answers.length; i++) {
                                if ($scope.multipleQues[$scope.indexStt].answers[i].bool == true) {
                                    $(".question-btn-group>.box-answer:nth-child(" + (i + 1) + ")").removeClass('true');
                                    $(".question-btn-group>.box-answer-img:nth-child(" + (i + 1) + ")").removeClass('true');
                                }
                            }
                        }, 1300);
                        $timeout(function () {
                            $scope.currentPage++;
                            $scope.indexStt++;
                            $('.question-number>.pagination>li[data-lp=1]:not(.prev,.next)').addClass('active');
                            check_click = false;
                            if ($scope.indexStt == 4) {
                                channel_id = '3290166774';
                                href_ads = top.window.location.href;
                                url_ads = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=image_text_flash&client=ca-games-pub-5477307030870200&description_url=" + href_ads + "&channel=" + channel_id + "&videoad_start_delay=0&hl=en&max_ad_duration=30000";
                                $("#adContainer").css("display", "block");
                                $("#xemcautiep").css("display", "block");
                                setTimeout(function () {
                                    requestAds();
                                }, 300);
                            }
                            if ($scope.indexStt == $scope.totalItems) {
                                $('.show-second').css("display", "none");
                                $('.show-result').css("display", "block");
                                $('.show-result').css("opacity", "1");
                                tylescore = score / $scope.totalItems * 100;
                                var a = [];
                                for (var n = 0; n < $scope.multipleResult.length; n++) {
                                    a[n] = Math.abs($scope.multipleResult[n].percent - tylescore);
                                }
                                var ind = indexOfMax(a);
                                $scope.desShare = $scope.des = $scope.multipleResult[ind].description;
                                $scope.thumbShare = $scope.files = $scope.multipleResult[ind].image;
                                $scope.title = score + "/" + $scope.totalItems + " " + $scope.multipleResult[ind].caption;
                                $scope.titleShare = $scope.quiziqDetail[0].title + " - " + $scope.title;
                                setTimeout(function () {
                                    document.getElementById('xemketqua').style.display = "block";
                                }, 200);
                                setTimeout(function () {
                                    document.getElementById('adContainer').style.display = 'block';
                                    channel_id = '2963511176';
                                    var href_ads = top.window.location.href;
                                    url_ads = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=image_text_flash&client=ca-games-pub-5477307030870200&description_url=" + href_ads + "&channel=" + channel_id + "&videoad_start_delay=0&hl=en&max_ad_duration=30000";
                                    requestAds();
                                }, 500);
                                $scope.shareFB = function () {
                                    document.getElementById('sharefacebook').style.display = 'none';
                                    var no = 1, callback = function (res) {
                                        console.log('FB.ui callback execution', no++);
                                        console.log('response:', res);
                                    };
                                    ezfb.ui({
                                        method: 'feed',
                                        name: $scope.titleShare,
                                        picture: $scope.thumbShare,
                                        link: $scope.urlFB + "?ref=share",
                                        description: $scope.desShare,
                                    }, callback).then(callback);
                                }
                            } else {
                                $scope.data = {progress: 100};
                                progress();
                            }
                        }, 1500);
                    }
                })();
            };
        });

        function indexOfMax(arr) {
            if (arr.length === 0) {
                return -1;
            }
            var min = arr[0];
            var minIndex = 0;
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    minIndex = i;
                    min = arr[i];
                }
            }
            return minIndex;
        }

        $scope.recommend = [];
        $http.get('http://en.topquiz.co/view/loadmore/1').success(function (response) {
            if (response.error !== "") {
                $scope.recommend = response.data;
            } else {
                $scope.recommend = [];
            }
        });
        $scope.suggest = [];
        $http.get('http://en.topquiz.co/view/recommend/q/' + 2).success(function (response) {
            if (response.error == "") {
                $scope.suggest = [];
            } else {
                $scope.suggest = response;
                document.getElementById("linkchoi").innerHTML = $scope.suggest[2].pid + "-" + $scope.suggest[2].type;
            }
        });
        var check_play = 0;
        $scope.url = [];
        $http.get('http://en.topquiz.co/view/video').success(function (response) {
            if (response.error == "" || response == "") {
                $scope.url = [];
            } else {
                $scope.url = response;
                console.log($scope.url);
                $('#pause_play').attr("src", "http://en.topquiz.co/images/resources/play.png");
                $('#thumb-video').attr("src", $scope.url[0].thumb);
                $('#pause_play,#thumb-video').click(function () {
                    document.getElementById('pause_play').style.display = 'none';
                    document.getElementById('thumb-video').style.display = 'none';
                    document.getElementById('video').style.display = 'block';
                    $('#video').append('<source src=' + $scope.url[0].link + ' type="video/mp4">');
                    var video = document.querySelector("#video");
                    video.play();
                    $http.get('http://en.topquiz.co/video/view/' + $scope.url[0]._id).success(function (res) {
                    });
                })
                $scope.pauseOrPlay = function (ele) {
                    check_play++;
                    document.getElementById('pause_play').style.display = 'block';
                    if (check_play % 2 == 1) {
                        video.pause();
                        $('#pause_play').attr("src", "http://en.topquiz.co/images/resources/pause.png");
                        setTimeout(function () {
                            document.getElementById('pause_play').style.display = 'none';
                        }, 1000);
                    } else {
                        video.play();
                        $('#pause_play').attr("src", "http://en.topquiz.co/images/resources/play.png");
                        setTimeout(function () {
                            document.getElementById('pause_play').style.display = 'none';
                        }, 1000);
                    }
                }
            }
        });
    });
})();

var app = angular.module('myApp', ['ui.router', 'ngResource', 'ui.bootstrap', 'infinite-scroll', 'ngSanitize', 'ezfb']);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'ezfbProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, ezfbProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {url: "/", templateUrl: "views/home.html"}).state('category', {
        url: "/:type",
        templateUrl: "views/category.view.html"
    }).state('quiz', {url: "/quiz", templateUrl: "views/quiz.view.html"}).state('list', {
        url: "/list",
        templateUrl: "views/list.view.html"
    }).state('quiziq', {
        url: "/quiziq",
        templateUrl: "views/quiziq.view.html"
    }).state('listview', {
        url: "/list/:listkey",
        templateUrl: "views/list.details.html"
    }).state('quizview', {
        url: "/quiz/:quizkey",
        templateUrl: "views/quiz.details.html"
    }).state('quiziqview', {url: "/quiz/iq/:quiziqkey", templateUrl: "views/quiziq.details.html"});
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    ezfbProvider.setInitParams({appId: '1241557305921100', version: 'v2.8'});
    ezfbProvider.setLocale('en_EN');
}]);
app.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
    $window.ga('create', 'UA-51655784-5', 'auto');
    $rootScope.$on('$stateChangeSuccess', function (event) {
        $window.ga('send', 'pageview', $location.url());
    });
}]);
angular.element(document).ready(function () {
    angular.bootstrap(document, ["myApp"]);
});

(function () {
    app.controller('homeController', function ($scope, $http, $state, $filter) {
        $scope.post = {};
        $scope.post.after = 2;
        $scope.post.busy = false;
        $scope.post.items = [];
        $http.get('http://en.topquiz.co/view/loadmore/1').success(function (response) {
            if (response.error == "") {
                $scope.post.items = [];
            } else {
                $scope.post.items = response.data;
            }
        });
        $scope.nextPage = function () {
            if ($scope.post.busy) return;
            $scope.post.busy = true;
            $http.get("http://en.topquiz.co/view/loadmore/" + $scope.post.after).success(function (datas) {
                if (datas.error == "" || datas.data == '') {
                } else {
                    var _items = datas.data;
                    for (var i = 0; i < _items.length; i++) {
                        $scope.post.items.push(_items[i]);
                    }
                }
            }).finally(function () {
                $scope.post.busy = false;
            });
            $scope.post.after += 1;
        }
    });
})();

(function () {
    app.controller('listDetailController', function ($scope, $http, $state, $filter, $stateParams) {
        var id = $stateParams.listkey;
        $scope.listDetail = [];
        $http.get('http://en.topquiz.co/list/getData/One/' + id).success(function (response) {
            if (response.error !== "") {
                $scope.listDetail = response;
            } else {
                $scope.listDetail = [];
            }
            $scope.urlFB = window.location.href;
            $scope.urlFB = $scope.urlFB.split("?")[0];
            $scope.shareFB = function () {
                FB.ui({
                    method: 'feed',
                    name: $scope.listDetail[0].title,
                    picture: $scope.listDetail[0].thumb.large,
                    link: $scope.urlFB,
                    description: $scope.listDetail[0].description,
                }, function (response) {
                });
            }
        });
        $scope.recommend = [];
        $http.get('http://en.topquiz.co/view/hot').success(function (response) {
            if (response.error !== "") {
                $scope.recommend = response;
            } else {
                $scope.recommend = [];
            }
        });
        $scope.suggest = [];
        $http.get('http://en.topquiz.co/view/get/' + 3).success(function (response) {
            if (response.error == "") {
                $scope.suggest = [];
            } else {
                $scope.suggest = response;
            }
        });
    });
})();

(function () {
    app.service('urlSer', [function () {
        this.converturl = function (id, title) {
            title = angular.lowercase(title);
            title = title.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
            title = title.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            title = title.replace(/ì|í|ị|ỉ|ĩ/g, "i");
            title = title.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
            title = title.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            title = title.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
            title = title.replace(/đ/g, "d");
            title = title.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|\-|,|\.|\:|\'|\"|\&|\#|\[|\]|~/g, "");
            var i = 0, titleLength = title.length;
            for (i; i < titleLength; i++) {
                title = title.replace(" ", "-");
            }
            return id + '-' + title + '.html';
        }
    }]);
    app.filter('slice', function () {
        return function (arr, start) {
            return arr.slice(start);
        };
    });
})();