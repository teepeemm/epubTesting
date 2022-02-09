['Width','Height'].forEach(function(direction,index) {
    ['inner','outer'].forEach(function(inout) {
        document.getElementById('window'+inout).cells[index+1].textContent
            = window[inout+direction];
    });
    ['','avail'].forEach(function(av) {
        document.getElementById('screen'+av).cells[index+1].textContent
            = screen[(av+direction).replace(/^./,(m)=>m.toLowerCase())];
    });
    ['client','offset','scroll'].forEach(function(type) {
        document.getElementById('body'+type).cells[index+1].textContent
            = document.body[type+direction];
        document.getElementById('docElt'+type).cells[index+1].textContent
            = document.documentElement[type+direction];
    });
});
function gcf(a,b) {
    if ( b===0 ) {
        return a;
    }
    return gcf(b,a%b);
}
Array.from(document.getElementsByTagName('tbody')[0].rows)
            .forEach(function(row) {
    const width = +row.cells[1].textContent,
        height = +row.cells[2].textContent,
        factor = gcf(width,height);
    row.cells[3].textContent = (width/factor)+':'+(height/factor);
});

document.getElementById('externalscript').style.textDecoration = 'none';
document.getElementById('colorDepth').textContent = screen.colorDepth;
document.getElementById('pixelDepth').textContent = screen.pixelDepth;
document.getElementById('devicePixelRatio').textContent = window.devicePixelRatio;
