(function(global, $){

    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }
    Greetr.prototype = {};
    Greetr.init = function(firstName, lastName, language){
        var self = this;
        self.firstName = firstName || 'Dave';
        self.lastName = lastName || 'Gudeman';
        self.language = language || 'en';
    }
    Greetr.init.prototype = Greetr.prototype;

     global.G$ = global.Greetr = Greetr;
   
    
})(window, jQuery);