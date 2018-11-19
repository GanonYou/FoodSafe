import "../stylesheets/app.css";
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract';
import { default as CryptoJS} from 'crypto-js';
var accounts;
var account;
var foodSafeABI;
var foodSafeContract;
var foodSafeCode;
window.App = {
  start: function() {
    var self = this;
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }
      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      accounts = accs;
      account = accounts[0];
      web3.eth.defaultAccount= account;

      foodSafeContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"LocationId","type":"uint256"},{"name":"Name","type":"string"},{"name":"Secret","type":"string"},{"name":"PreAddress","type":"string"}],"name":"AddNewLocation","outputs":[],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[],"name":"GetTrailCount","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function","stateMutability":"nonpayable"},{"constant":false,"inputs":[{"name":"TrailNo","type":"uint8"}],"name":"GetLocation","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"type":"function","stateMutability":"nonpayable"}]);      
    });
  },
    createContract: function()
  {
    var foodsafe = foodSafeContract.new(
      {
        from: web3.eth.accounts[0], 
        data: '0x60606040526001805460ff1916905534610000575b610765806100226000396000f3606060405260e060020a6000350463574bc8568114610034578063bbe42af814610104578063e3fd1ec214610127575b610000565b346100005760408051602060046024803582810135601f8101859004850286018501909652858552610102958335959394604494939290920191819084018382808284375050604080516020601f89358b0180359182018390048302840183019094528083529799988101979196509182019450925082915084018382808284375050604080516020601f89358b0180359182018390048302840183019094528083529799988101979196509182019450925082915084018382808284375094965061027895505050505050565b005b346100005761011161054e565b6040805160ff9092168252519081900360200190f35b3461000057610137600435610558565b6040518080602001878152602001868152602001858152602001806020018060200184810384528a8181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101b15780820380516001836020036101000a031916815260200191505b508481038352868181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561020a5780820380516001836020036101000a031916815260200191505b508481038252858181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156102635780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b6040805160e081018252600060c0820181815282526020808301828152838501839052606084018381528551808401875284815260808601908152865193840190965292909152868352879052918490524290915260a0810182905260015460ff16156102ff576001805460ff166000908152602081905260409081902090910154908201525b8060006000600160009054906101000a900460ff1660ff1681526020019081526020016000206000820151816000019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061037757805160ff19168380011785556103a4565b828001600101855582156103a4579182015b828111156103a4578251825591602001919060010190610389565b5b506103c59291505b808211156103c157600081556001016103ad565b5090565b50506020820151816001015560408201518160020155606082015181600301556080820151816004019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061043757805160ff1916838001178555610464565b82800160010185558215610464579182015b82811115610464578251825591602001919060010190610449565b5b506104859291505b808211156103c157600081556001016103ad565b5090565b505060a0820151816005019080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106104d957805160ff1916838001178555610506565b82800160010185558215610506579182015b828111156105065782518255916020019190600101906104eb565b5b506105279291505b808211156103c157600081556001016103ad565b5090565b50506001805460f860020a60ff8216830181020460ff1990911617905550505b5050505050565b60015460ff165b90565b60408051602080820183526000808352835180830185528181528451808401865282815260ff87168352828452858320600180820154600280840154600385015485548c519581161561010002600019011692909204601f81018a90048a0285018a01909b528a8452989996988998899893949193600487019260058801929091889183018282801561062c5780601f106106015761010080835404028352916020019161062c565b820191906000526020600020905b81548152906001019060200180831161060f57829003601f168201915b5050855460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959b50879450925084019050828280156106ba5780601f1061068f576101008083540402835291602001916106ba565b820191906000526020600020905b81548152906001019060200180831161069d57829003601f168201915b5050845460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959750869450925084019050828280156107485780601f1061071d57610100808354040283529160200191610748565b820191906000526020600020905b81548152906001019060200180831161072b57829003601f168201915b505050505090509550955095509550955095505b9193955091939556', 
        gas: '4700000'
      }, function (e, contract){
       console.log(e, contract);
       if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
            document.getElementById("contractAddress").value = contract.address;
          }
    });
  },
  addNewLocation: function()
  {
    var contractAddress = document.getElementById("contractAddress").value;
    var deployedFoodSafe = foodSafeContract.at(contractAddress);
    var locationId = document.getElementById("locationId").value;
    var locationName = document.getElementById("locationName").value;
    var locationSecret = document.getElementById("secret").value;
    var passPhrase = document.getElementById("passPhrase").value;
    var preContractAddress = document.getElementById("previousContractAddress").value;
    var encryptedSecret = CryptoJS.AES.encrypt(locationSecret,passPhrase).toString();
    deployedFoodSafe.AddNewLocation(locationId, locationName, encryptedSecret,preContractAddress, function(error){
      console.log(error);
    });
    document.getElementById("contractAddress").value = "";
    document.getElementById("locationId").value = "";
    document.getElementById("locationName").value = "";
    document.getElementById("secret").value = "";
    document.getElementById("passPhrase").value = "";
    document.getElementById("previousContractAddress").value = contractAddress;
  },
  getCurrentLocation: function()
  {
    var contractAddress = document.getElementById("contractAddress").value;
    var passPhrase = document.getElementById("passPhrase").value;
    var info = "";

      document.getElementById("textArea").value = "该食品生产销售的所有信息如下:";
      var deployedFoodSafe = foodSafeContract.at(contractAddress);
        deployedFoodSafe.GetTrailCount.call(function (error, trailCount){
            while (trailCount >= 1){
            deployedFoodSafe.GetLocation.call(trailCount-1, function(error, returnValues){
              var encryptedSecret = returnValues[4];
              var decryptedSecret = CryptoJS.AES.decrypt(encryptedSecret, passPhrase).toString(CryptoJS.enc.Utf8);
              var info = "\n\n位置名称:" + returnValues[0] + "\n位置ID:" + returnValues[1] + "\t保密信息:" + decryptedSecret;
              document.getElementById("textArea").value += info;
            })
            trailCount--;
          }
        })
  }
};

window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source.  If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  App.start();
});
