function createAdDisplayContainer() {
    adDisplayContainer = new google.ima.AdDisplayContainer(document.getElementById("adContainer"))
}

function requestAds() {
    createAdDisplayContainer(), adDisplayContainer.initialize(), adsLoader = new google.ima.AdsLoader(adDisplayContainer), adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, onAdsManagerLoaded, !1), adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, !1);
    var e = new google.ima.AdsRequest;
    console.log(url_ads), e.adTagUrl = url_ads, e.linearAdSlotWidth = width_ads, e.linearAdSlotHeight = height_ads, e.nonLinearAdSlotWidth = width_ads, e.nonLinearAdSlotHeight = height_ads, adsLoader.requestAds(e)
}

function onAdsManagerLoaded(e) {
    adsManager = e.getAdsManager(videoContent), adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError), adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested), adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, onContentResumeRequested), adsManager.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, onAdEvent), adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, onAdEvent), adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, onAdEvent), adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, onAdEvent), adsManager.addEventListener(google.ima.AdEvent.Type.CLICK, onAdEvent), adsManager.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, onAdEvent);
    try {
        adsManager.init(width_ads, heightGame, google.ima.ViewMode.NORMAL), adsManager.start()
    } catch (a) {
        skipAds()
    }
}

function onAdEvent(e) {
    var a = e.getAd();
    switch (e.type) {
        case google.ima.AdEvent.Type.LOADED:
            a.isLinear(), ads_load();
            break;
        case google.ima.AdEvent.Type.STARTED:
            a.isLinear() && (intervalTimer = setInterval(function () {
                adsManager.getRemainingTime()
            }, 300));
            break;
        case google.ima.AdEvent.Type.COMPLETE:
            a.isLinear() && clearInterval(intervalTimer);
            break;
        case google.ima.AdEvent.Type.CLICK:
            clickAds();
            break;
        case google.ima.AdEvent.Type.USER_CLOSE:
            close_ads()
    }
}

function onAdError(e) {
    console.log(e.getError()), skipAds(), adsManager.destroy()
}

function onContentPauseRequested() {
}

function onContentResumeRequested() {
    skipAds()
}

function clickAds() {
    var e = 0;
    1 == id_ads ? e = dataYlinkee.tag_01.value : 2 == id_ads ? e = dataYlinkee.tag_02.value : 3 == id_ads && (e = dataYlinkee.tag_03.value);
    var a = window.location.href, n = a.split("/"), d = n[n.length - 1], t = d.split("?");
    t.length > 1 && (d = t[0]), fbq("track", "ClickAds", {
        siteUrl: a,
        content_ID: d,
        value: e,
        currency: "USD",
        adsNumber: id_ads
    }), fbq("track", "Purchase", {siteUrl: a, content_ID: d, value: e, currency: "USD", adsNumber: id_ads})
}

function ads_load() {
    console.log("ads done load")
}

function close_ads() {
    skipAds(), id_ads++
}

var adsManager, adsLoader, adDisplayContainer, intervalTimer, videoContent = document.getElementById("contentElement"),
    id_ads = 1;
//
(function () {
    app.controller('quizDetailController', function ($scope, $http, $state, $filter, $stateParams, ezfb) {
        requestAds();
        var id = $stateParams.quizkey;
        $scope.id_quiz = id;
        $scope.quizDetail = [];
        $scope.multipleQues = [];
        $scope.multipleResult = [];
        $scope.indexStt = 0;
        $scope.maxSize = 2;
        $scope.currentPage = 1;
        $scope.entrylimit = 1;
        $scope.filteredItems = "";
        $scope.totalItems = "";
        $http.get('http://en.topquiz.co/quiz/' + id).success(function (response) {
            if (response.error !== "") {
                $scope.quizDetail = response;
            } else {
                $scope.quizDetail = [];
            }
            $scope.multipleQues = $scope.quizDetail[0].details;
            $scope.multipleResult = $scope.quizDetail[0].results;
            $scope.urlFB = window.location.href;
            document.title = $scope.quizDetail[0].title;
            $scope.titleShare = $scope.quizDetail[0].title;
            $scope.desShare = $scope.quizDetail[0].description;
            $scope.thumbShare = $scope.quizDetail[0].thumb.large;
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
            }
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                $scope.sendFB = function () {
                    var linkshare = $scope.urlFB + "?ref=sendMB";
                    var no = 1, callback = function (res) {
                        console.log('FB.ui callback execution', no++);
                        console.log('response:', res);
                    };
                    ezfb.ui({
                        method: 'feed',
                        name: $scope.titleShare,
                        picture: $scope.thumbShare,
                        link: linkshare,
                        description: $scope.desShare,
                    }, callback).then(callback);
                }
            } else {
                $scope.sendFB = function () {
                    var no = 1, callback = function (res) {
                        console.log('FB.ui callback execution', no++);
                        console.log('response:', res);
                    };
                    ezfb.ui({
                        method: 'send',
                        name: $scope.titleShare,
                        picture: $scope.thumbShare,
                        link: $scope.urlFB + "?ref=send",
                        description: $scope.desShare,
                    }, callback).then(callback);
                }
            }
            $scope.check_video = 1;
            $scope.choingay = function () {
                $("show-first").css('display', 'none');
                $("show-seccond").css('display', 'block');
                $('.show-second').css('opacity', '1');
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    $('.header-title').css('display', 'none');
                    $scope.check_video = 2;
                }
            };
            $scope.filteredItems = $scope.multipleQues.length;
            $scope.totalItems = $scope.multipleQues.length;
            $scope.setPage = function (pageNo) {
                $scope.currentPage = pageNo;
            };
            var selected = [];
            $scope.chooseAns = function (index, answer) {
                $('#adContainer div').css("display", "none");
                selected.push($scope.multipleQues[$scope.indexStt].answers[index].point);
                if ($scope.indexStt < $scope.totalItems - 1) {
                    $scope.currentPage++;
                    $scope.indexStt++;
                    $('.question-number>.pagination>li[data-lp=1]:not(.prev,.next)').addClass('active');
                    if ($scope.currentPage == 4) {
                        channel_id = '3290166774';
                        href_ads = top.window.location.href;
                        url_ads = "https://googleads.g.doubleclick.net/pagead/ads?ad_type=image_text_flash&client=ca-games-pub-5477307030870200&description_url=" + href_ads + "&channel=" + channel_id + "&videoad_start_delay=0&hl=en&max_ad_duration=30000";
                        $("#adContainer").css("display", "block");
                        $("#xemcautiep").css("display", "block");
                        setTimeout(function () {
                            requestAds();
                        }, 300);
                    }
                } else {
                    var totalpoint = [];
                    for (var i = 0; i < $scope.multipleResult.length; i++) {
                        totalpoint.push(0);
                    }
                    selected.forEach(function (point) {
                        for (var i = 0; i < totalpoint.length; i++) {
                            if (!point[i].value && point[i].value == '') {
                                point[i].value = 0;
                                totalpoint[i] = totalpoint[i] + parseInt(point[i].value);
                            } else {
                                totalpoint[i] = totalpoint[i] + parseInt(point[i].value);
                            }
                        }
                    });
                    var ind = indexOfMax(totalpoint);
                    $scope.desShare = $scope.des = $scope.multipleResult[ind].description;
                    $scope.thumbShare = $scope.files = $scope.multipleResult[ind].image;
                    $scope.title = $scope.multipleResult[ind].caption;
                    $scope.titleShare = $scope.quizDetail[0].title + " - " + $scope.title;
                    $('.show-second').css("display", "none");
                    $('.show-result').css("display", "block");
                    $('.show-result').css("opacity", "1");
                    setTimeout(function () {
                        document.getElementById('xemketqua').style.display = "block";
                    }, 200);
                    setTimeout(function () {
                        document.getElementById('adContainer').style.display = 'block';
                        channel_id = '2963511176';
                        href_ads = top.window.location.href;
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
                }
            };
        });

        function indexOfMax(arr) {
            if (arr.length === 0) {
                return -1;
            }
            var max = arr[0];
            var maxIndex = 0;
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    maxIndex = i;
                    max = arr[i];
                }
            }
            return maxIndex;
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
                video.onended = function () {
                    check_play = 0;
                };
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