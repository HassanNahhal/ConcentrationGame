$(document).ready(function() {
    var $listNode = $('#image_list'),
        $imageNode = $('#image'),
        links = $listNode.find('a'),
        randomImageArray = [],
        imageCounter = 0,
        counter = 0,
        id1,
        id2,
        index1,
        index2,
        source1,
        source2;





    //checkIfEqual function check if 2 images are the same , if yes it will remove the 'inactive ' class so they stay opened till the end of the game
    function checkIfEqual(id1, id2) {
        var src1 = $('#' + id1).attr('src');
        var src2 = $('#' + id2).attr('src');
        if (src1 == src2) {
            $('#' + id1).removeClass('inactive');
            $('#' + id2).removeClass('inactive');
        } else {
            counter = 0;
            invertImage();
        }
    }


    //createRanImageArray sets an array of random images to be used when setting images and comparing
    function createRanImageArray() {
        for (var i = 1; i <= 5; i++) {
            randomImageArray[i] = Math.floor(Math.random() * 5) + 1;
            alert(randomImageArray[i]);
        }
    }

    createRanImageArray();
    //setImage function will set the image resource after clicking of it , in another way it shows what is hidden under the back
    function setImage(index, imageID) {
        $('#' + imageID).attr('src', 'images/Image' + randomImageArray[index] + '.png');
    }


    //invertImage function will hide all 'inactive' images using a back.jpg image. 
    function invertImage() {
        setTimeout(function() {
            $('.inactive').attr('src', 'images/back.jpg');
        }, 2000);
    }
    invertImage();

    //on click function that used setImage() and checkIfEqual () functions , the mod is used to know the counter of the clicks , if 'counter % 2 == 1' the 1 image is clicked , if 'counter % 2 == 0' then 2 images are clicked.
    $('.inactive').on('click', function(e) {
        counter++;
        e.preventDefault();

        if (counter % 2 == 1) {
            index1 = ($(this).parent().index()) + 1;
            id1 = this.id;
            setImage(index1, id1);

        }

        if (counter % 2 == 0) {
            index2 = ($(this).parent().index()) + 1;
            id2 = this.id;
            setImage(index2, id2);
            checkIfEqual(id1, id2);

        }

    });

});