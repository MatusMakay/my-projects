var moment = require('moment');

function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}

/**
 * 
 * @param {*} input_date 
 * @returns string in normalize format DD.MM.YYYY
 */
function handle_adding_dates(input_date){
    if(isString(input_date)){
        let date_string = input_date.split('.')
        date = new Date(date_string[2], date_string[1], date_string[0])
    }
    
    else{
        date = new Date(input_date)
    }

    return moment(date).format("DD.MM.YYYY")
}

function remove_word_from_psc(psc){
    const pattern = /\w+\s/g;

    word = pattern.exec(psc)


    if (word != null && Number.isNaN(Number(word[0])) == true){
        console.log(psc)
        console.log(word)

        return psc.replace(word, "") 
    }
    
    return psc
}

/**
 * 
 * @param {*} values 
 * @param {*} XML_KEYS  
 * @returns return created obj from row values
 */
function create_object(values, XML_KEYS){
    let obj = {}

    for(i = 2, j = 0; i <= 12; i++, j++){
        
        if(values[i]){
            // handle Dates
            if (i == 6 || i == 12){
                obj[XML_KEYS[j]] = handle_adding_dates(values[i])
            }
            // handle others than Date atributes
            else{
                obj[XML_KEYS[j]] = values[i]
            }
        }
        // handle adding empty atributes
        else{
            obj[XML_KEYS[j]] = ""
        }
    }

    obj[XML_KEYS[11]] = values[15].result

    //remove empty line from psc
    obj[XML_KEYS[9]] += " "
    obj[XML_KEYS[9]] = obj[XML_KEYS[9]].replace(" ", "")

    obj[XML_KEYS[7]] = remove_word_from_psc(obj[XML_KEYS[7]])

    return obj
}

module.exports = {
    create_object
}