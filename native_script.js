var unlinkPtr = Module.findExportByName(null, "unlink");
Interceptor.replace(unlinkPtr, new NativeCallback(function(path){
    console.log(`[+] unlink: ${path.readCString()}`);
    return 0;
}, 'int', ['pointer']));