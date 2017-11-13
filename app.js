var a = '%fdsfsdfsdfdsf '

function process(paragraf){
    var head = 0 ;

    if(paragraf.charAt(0) == '%'){
        paragraf = paragraf.slice(1);
        head +=1
    }

    return paragraf + '  ' + head;
 
}

console.log(process('%fdsfsdfsdfdsf '))