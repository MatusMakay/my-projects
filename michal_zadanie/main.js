/**
 * IMPORTS
 */
const excel = require('exceljs')
const fs = require('fs')

const {create_object} = require('./utils/utils')
const {create_xml_document} = require('./template/template.xml')

const PATH_TO_FILE = "./data/data.xlsx"

const workbook = new excel.Workbook();
//values in row.values
const values = {
    2: "Titul \npred menom",
    3: "Meno",
    4: "Priezvisko",
    5: "Titul \nza menom",
    6: "Datum \nnarodenia",
    7: "Nazov pracoviska",
    8: "Ulica pracoviska",
    9: "Cislo ulice pracoviska",
    10: "Mesto pracoviska",
    11: "PSC pracoviska",
    12: "Datum Posledneho plnenia", //new Date
    13: "Nepenazne plnenie spolu (KHaTD)",
    14: "Nepenazne plnenie spolu (MH)",
    15: "Spolu nepenazne plnenie", // "result":
}

// 
const XML_KEYS = ["titulPred", "meno", "priezvisko", "titulZa", "datumNarodenia", "obchodneMeno", "ulica", "supisneOrientacneCislo", "obec", "psc", "datum", "vyska"]

workbook.xlsx.readFile(PATH_TO_FILE).then((workbook) =>{
    worksheet = workbook.getWorksheet()
    
    let list_obj = []

    worksheet.eachRow((row, rowNumber) => {
        const values = row.values

        if(rowNumber!=2){
            list_obj.push(create_object(values, XML_KEYS))
        }
    });

    xml_string = create_xml_document(list_obj)

    fs.writeFile('./xml/final.xml', xml_string, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
    });


})
