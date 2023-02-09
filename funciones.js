function doGet() 
{
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agend Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}