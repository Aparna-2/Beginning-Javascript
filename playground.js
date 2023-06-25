/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
    const mintNFT=function(_name,_color,_fabric,_availability){
const NFT={
    name:_name,
    color:_color,
    fabric:_fabric,
    availability:_availability,
};
NFTs.push(NFT);
console.log('congratulation your NFT"${NFT.name}"has been minted sucessfully.n');

};
const printNFTs=function (){
    console.log("ALL NFTs:\n");
    for (let i=0;i< NFTs.length; i++){
        console.log(`ID: ${i + 1}`);
        console.log(`Name: ${NFTs[i].name}`);
        console.log(`Color: ${NFTs[i].color}`);
        console.log(`Fabric: ${NFTs[i].fabric}`);
        console.log(`availability: ${NFTs[i].availability}`);
    }
    console.log("Finished Printing all NFTS.\n")
};
const getTotalSupply =function(){
    console.log('Total number of minted NFTs: ${NFTs.length}');
};
mintNFT("NFT 1","Black","Cotton","Common");
mintNFT("NFT 2","Pink","Silk","Common");
mintNFT("NFT 3","Yellow","Linen","Rare");
mintNFT("NFT 4","White","Synthetic","Common");
printNFTs();

getTotalSupply();
