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
    const mintNFT=function(_name,_color,_type,_rarity){
const NFT={
    name:_name,
    color:_color,
    type:_type,
    rarity:_rarity,
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
        console.log(`Type: ${NFTs[i].type}`);
        console.log(`rarity: ${NFTs[i].rarity}`);
    }
    console.log("Finished Printing all NFTS.\n")
};
const getTotalSupply =function(){
    console.log('Total number of minted NFTs: ${NFTs.length}');
};
mintNFT("NFT 1","Black","Dance","Rare");
mintNFT("NFT 2","Pink","Listening Music","Common");
mintNFT("NFT 3","Yellow","Cooking","Epic");
mintNFT("NFT 4","White","Travelling","Legendary");
printNFTs();

getTotalSupply();
