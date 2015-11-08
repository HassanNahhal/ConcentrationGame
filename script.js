$(document).ready(function () {
    var $listNode = $('#image_list'),
        $imageNode = $('#image'),
        links = $listNode.find('a'),
        imageCache = [],
        imageCounter = 0,
        counter = 0,
        source1,
        source2;


    //checkIfEqual function check if 2 images are the same , if yes it will remove the 'inactive ' class so they stay opened till the end of the game
    function checkIfEqual() {
        if ((source1 == 'Image5') && (source2 == 'Image2')) {
            $('#'+source1).removeClass('inactive');
            $('#'+source2).removeClass('inactive');

        } else if ((source2 == 'Image5') && (source1 == 'Image2')) {
           $('#'+source1).removeClass('inactive');
            $('#'+source2).removeClass('inactive');

        } else {
            counter = 0;
            invertImage();
        }
    }


    //setImage function will set the image resource after clicking of it , in another way it shows what is hidden under the back
    function setImage(source) {
        if (source == 'Image5') {
            $('#' + source).attr('src', 'images/Image2.png');
        } else {
            $('#' + source).attr('src', 'images/' + source + '.png');
        }
    }

    
    //invertImage function will hide all 'inactive' images using a back.jpg image. 
    function invertImage() {
        setTimeout(function () {
            $('.inactive').attr('src', 'images/back.jpg');
        }, 2000);
    }
    invertImage();
    
    //on click function that used setImage() and checkIfEqual () functions , the mod is used to know the counter of the clicks , if 'counter % 2 == 1' the 1 image is clicked , if 'counter % 2 == 0' then 2 images are clicked.
    $('.inactive').on('click', function (e) {
        counter++;
        e.preventDefault();

        if (counter % 2 == 1) {
            source1 = this.id;
            setImage(source1);

        }

        if (counter % 2 == 0) {
            source2 = this.id;
            setImage(source2);
            checkIfEqual();

        }


    });




});