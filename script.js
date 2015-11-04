$(document).ready(function () {
    var $listNode = $('#image_list'),
        $imageNode = $('#image'),
        links = $listNode.find('a'),
        imageCache = [],
        imageCounter = 0,
        counter = 0,
        source1,
        source2;


    function checkIfEqual() {
        alert(source1);
        alert(source2);

        if (source1 == source2 || ) {
            $('congrats').show();

        } else {
            counter = 0;
            invertImage();
        }

    }

    function setImage(source) {
        if (source == 'Image5') {
            $('#' + source).attr('src', 'images/Image2.png');
        } else {
            $('#' + source).attr('src', 'images/' + source + '.png');
            alert(source);
        }
    }

    function invertImage() {
        setTimeout(function () {
            links.find("img").attr('src', 'images/back.jpg');
        }, 2000);
    }

    invertImage();
    $('#image_list img').on('click', function (e) {
        counter++;
        e.preventDefault();

        var index1, index2;

        if (counter % 2 == 1) {
            index1 = $(this).parent().index();
            source1 = this.id;


            alert(source1);
            setImage(source1);

        }

        if (counter % 2 == 0) {
            index2 = $(this).parent().index();
            source2 = this.id;

            alert(source2);
            setImage(source2);
            checkIfEqual();

        }


    });
    /*

    for (var i = 0; i < links.length; i++) {
        var linkNode = links[i];
        $(linkNode).on('click', function (e) {
            e.preventDefault();
            var index = $(this).parent().index();
            alert(index);
            swipeImage(index);

        });
        var image = new Image();
        image.src = $(linkNode).attr('href');
        alert(image.src);

        image.alt = $(linkNode).attr('title');

        imageCache.push(image);
    }
*/

    function swipeImage(index) {

        var image = imageCache[index];

        alert(image.src);
        $imageNode.attr('src', image.src);

    }


});