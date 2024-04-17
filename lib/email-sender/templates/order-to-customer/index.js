const customerInvoiceEmailBody = (option) => {
  return `<html
  xmlns='http://www.w3.org/1999/xhtml'
  xmlns:v='urn:schemas-microsoft-com:vml'
  xmlns:o='urn:schemas-microsoft-com:office:office'
>

  <head>
    <title>Kachabazar</title>
    <!--[if !mso]><!-->
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <!--<![endif]-->
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <style type='text/css'>
      #outlook a { padding: 0; } body { margin: 0; padding: 0;
      -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } table, td {
      border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { border: 0; height: auto; line-height: 100%; outline: none;
      text-decoration: none; -ms-interpolation-mode: bicubic; } p { display:
      block; margin: 13px 0; } #common_table{ border: 1px solid lightgrey;
      border-collapse: collapse; }

    </style>

    <style type='text/css'>
      @media only screen and (min-width:480px) { .mj-column-per-100 { width:
      100% !important; max-width: 100%; } .mj-column-per-50 { width: 50%
      !important; max-width: 50%; } }

    </style>
    <style media='screen and (min-width:480px)'>
      .moz-text-html .mj-column-per-100 { width: 100% !important; max-width:
      100%; } .moz-text-html .mj-column-per-50 { width: 50% !important;
      max-width: 50%; }

    </style>
    <style type='text/css'>
      @media only screen and (max-width:480px) { table.mj-full-width-mobile {
      width: 100% !important; } td.mj-full-width-mobile { width: auto
      !important; } }

    </style>
  </head>

  <body style='word-spacing:normal;background-color:#f2f3f8;'>
    <div style='background-color:#f2f3f8; padding-bottom:100px;'>
      <table
        align='center'
        border='0'
        cellpadding='0'
        cellspacing='0'
        role='presentation'
        style='background-color:#f2f3f8;'
      >
        <tbody>
          <tr>
            <td>

              <div style='margin:30px auto;max-width:600px; height:80px'>
                <table
                  align='center'
                  border='0'
                  cellpadding='0'
                  cellspacing='0'
                  role='presentation'
                  style='width:100%;'
                >
                  <tbody>
                    <tr>
                      <td
                        style='direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;text-align:center;'
                      >

                        <div
                          class='mj-column-per-100 mj-outlook-group-fix'
                          style='font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'
                        >
                          <table
                            border='0'
                            cellpadding='0'
                            cellspacing='0'
                            role='presentation'
                            style='vertical-align:top;'
                            width='100%'
                          >
                            <tbody>
                              <tr>
                                <td
                                  align='center'
                                  style='font-size:0px;padding:10px 25px;word-break:break-word;'
                                >
                                  <table
                                    border='0'
                                    cellpadding='0'
                                    cellspacing='0'
                                    role='presentation'
                                    style='border-collapse:collapse;border-spacing:0px;'
                                  >
                                    <tbody>
                                      <tr>
                                        <td style='width:150px;'>
                                          <!-- replace image cdn -->
                                          <img
                                            alt
                                            height='auto'
                                            src='https://res.cloudinary.com/ahossain/image/upload/v1676296566/Kachabazar%20files/cc_v8jite.png'
                                            style='border:0;display:block;outline:none;text-decoration:none;height:auto;width:80px;font-size:13px;padding-bottom:30px;'
                                            width='80'
                                            height='80'
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!--[if mso | IE]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!--[if mso | IE]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>

      <div
        style='background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;'
      >
        <table
          align='center'
          border='0'
          cellpadding='0'
          cellspacing='0'
          role='presentation'
          style='background:#ffffff;background-color:#ffffff;width:100%;'
        >
          <tbody>
            <tr>
              <td
                style='direction:ltr;font-size:0px;padding:0 0 20px;padding-left:15px;padding-right:15px;text-align:center;padding-top: 20px;'
              >

                <div
                  class='mj-column-per-100 mj-outlook-group-fix'
                  style='font-size:15px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;background:#ffffff;background-color:#ffffff'
                >
                  <!--start email_template -->
                  <table class='common_table' style='width: 100%;'>
                    <thead>
                      <tr>

                        <th
                          style='padding: 2px 4px; font-size:25px;text-transform: uppercase'
                        >Invoice</th>

                      </tr>
                    </thead>
                    <tbody>

                      <tr>

                        <td
                          style='padding:0px; margin:0px; font-size:12px'
                        >
                         <p>
                         Status : ${option.status}
                         </p>
                         <p>
                         VAT Number : ${option.vat_number}</p>
                        </td>

                        <td
                          style='padding: 2px 4px;text-align:end;font-size:12px;'
                        >

                          <p style='margin:0px; font-size:14; text-transform: uppercase'>${
                            option.company_name || ""
                          }</p>
                    
                          <p style='margin:0px;'>${
                            option.company_address || ""
                          }</p>
                          <p style='margin:0px;'>
                     
                          ${option.company_phone || ""}</p>
                          <p style='margin:0px;'> ${
                            option.company_email || ""
                          }</p>
                          <p style='margin:0px;'> ${
                            option.company_website || ""
                          }</p>
                        </td>

                      </tr>

                    </tbody>
                  </table>
                  <!--end email_template -->
                </div>

              </td>
            </tr>
          </tbody>
        </table>

      </div>

      <div
        style='background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;'
      >
        <table
          align='center'
          border='0'
          cellpadding='0'
          cellspacing='0'
          role='presentation'
          style='background:#ffffff;background-color:#ffffff;width:100%;'
        >
          <tbody>
            <tr>
              <td
                style='direction:ltr;font-size:0px;padding:0 0 20px;padding-left:15px;padding-right:15px;text-align:center;padding-top: 20px;'
              >

                <div
                  class='mj-column-per-100 mj-outlook-group-fix'
                  style='font-size:15px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;background:#ffffff;background-color:#ffffff'
                >
                  <!--start email_template -->
                  <table class='common_table' style='width: 100%;'>
                    <thead>
                      <tr>

                        <th style='padding: 2px 4px;font-size:13px; text-transform: uppercase'>Date</th>
                        <th style='padding: 2px 4px;font-size:13px; text-transform: uppercase'>Invoice</th>
                        <th style='padding: 2px 4px;font-size:13px; text-transform: uppercase'>Method</th>

                        <th style='padding: 2px 4px; text-align:end;font-size:13px; text-transform: uppercase'>Invoice To</th>

                      </tr>
                    </thead>
                    <tbody>

                      <tr>

                        <td
                          style='padding: 2px 4px;text-align:justify; font-size:12px'
                        >
                          ${option.date}
                        </td>
                        <td
                          style='padding: 2px 4px;text-align:justify;font-size:12px'
                        >
                          #${option.invoice}
                        </td>

                        <td
                          style='padding: 2px 4px;text-align:justify;font-size:12px;font-weight : bold'
                        >
                          ${option.method}
                        </td>

                        <td
                          style='padding: 2px 4px;text-align:end;font-size:12px;'
                        >
                          ${option.name || ""}
                          <p style='margin:0px;'>${option.email || ""}</p>
                          <p style='margin:0px;'> ${option.phone || ""}</p>
                          ${option.address || ""}
                        </td>

                      </tr>

                    </tbody>
                  </table>
                  <!--end email_template -->
                </div>

              </td>
            </tr>
          </tbody>
        </table>

      </div>

      <div
        class='body-section'
        style='margin: 0px auto; max-width: 600px; border border-radius:4px'
      >
        <table
          align='center'
          cellpadding='0'
          cellspacing='0'
          role='presentation'
          style='width:100%;'
        >
          <tbody>
            <tr>
              <td
                style='direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;'
              >

                <div
                  style='background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;'
                >
                  <table
                    align='center'
                    border='0'
                    cellpadding='0'
                    cellspacing='0'
                    role='presentation'
                    style='background:#ffffff;background-color:#ffffff;width:100%;'
                  >
                    <tbody>
                      <tr>
                        <td
                          style='direction:ltr;font-size:0px;padding:0 0 20px;padding-left:15px;padding-right:15px;text-align:center;padding-top: 20px;'
                        >

                          <div
                            class='mj-column-per-100 mj-outlook-group-fix'
                            style='font-size:15px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;background:#ffffff;background-color:#ffffff'
                          >
                            <!--start email_template -->
                            <table class='common_table' style='width: 100%;'>
                              <thead>
                                <tr>

                                  <th
                                    id='common_table'
                                    style='padding: 2px 4px;font-size:13px; text-transform: uppercase'
                                  >Name</th>
                                  <th
                                    id='common_table'
                                    style='padding: 2px 4px;font-size:13px; text-transform: uppercase'
                                  >Quantity</th>
                                  <th
                                    id='common_table'
                                    style='padding: 2px 4px; text-align:end;font-size:13px; text-transform: uppercase'
                                  >Price</th>
                                  <th
                                    id='common_table'
                                    style='padding: 2px 4px; text-align:end;font-size:13px; text-transform: uppercase'
                                  >Total Price</th>

                                </tr>
                              </thead>
                              <tbody>

                                ${option.cart
                                  .map((item) => {
                                    return `
                                <tr>

                                  <td
                                    id='common_table'
                                    style='padding: 2px 4px;'
                                  >
                                    ${item.title.substring(0, 15)}
                                  </td>
                                  <td
                                    id='common_table'
                                    style='padding: 2px 4px;'
                                  >
                                    ${item.quantity}
                                  </td>
                                  <td
                                    id='common_table'
                                    style='padding: 2px 4px;text-align:end'
                                  >
                                    ${option.currency}${item.price}
                                  </td>
                                  <td
                                    id='common_table'
                                    style='padding: 2px 4px; text-align:end'
                                  >
                                    ${option.currency}${(
                                      item.price * item.quantity
                                    ).toFixed(2)}
                                  </td>

                                </tr>`;
                                  })
                                  .join("")}

                              </tbody>
                            </table>

                            <!--end email_template -->
                          </div>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->

      <div
        style='background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;'
      >
        <table
          align='center'
          border='0'
          cellpadding='0'
          cellspacing='0'
          role='presentation'
          style='background:#ffffff;background-color:#ffffff;width:100%;'
        >
          <tbody>
            <tr>
              <td
                style='direction:ltr;font-size:0px;padding:0 0 20px;padding-left:15px;padding-right:15px;text-align:center;padding-top: 20px;'
              >

                <div
                  class='mj-column-per-100 mj-outlook-group-fix'
                  style='margin-left:15px; font-size:15px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;background:#ffffff;background-color:#ffffff'
                >
                  <!--start email_template -->
                  <table class='common_table' style='width: 100%;'>
                    <thead>
                      <tr>

                        <th style='padding: 2px 4px;text-transform: uppercase; font-size:13px;'>SubTotal</th>
                        <th style='padding: 2px 4px;text-transform: uppercase; font-size:13px;'>VAT</th>
                        <th style='padding: 2px 4px;text-transform: uppercase; font-size:13px;'>Shipping Cost</th>
                        <th style='padding: 2px 4px;text-transform: uppercase; font-size:13px;'>Discount</th>
                        <th style='padding: 2px 4px;text-transform: uppercase; font-size:13px;'>Total</th>

                      </tr>
                    </thead>
                    <tbody>

                      <tr>

                        <td style='padding: 2px 4px;text-align:justify; font-size:13px;'>
                          ${option.currency}${option.subTotal.toFixed(2)}
                        </td>
                        <td style='padding: 2px 4px;text-align:justify; font-size:13px;'>
                          ${option.currency}${option.vat.toFixed(2)}
                        </td>
                        <td style='padding: 2px 4px;text-align:justify; font-size:13px;'>
                        ${option.currency}${option.shipping.toFixed(2)}
                      </td>
                        <td style='padding: 2px 4px;text-align:justify; font-size:13px;'>
                          ${option.currency}${option.discount.toFixed(2)}
                        </td>
                        <td style='padding: 2px 4px;text-align:justify;color:red ; font-size:13px;'>
                          ${option.currency}${option.total.toFixed(2)}
                        </td>

                      </tr>

                    </tbody>
                  </table>
                  <!--end email_template -->
                </div>

              </td>
            </tr>
          </tbody>
        </table>

        <table
          align='center'
          border='0'
          cellpadding='0'
          cellspacing='0'
          role='presentation'
          style='width:100%; margin-bottom:20px;'
        >
          <tbody>
            <tr>
              <td>

                <div style='margin:25px auto;max-width:600px;'>
                  <table
                    align='center'
                    border='0'
                    cellpadding='0'
                    cellspacing='0'
                    role='presentation'
                    style='width:100%;'
                  >
                    <tbody>
                      <tr>
                        <td
                          style='direction:ltr;font-size:0px;margin-top:40px 0;text-align:center; border-top: 1px solid lightgray;'
                        >

                          <div style='margin:0px auto;max-width:600px;'>
                            <table
                              align='center'
                              border='0'
                              cellpadding='0'
                              cellspacing='0'
                              role='presentation'
                              style='width:100%;'
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;'
                                  >
                                    <div
                                      class='mj-column-per-100 mj-outlook-group-fix'
                                      style='font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;'
                                    >
                                      <table
                                        border='0'
                                        cellpadding='0'
                                        cellspacing='0'
                                        role='presentation'
                                        width='100%'
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              style='vertical-align:top;padding:0;'
                                            >
                                              <table
                                                border='0'
                                                cellpadding='0'
                                                cellspacing='0'
                                                role='presentation'
                                                style
                                                width='100%'
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      align='center'
                                                      style='font-size:0px;padding:0px 25px;word-break:break-word;'
                                                    >
                                                      <div
                                                        style="padding-top:10px; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;line-height:16px;text-align:center;color:#8a8a8a;"
                                                      >
                                                        You are receiving this
                                                        email because you
                                                        registered with
                                                        Kachabazar and agreed
                                                        to receive emails from
                                                        us regarding new
                                                        features, events and
                                                        special offers.
                                                        <p
                                                          style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:11px;font-weight:400;line-height:16px;text-align:center;color:#303030;"
                                                        >
                                                          &copy; Kachabazar,
                                                          All Rights Reserved.</p></div>
                                                    </td>
                                                  </tr>

                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <!--[if mso | IE]></td></tr></table><![endif]-->
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>

</html>`;
};

module.exports = customerInvoiceEmailBody;
