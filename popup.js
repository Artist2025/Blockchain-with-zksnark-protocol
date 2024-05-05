const { stringify } = require("thirdweb/utils");

document .addEventListener("DOMContentLoaded", function(){
    // targeting element
    document
    .getElementById("accountList")
    .addEventListener("click", changeAccount);

    document
    .getElementById("userAddress").addEventListener("click", copyAddress);

    document.getElementById("transferFund").addEventListener("click", handler);

    document.getElementById("header_network").addEventListener("click", getOpenNetwork);

    document.getElementById("network_item").addEventListener("click", getSelectedNetwork);

    document.getElementById("add_network").addEventListener("click", SetNetwork);

    document.getElementById("loginAccount").addEventListener("click", loginUser);

    document.getElementById("accountCreate").addEventListener("click", CreateUser);

    document.getElementById("openCreate").addEventListener("click", OpenCreate);

    document.getElementById("sign_Up").addEventListener("click", SignUp);

    document.getElementById("login_Up").addEventListener("click", login);

    document.getElementById("logout").addEventListener("click", logout);

    document.getElementById("Open_Transfer").addEventListener("click", OpenTransfer);

    document.getElementById("goBack").addEventListener("click", goBack);

    document.getElementById("open_Import").addEventListener("click", OpenImport);

    document.getElementById("open_Assets").addEventListener("click", OpenAssets);

    document.getElementById("open_Activity").addEventListener("click", OpenActivity);

    document.getElementById("goHomePage").addEventListener("click", GoHomePage);

    document.getElementById("openAccountImport").addEventListener("click", OpenImportModel);

    document.getElementById("close_import_account").addEventListener("click", CloseImportAccount);

    document.getElementById("add_new_token").addEventListener("click", addToken);

    document.getElementById("add_new_account").addEventListener("click", addAccount);


});

//state variable
let providerURL = "https://zksync-mainnet.g.alchemy.com/v2/s7vsjoFne4lMJ7ie2ndVPO-0umG6FuMA";

let provider;
let privatekey;
let address;


// function
function handler(){
    document.getElementById("transfer_center").style.display = "flex"

    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    const private_key = 
    "06aca34642eb532da430df8be07c2cdd559c3856a382d9db2381bc2003912940";
    const testAccount = "0x342d41F4EAE6215f6D1268862335620AC4427073";

    // provider
    const provider = new ethers.provider.jsonRPCProvider(providerURL);

    let wallet = new ethers.Wallet(privatekey, provider);

    const tx = {
        to: address,
        value: ethers.utils.parseEther(amount),
    };

    let a = document.getElementById("link");
    a.href = "somelink url";

    wallet.sendTransaction(tx).then((txObj) => {
        console.log("txHash:", txObj.hash);

        document.getElementById("transfer_center").style.display = "none";
        const document.getElementById("link");

        document.getElementById("link").style.display = "block";
    });
}


//function
function handler(){}

function checkBalance(){
    const provider = new ethers.providers.jsonRPCProvider(providerURL);

    provider.getBalance(address).then((balance)=> {
        const balanceInEth = ethers.utils.formatEther(balance);

        document.getElementById("accountBalance").innerHTML = '${balanceInEth}';

        document.getElementById("userAddress").innerHTML = '${address.slice(0, 15}';
        
    })

};

function getOpenNetwork(){
    document.getElementById("network").style.display = "block";

};

function getSelectedNetwork(){
    const element = document.getElementById("selected_network");
    element.innerHTML = e.target.innerHTML;

    if(e.target.innerHTML === "Ethereum Mainnet") {
        providerURL = 
        "https://zksync-mainnet.g.alchemy.com/v2/s7vsjoFne4lMJ7ie2ndVPO-0umG6FuMA";
    } else if (e.target.innerHTML == "Zksync Mainnet") {
        providerURL = "s7vsjoFne4lMJ7ie2ndVPO-0umG6FuMA";
    } else if (e.target.innerHTML == "ZkSync") {
        "providerURl = "https://zksync-mainnet.g.alchemy.com/v2/s7vsjoFne4lMJ7ie2ndVPO-0umG6FuMA";
        document.getElementById("network").style.display = "none";
    } else if (e.target.innerHTML == "goerila test network") {
        "providerURl = "https://zksync-mainnet.g.alchemy.com/v2/s7vsjoFne4lMJ7ie2ndVPO-0umG6FuMA";
        document.getElementById("network").style.display = "none";
        } else if (e.target.innerHTML == "sepolia test network") {
            "providerURL = "https://zksync-mainnet.g.alchemy.com/v2/s7vsjoFne4lMJ7ie2ndVPO-0umG6FuMA";
            document.getElementById("network").style.display = "none";

        }
        console.log(providerURL);
    }
    
    
    



function SetNetwork(){
    document.getElementById("network").style.display = "none";
};

function loginUser(){
    document.getElementById("CreateAccount").style.display = "none";
    document.getElementById("LogInUser").style.display = "block";

};

function CreateUser(){
    document.getElementById("CreateAccount").style.display = "block";
    document.getElementById("LogInUser").style.display = "none";
};


function OpenCreate(){
    document.getElementById("CreateAccount").style.display = "none";
    document.getElementById("Create_popUp   ").style.display = "block";
};


function SignUp(){
    const name = document.getElementById("sign_up_name").value;
    const email = document.getElementById("sin_up_email").value;
    const password = document.getElementById("sign_up_password").value;
    const passwordConfirm = document.getElementById("sign_up_passwordConfirm").value;

    document.getElementById("field").style.display = 'none';
    document.getElementById("center").style.display = 'block';

    const wallet = ethers.wallet.createRandom();

    if(wallet.address){
        console.log(wallet)

        // api call
        const url = "https://localhost:3000/api/v1/user/signup";

        const data = {
            name: name,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            address: wallet.address,
            private_key: wallet.privatekey,
            mnemonic: wallet.mnemonic.phrase,
        };

        fetch (url, {
            method: "POST",
            handlers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((Response)=> Response.json()).then((result)=> {
            document.getElementById("createAddress").innerHTML = wallet.address;
            document.getElementById("createdPrivatekey").innerHTML = wallet.privatekey ;
            document.getElementById("createdMnemonic").innerHTML = wallet.mnemonic.phrase;
            document.getElementById("center").style.display = "none";
            document.getElementById("accountData").style.display = "block";
            document.getElementById("sign_up").style.display = "none";

            const userWallet = {
                address: wallet.address,
                private_key: wallet.privatekey,
                mnemonic: wallet.mnemonic.phrase,
            };

            const jsonObj = JSON.stringify(userWallet);
            localStorage.setItem("userWallet", jsonObj);

            document.getElementById("goHomePage").style.display = "block";
            window.location.reload();
        }).catch((error)=> {
            console.log("ERROR:", error);
        });
    }
}


function login(){
    document.getElementById("login_form").style.display = "none";
    document.getElementById("center").style.display = "block";

    const email = document.getElementById("login_email").value;
    const password = document,getElementById("login_password").value;

    // api call
        const url = "https://localhost:3000/api/v1/user/login";
        const data ={
            email: email,
            password: password,

        };

        fetch(url, {
            method: 'POST',
            handlers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((Response)=> Response.json().then((result)=> {
            console.log(result)
            const userWallet = {
                address: result.data.user.address,
                private_key: result.data.user.private_key,
                mnemonic: result.data.user.mnemonic,
            };

            const jsonObj = JSON.stringify(userWallet);
            localStorage.setItem("userWallet", jsonObj);
        }).catch((error)=> {
            console.log(error)
        });
}
        

function logout(){
    localStorage.removeItem("userWallet");
    window.location.reload();

}

function OpenTransfer(){
    document.getElementById("transfer_from").style.display = "block";
    document.getElementById("homePage").style.display = "none";


}

function goBack(){
    document.getElementById("transfer_from").style.display = "none";
    document.getElementById("homePage").style.display = "block";

}

function OpenImport(){
    document.getElementById("import_token").style.display = "block";
    document.getElementById("homePage").style.display = "none";

}

function importGoBack(){
    document.getElementById("import_token").style.display = "none";
    document.getElementById("homePage").style.display = "block";


}

function OpenActivity(){
    document.getElementById("activity").style.display = "block";
    document.getElementById("assets").style.display = "none";

}

function OpenAssets(){
    document.getElementById("activity").style.display = "none";
    document.getElementById("assets").style.display = "block";


}

function GoHomePage(){
    document.getElementById("create_popUp").style.display = "none";
    document.getElementById("homePage").style.display = "block";


}

function OpenImportModel(){
    document.getElementById("import_account").style.display = "block";
    document.getElementById("homePage").style.display = "none";

}

function CloseImportModel(){
    document.getElementById("import_account").style.display = "none";
    document.getElementById("homePage").style.display = "block";

}

function addToken(){
    const address = document.getElementById("token_address").value;
    const name = document.getElementById("token_name").value;
    const symbol = document.getElementById("token_symbol").value;

    // api call
    const url = "https://localhost:3000/api/v1/tokens/createtoken";
    const data = {
        name: name,
        address: address,
        symbol: symbol,
    };
    fetch(url, {
        method: "POST",
        handlers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then((Response)=> Response.json()).then((result)=> {
        window.location.reload()
    }).catch((error)=> {
        console.log("ERROR", error);
    });
}
    
function addAccount(){
    const privatekey = document.getElementById("add_account_private_key").value;

    const provider = new ethers.providers.jsonRPCProvider(provideurl);

    let wallet = new ethers.Wallet(privatekey, provider);

    console.log(wallet);

    const url = "https://localhost:3000/api/v1/create/createaccount";

    const data = {
        privatekey: privatekey,
        address: wallet.address,
    };
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then((Response)=> Response.json()).then ((result)=> {
    }).catch((error)=> {
        console.log( error);
    });
}
    
function myFunction(){
    const str = localStorage.getElementById("userWallet");
    const parsedObj = JSON.parse(str);

    if (parsedObj.address) {
        document.getElementById("LoginUser").style.display = "none";
        Document.getElementById("homePage").style.display = "block";

        privatekey = parsedObj.private_key;
        address = parsedObj.address;

        checkBalance(parsedObj.address);
    }

    const tokenRender = document.querySelector(".assets");
    const accountRender = document.querySelector(".accountList");

    const url = "https://localhost:3000/api/v1/tokens/alltokens";
    fetch(url).then((Response)=> Response.json()).then((data)=> {
        let elements = "";

        data.data.tokens.map((token)=>
        elements +=
        <div class="assets_item>
        <img class="assets_item_img"
        src="./assets/theblockchain.png"
        alt=""
        />

        <span> ${token.address.slice(0. 15)}... </span>
        <span> ${token.symbol}</span>
        </div>
        )
       );

        tokenRender.innerHTML = elements;
    }).catch((error) => {
    console.log(error);
    });
    fetch("https://localhost:3000/api.v1/account/allaccount").then((Response)=> Response.json()).then((data)=> {
        let accounts = "";

        data.data.accounts.map((account, i) =>
        
        account +=
        <div class="lists">
        <p> ${i +1}</p>
        <p class="accountsValue" data-address=${account.address} 
        } data-privatekey=${account.privatekey}> ${account.address.slice(
            0,
            25
        )}...</p>
        </div>

        accountRender.innerHTML = accounts;
    })
    .catch((error) => {
        console.log(error);

        console.log(privatekey);
    });
}

    

        
    )
    })

}

    )
    })



}

function copyAddress(){
    navigator.clipboard.writeText(address);
}

function changeAccount(){
    const data = document.querySelector(".accountValue");
    const address = data.getAttribute("data-address");
    const privatekey = data.getAttribute("data-privatekey";

    console.log(privatekey, address);

    const userWallet = {
        address: address,
        private_key: privatekey,
        mnemonic: "changed",
    };

    const jsonObj = JSON.stringify(userWallet);
    localStorage.setItem("userWallet", jsonObj);

    window.location.reload();

window.onload = myFunction;
