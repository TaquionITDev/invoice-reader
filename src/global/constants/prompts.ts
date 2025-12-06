export const PROMPTS = {
    EXTRACT_INVOICE_DATA: `
    replace all the values in the followin  JSON template withe the correct values extracted from the invoice PDF provided.
    {
  "header": {
    "invoiceNumber": "A00001-00000999",
    "invoiceLetter": "X",
    "invoiceDate": "06/12/2025",
    "customerName": "Example Work Coop",
    "customerID": "C99999",
    "address": "Main Street 123",
    "zipCode": "9999",
    "city": "Example City",
    "province": "Example Province",
    "taxStatus": "Tax Registered",
    "taxIDNumber": "30-99999999-9",
    "paymentTerms": "CASH"
  },
  "lineItems": [
    {
      "quantity": 1,
      "code": "codex1",
      "description": "Example Item 1: High Definition Printer",
      "vatPercentage": 10.50,
      "unitPrice": 199.99,
      "lineTotal": 199.99
    },
    {
      "quantity": 5,
      "code": "codex2",
      "description": "Example Item 2: Desktop Barcode Reader",
      "vatPercentage": 10.50,
      "unitPrice": 75.50,
      "lineTotal": 377.50
    }
  ],
  "footer": {
    "exchangeRate": 1500.0000,
    "cae": "99999999999999",
    "caeExpirationDate": "16/12/2025",
    "arsTotals": {
      "subtotal": 500.00,
      "iIBBTaxTotal": 16.38,
      "1005taxtTotal": 51.98,
      "21taxtTotal": 0.00,
      "total": 677.49
    },
    "dolarsTotals": {
      "subtotal": 500.00,
      "iIBBTaxTotal": 16.38,
      "1005taxtTotal": 51.98,
      "21taxtTotal": 0.00,
      "total": 677.49
    }
  }
}`
};