module.exports=updateTemplate;

function updateTemplate(data,temp){
    let output = temp.replace(/{%PROD_NAME%}/g,data.productName);
    output = output.replace(/{%IMAGE%}/g,data.image);
    output = output.replace(/{%ID%}/g,data.id);
    output = output.replace(/{%COUNTRY%}/g,data.from);
    output = output.replace(/{%PROD_NUT%}/g,data.nutrients);
    output = output.replace(/{%QUANTITY%}/g,data.quantity);
    output = output.replace(/{%PRICE%}/g,data.price);
    output = output.replace(/{%DESC%}/g,data.description);

    if(!data.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic');

    return output;
}
