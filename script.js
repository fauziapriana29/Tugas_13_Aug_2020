let a = '';

for( let b = 5; b > 0; b--) {
    for( let c = 0; c < b; c++ ) {
        a += '*'
    }
    a += '<br>'
    a += '\n'
}
document.getElementById('stars').innerHTML += a

