var bitcom = bitcom || {};
bitcom.backgrounds = [];

(function()
{

    function newBackground(imgSrc, pubTextRect, pubQrRect, privQrRect, privTextRect)
    {
        return {imgSrc:imgSrc, pubTextRect:pubTextRect, pubQrRect:pubQrRect, privQrRect:privQrRect,  privTextRect:privTextRect};
    }


    bitcom.backgrounds[1] = newBackground('backgrounds/Dorian.png',[246,488,736,524 ],[29,332,219,521], [1072, 33,1261,221])
    bitcom.backgrounds[2] = newBackground('backgrounds/Blue.png',[246,488,736,524 ],[29,332,219,521], [1072, 33,1261,221])
    bitcom.backgrounds[3] = newBackground('backgrounds/Orange.png',[246,488,736,524 ],[29,332,219,521], [1072, 33,1261,221])
    bitcom.backgrounds[4] = newBackground('backgrounds/Green.png',[246,488,736,524 ],[29,332,219,521], [1072, 33,1261,221])

})();

