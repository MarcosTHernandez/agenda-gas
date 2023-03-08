    const HOJA = SpreadsheetApp.openById('1bZEJetD_3EaFmMsiQHoeiIXOIP3Gx-wsfmhcgmEsfno').getActiveSheet();

function doGet() 
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agend Google Apps Script');
}

function doPost(datos) 
{    
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agend Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos()
{
    return HOJA.getDataRange().getValues();     
} 

function insertarContacto(nombre, apellidos, correo, telf)
{
    HOJA.appendRow([nombre,apellidos,correo,telf]);
}