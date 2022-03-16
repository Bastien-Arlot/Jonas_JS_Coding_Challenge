document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));



document.querySelector("button").addEventListener('click', function(){
    const text = document.querySelector('textarea').value;
    const textArr = text.toLowerCase().split("\n");
    console.log(textArr)

    for (const word of textArr){
        const [first, second] = word.toLowerCase().trim().split("_");
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(output);
    }


    //
    // underscore_case
    // first_name
    // Some_Variable
    // calculate_AGE
    // delayed_departure
    // const newText =[];
    // const textMin = [];
    // for (let i = 0 ; i < textArr.length; i++){
    //     textArr[i][textArr[i].indexOf("_")+ 1].toUpperCase() ;
    // }
    // console.log(textArr);
    // console.log(textMin);
//     for (let i = 0; i < textArr.length; i++){
//        newText.push(textArr[i].replace("_", ""));
//     }
//     console.log(newText);
})

