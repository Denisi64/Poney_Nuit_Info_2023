function getRandomNumb(){

    const pos = 1;
    const neg = -1;

    const sign = Math.floor(Math.random() * (pos - neg + 1)) + neg;

    const containerWidth = 160;
    const containerHeight = 80;
    
    const randomLeft = Math.floor(Math.random() * containerWidth);
    const randomTop = Math.floor(Math.random() * containerHeight);

    randomLeft > containerWidth ? 0 : sign * randomLeft;
    randomTop > containerWidth ? 0 : sign * randomTop;

    return [randomLeft, randomTop];
}
