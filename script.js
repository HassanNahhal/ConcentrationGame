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
        if ((source1 == 'Image5') && (source2 == 'Image2')) {
            //alert("should show ");
            // $('.congrats').remove('hidden');

        } else if ((source2 == 'Image5') && (source1 == 'Image2')) {
            //alert("should show ");
            //$('.congrats').remove('hidden');
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
            setImage(source1);

        }

        if (counter % 2 == 0) {
            index2 = $(this).parent().index();
            source2 = this.id;
            setImage(source2);
            checkIfEqual();

        }


    });

    function swipeImage(index) {

        var image = imageCache[index];

        alert(image.src);
        $imageNode.attr('src', image.src);

    }


});