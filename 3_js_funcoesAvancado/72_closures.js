function makeFunc() {
    var name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();

  /*
  EXPLICAÇÃO DO MOZILLA

  A solução para tal problema é que a função myFunc tornou-se uma closure. Uma closure (fechamento) trata-se de um tipo especial
   de objeto que combina duas coisas: a função e o ambiente onde a função foi criada. Este ambiente consiste de quaisquer variáveis
   que estavam no escopo naquele momento em que a função foi criada. Neste caso,myFunc é a closure que incorpora tanto a função displayName
   quanto a palavra Mozilla que existia quando a closure foi criada.
  */