module.exports = (data) => {
    let {
        referenceNumber,
        date,
        categoryCode,
        categoryNameSn,
        categoryNameTm,
        categoryNameEn,
        institutionName
    } = data;

    return `<!DOCTYPE html>
        <html>
            <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
        
            <style>
                @page {
                    size: 'auto';
                }
            
                body {
                    font-family: serif;
                }
            
                ul {
                    list-style-type: none;
                    margin: 0px;
                    padding: 0px;
            
                }
            
                li {
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
            
                h2 {
                    margin: 0px;
                }
            
                .list-item {
                    min-width: 150px;
                    display: inline-block;
                }
            
                .container {
                    padding: 10px;
                    margin: auto;
                    width: 700px;
                }
            
                .document-border {
                    padding: 20px;
                    padding-left: 50px;
                }
            
                .text-center {
                    text-align: center;
                }
            
                .heading {
                    border: 1px solid black;
                    padding: 10px;
                    padding-left: 30px;
                }
            
                .content {
                    padding: 10px;
                    padding-left: 30px;
                    border: 1px solid black;
                    border-top: 0px;
                }
            
                .bold {
                    font-weight: bold;
                }
            </style>
        
            <body>
                <div class="container">
                    <div class="text-center heading bold">
                        <h2>Inquiry #${referenceNumber}</h2>
                    </div>
                    <div class="content">
                        <ul>
                            <li>
                                <span class="bold list-item">Date</span>
                                <span>: ${date}</span>
                            </li>
                            <li>
                                <span class="bold list-item">Category Code</span>
                                <span>: ${categoryCode}</span>
                            </li>
                            <li>
                                <span class="bold list-item">Category Name</span>
                                <span>: ${categoryNameEn}</span>
                                <span>| ${categoryNameSn}</span>
                                <span>| ${categoryNameTm}</span>
                            </li>
                            <li>
                                <span class="bold list-item">Institution Name</span>
                                <span>: ${institutionName}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </body>
        </html>`;
};
