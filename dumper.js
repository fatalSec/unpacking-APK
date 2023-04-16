var startAddress = ptr(0x71d4ffc000);
var endAddress = ptr(0x71d5015000);
var size = endAddress.sub(startAddress);

console.log(`[+] Dumping memory region ${startAddress} : ${endAddress}`);

var buffer = Memory.readByteArray(startAddress, parseInt(size, 16));

var filePath = "/data/data/com.tilks.arscmerge/"+startAddress+"_dump.dex";
var fileHande = new File(filePath, "wb");

if(fileHande && fileHande != null){
    fileHande.write(buffer);
    fileHande.flush();
    fileHande.close();
    console.log(`[*] File successfully dumped at ${filePath}`);
}