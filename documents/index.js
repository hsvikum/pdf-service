module.exports = ({ depositor, depositAmount, price2, receiptId }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
    <head>
        <style>
            .header-left { grid-area: leftheader; background-color: azure;}
            .header {  background-color: white; vertical-align: bottom;text-align: center;}
            .banner { grid-area: banner; text-align: center; background-color: #4c4f9e; color: azure; font-size: 2em;}
            .form { 
            grid-area: form; 
            background-color: white; 
            font-size: 10px;
            align-content: center;
            margin-left: 30px;
            margin-right: auto;
            margin-top:30px;
            font-size: 10px;
            }

            .container {
                display: grid;
                grid-template-areas:
                    'header'
                    'banner'
                    'form';
                grid-gap: 20px;
                background-color: white;
                padding: 10px;
            }
            input{
                border: 0;
                border-bottom: 1px solid black;
                border-style: dotted;
                background: none;
                margin-top: 25px;
            }
            body {
                height: 842px;
                width: 595px;
                /* to centre page on screen*/
                margin-left: auto;
                margin-right: auto;
            }
        </style>

    </head>
    <page size='A4'>

    <body class="body">
        <div class="container">
            <div class="header">
                <label>1981 අoක 15 දරන ජනාධිපතිවරයා තෝරා පත්කර ගැනීම පිළිබද පනත </label> <br>
                <label>Presidential Elections Act,No. 15 of 1981</label> <br>
                <label>ඇප මුදල් කුවිතාන්සිය / Deposit Receipt</label>
            </div>
            <!-- <div class="banner">
                RENT PAYMENT RECEIPT
            </div> -->
            <div class="form">
                     <div style="width: 100%;margin-bottom: 20px">
                        <label style="margin-left: 5%;">1981 අoක 15 දරන ජනාධිපතිවරයා තෝරා පත්කර ගැනීම පිළිබද පනතේ 8 වන වගන්තිය යටතේ ඇප මුදල් වශයෙන් වලංගු මුදලෙන් රුපියල් </label>
                         &nbsp;<input type="text" value='${depositAmount}' style="width:87%;margin-top:5px;text-align:center"> <label">මුදලක්</label><br>
                        <input type="text" style="width:94%;margin-top:5px;"> <label>පදිංචි</label>  <br>
                        <input type="text" value='${depositor}' style="width:74%;margin-top:5px;text-align:center"> <label>මහතා / මහත්මිය / මෙනවිය ගෙන්  </label>  
                        <input type="text" style="width:77%;margin-top:5px;"> <label>විසින් නාම යෝජනා කරන ලද </label>  <br>
                        <label style="margin-left: 30%">(පිළිගත් දේශපාලන පක්ෂය / පක්ෂය / චන්ද හිමියා)</label><br>
                        <input type="text" style="width:78%;margin-top:5px;"> <label>වෙනුවෙන් භාර ගන්නා ලදී. </label>  <br>
                        <label style="margin-left: 36%;">(අපේක්ෂකයාගේ නම)</label><br>
                        <label >ඇප මුදල් තැන්පත් කල දිනය :</label><input type="text" style="width:40%;margin-top:8px;"><br>
                        <label >ඇප මුදල් තැන්පත් කල වෙලාව :</label><input type="text" style="width:40%;margin-top:8px;"><br>
                        <label >ඇප මුදල් ප්‍රමාණය රු. :</label><input value='${depositAmount}' type="text" style="width:45%;margin-top:8px;text-align:center"><br>
                        <input type="text" style="width:30%;margin-left: 67%;margin-top:8px;"><br>
                        <label style="margin-left: 74%">බලය පවරන ලද නිලධාරී</label>
                        <label style="margin-left: 68%">(මැතිවරණ කොමිෂන් සභාව වෙනුවට)</label>
                        <input type="text" value=${`${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`} style="width:20%;margin-top:5px;text-align:center"><label>වැනි දින,</label><br>
                        <label>කොළඹ දීය</label>
                    </div>
                    <div  style="width: 100%;font-size: 12px;">
                        <label style="margin-left: 5%;">Recevied from Mr./Mrs./Miss</label>
                         &nbsp;&nbsp;<input value='${depositor}' type="text" style="width:62%;margin-top:5px;text-align:center"> <br>
                        <label>of (address)</label>&nbsp;<input type="text" style="width:79%;margin-top:5px;">&nbsp;<label>on behalf</label> <br>
                        <label>of candidate (name)</label>&nbsp;<input type="text" style="width:68%;margin-top:5px;">&nbsp;<label>nominated by</label> <br>
                        <label>(name of Recognised Political Party/Party/Elector)</label>&nbsp;<input type="text" value='${depositAmount}' style="width:45%;margin-top:5px;text-align:center">&nbsp;<label>a sum of</label> <br>
                        <label>Rupees</label>&nbsp;<input type="text" style="width:35%;margin-top:5px;margin-bottom:5px;">&nbsp;<label>in legal tender being deposit under Section 8 of the Presidential</label> <br>
                        <label >Elections Act, No. 15 of 1981.</label><br>
                        <label >Date of Deposit :</label><input value=${`${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`} type="text" style="width:47%;margin-top:8px;text-align:center"><br>
                        <label >Time of Deposit :</label><input type="text" style="width:47%;margin-top:8px;"><br>
                        <label >Amount of Deposit Rs. :</label><input type="text" value='${depositAmount}' style="width:45%;margin-top:8px;text-align:center"><br>
                        <label>Colombo,</label><br>
                        <input type="text" style="width:30%;margin-left: 67%"><br>
                        <label style="margin-left: 76%">Authorized Officer</label>
                        <label style="margin-left: 71%">(For Eleection Commission)</label>
                        <input type="text" style="width:20%"><br>
                    </div>
                     
            </div>
        </div>
    </body>
</html>
    `;
};