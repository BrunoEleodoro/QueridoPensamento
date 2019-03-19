function downloadAll()
{
    var tamanho = document.querySelectorAll('[class*="frase fr"]').length
    var i = 0;
    var tomorrow = new Date("2019-05-21");
   
    var vetor = []
    while(i < tamanho)
    {
        if(i % 5 == 0)    
        {
            tomorrow.setDate(tomorrow.getDate() + 1);
        }
        var frase = document.querySelectorAll('[class*="frase fr"]')[i].innerText
        var autor = document.querySelectorAll('[class*="autor"]')[i].innerText
        var data = "";
        var dia = tomorrow.getDate();
        var mes = (tomorrow.getMonth() + 1);
        var ano = tomorrow.getFullYear();

        data += ( (dia.toString().length == 1) ? '0' + dia : dia ) + '/';
        data += ( (mes.toString().length == 1) ? '0' + mes : mes ) + '/';
        data += ano
        
        vetor.push({
            'frase': frase,
            'autor': autor,
            'data': data
        });
        i++;
    }
    console.log(JSON.stringify(vetor));
}
