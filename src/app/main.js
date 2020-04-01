var app = {

    hiddeAll() {

        let errImgs = document.getElementsByTagName( 'img' );
        for ( let img of errImgs ) {

            img.style.visibility = 'hidden';

        };

        let errTxt = document.getElementById( 'inputs' ).getElementsByTagName( 'p' );
        for ( let i = 0; i < errTxt.length; i++ ) {

            if ( i == errTxt.length - 1 ) {
                
                break

            } else {

                errTxt[i].style.visibility = 'hidden'

            }

        }

        return;

    },

    showError ( itemClass ) {

        let items = document.getElementsByClassName( itemClass );

        for ( let item of items ) {

            item.style.visibility = 'visible'

        }

        return;

    },

    validating() {

        let inputs = document.getElementsByTagName( 'input' );

        let isOk = 0;
        
        for ( let input of inputs ) {

            if ( input.value == "" ) {

                app.showError ( input.id );
                isOk++;

            } else if ( input.id == "email" ) {

                if ( !input.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i) ) {

                    app.showError ( input.id );
                    isOk++;

                } else continue

            } else continue

        }

        if ( isOk == 0 ) {

            alert( "You are our subscriver now!" )
            app.hiddeAll()

        }

    },

    init() {

        this.hiddeAll()

        document.getElementById( 'btn' ).addEventListener( 'click', app.validating )

        let inputs = document.getElementsByTagName( 'input' );
        for ( let input of inputs ) {
            input.addEventListener( 'click', app.hiddeAll )
        }

    }

}

app.init()