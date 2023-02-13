function doGet() 
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agend Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    let hoja = SpreadsheetApp.openById('1bZEJetD_3EaFmMsiQHoeiIXOIP3Gx-wsfmhcgmEsfno').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
} 