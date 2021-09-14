var app = new Vue(
    {
        el:'#root',
        data:{
            hW: 'Hello',
            immagine: '',
            citazione: 'Si, è una citazione a labyrinth che ho visto tante volte. :)',
            messaggioBottone: 'Cliccami (fidati)'
        },
        methods:{
            mostraImmagine: function(){
                if(this.immagine == ''){
                    this.immagine = 'https://c.tenor.com/g90dduLXHtAAAAAM/allo-worm.gif';
                    this.messaggioBottone = 'Ricliccami';
                }else{
                    this.immagine = '';
                    this.messaggioBottone = 'Cliccami (fidati)';
                }
            }
        }
    }
);