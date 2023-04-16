//Hook File.delete()

Java.perform(function(){
    var f = Java.use("java.io.File");
    f.delete.implementation = function(){
        var path = this.getAbsolutePath();
        console.log(`[+] Delete catached => ${path}`);
        return true;
    }
});

