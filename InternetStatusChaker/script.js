

window.addEventListener("load", checkInternetConnection);

function checkInternetConnection(){

    const statusText = document.getElementById('statusText');
    const IPAddressText = document.getElementById('IPAddressText');
    const NetworkStrengthText = document.getElementById('NetworkStrengthText');

    statusText.textContent = 'Checking....';

    if (navigator.onLine){
        fetch('https://api.ipify.org?format=json')
        .then((response)=> response.json())
        .then((data)=>{

            IPAddressText.textContent = data.IP;
            statusText.textContent = 'connected'

            const connection = navigator.connection;

            const NetworkStrength = connection ?connection.downlink
            +'Mbps' : 'Unknow';
            NetworkStrengthText.textContent = NetworkStrength;
            



        })
        .catch((data)=>{
            statusText.textContent = 'Dissconnected';
            IPAddressText.textContent = '-'
            NetworkStrengthText.textContent = '-'
        })
    }else{
        statusText.textContent = 'Disconnected';
        IPAddressText.textContent = '-' 
        NetworkStrengthText.textContent = '-' 

    }
}