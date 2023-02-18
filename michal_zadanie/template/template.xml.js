const xmlJs = require('xml-js');
const math = require('mathjs')

function create_header(num_records){
    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"
    xml += "<dokument xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:noNamespaceSchemaLocation=\"ozn4317B_2020.xsd\">\n"
    const header = {
        "hlavicka": {
            "dic": 2121568229,
            "zaObdobie" : {
                "rok": 2022
            },
            "doplnenie": 0,
            "fyzickaOsoba": {
                "priezvisko": "",
                "meno": "",
                "titulPred": "",
                "titulZa": "",
                "datumNarodenia": ""
            },
            "pravnicaOsoba":{
                "obchodneMeno":{
                    "riadok": "SUMEET s. r. o."
                }
            },
            "sidlo":{
                "ulica": "Mozartova",
                "supisneOrientacneCislo": "4194/13",
                "psc": 81102,
                "obec": "Bratislava – mestská časť Staré Mesto",
                "stat": "SR"
            },
            "vypracoval":{
                "vypracoval": "Ing. Dagmar Erteľová",
                "dna": "25.01.2023",
                "telefon": "0042190356419",
                "podpis": 1,
            },
            "pocetStrPrilohy": num_records
        }
    }
    tmp_xml = xmlJs.js2xml(header, { compact: true, ignoreComment: true, spaces: 4 });

    xml += tmp_xml

    return xml
}

create_header()
function create_physical_person_header_info_xml_json(priezvisko, meno, titulPred, titulZa){
    return {
        "priezvisko": priezvisko,
        "meno": meno,
        "titulPred": titulPred,
        "titulZa": titulZa,
    }
}

function create_adress_xml_json(obchodneMeno, ulica, supisneOrientacneCislo, psc, obec){
    return {
        "nazov":{
            "obchodneMeno": obchodneMeno,
        },
        "ulica": ulica,
        "supisneOrientacneCislo": supisneOrientacneCislo,
        "psc": psc,
        "obec": obec
    }
}

function create_prijemca_xml(dic, vyska, datum, datumNarodenia, priezvisko, meno, titulPred, titulZa, obchodneMeno, ulica, supisneOrientacneCislo, psc, obec){
    return {
        "dic" : dic,
        "datumNarodenia": datumNarodenia,
        "fyzickaOsoba":  create_physical_person_header_info_xml_json(priezvisko, meno, titulPred, titulZa),
        "adresaZariadenia": create_adress_xml_json(obchodneMeno, ulica, supisneOrientacneCislo, psc, obec),
        "vyska": vyska,
        "datum": datum
    }
}

function create_xml_prijemcovia(list_prijemnca){
    let xml_prijemca_all = ""
    
    list_prijemnca.forEach( (prijemca, index) => {
        json_prijemca = {
            "prijemca" : create_prijemca_xml("", prijemca["vyska"], prijemca["datum"], prijemca["datumNarodenia"], prijemca["priezvisko"], prijemca["meno"], prijemca["titulPred"], prijemca["titulZa"],  prijemca["obchodneMeno"],  prijemca["ulica"],  prijemca["supisneOrientacneCislo"],  prijemca["psc"],  prijemca["obec"])
        }

        new_line = "\n"

        if (index == 0){
            new_line = ""
        } 

        tmp_xml = xmlJs.json2xml(json_prijemca, {compact: true, spaces: 2});
        xml_prijemca_all += new_line + tmp_xml
    });

    return xml_prijemca_all
}

function create_priloha(list_prijemnca, num_page, num_records){

    const priloha = {
        "priloha": {
            "strana": {
                "aktualna": num_page,
                "celkovo": num_records
            }
        }
    }

    xml_priloha =  xmlJs.json2xml(priloha, {compact: true, spaces: 2});

    xml_priloha = xml_priloha.replace("</priloha>", "")

    xml_priloha += create_xml_prijemcovia(list_prijemnca)

    xml_priloha += "\n</priloha>\n"

    return xml_priloha
}
function create_xml_document(list_prijemnca){
   
    num_records = Number(list_prijemnca.length)
    
    num_records = math.floor((num_records/3)+1)

    header = create_header(num_records)

    xml_string = header + "\n<telo>\n"

    push = 0

    for(i = 0; i < num_records; i++){

        tmp_priloha = create_priloha(list_prijemnca.slice(push, push+3), i+1, num_records)

        push += 3

        xml_string += tmp_priloha
    }

    xml_string +=  "</telo>\n</dokument>"

    return xml_string

}

module.exports = {
    create_xml_document
}