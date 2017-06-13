;(function(global, $){

    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }
   
    // Not exposed ------------------------------------------
    var supportedLangs = ['en', 'es'];
   
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings ={
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    }
    // End Not exposed ---------------------------------------
    
    // Exposed ------------------------------------------------
    Greetr.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },
        validate: function() {
           if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language"
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!'
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }
            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            // if (console) is for IE because it only has the console var when open
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this; // make chainable
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;  // make chainable
        },
        
        HTMLGreeting: function(selector, formal) {
            if(!$){
                throw 'jQuery not loaded';
            }
            if(!selector){
                throw 'Missing jQuery selector'
            }
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            } 
            $(selector).html(msg);
            return this; // make chainable
        }
    };
    // end Greetr.prototype -------------------------------------

    Greetr.init = function(firstName, lastName, language){
        var self = this;
        self.firstName = firstName || 'Dave';
        self.lastName = lastName || 'Gudeman';
        self.language = language || 'en';

        self.validate();
    }
    Greetr.init.prototype = Greetr.prototype;

     global.G$ = global.Greetr = Greetr;
   
    
})(window, jQuery);