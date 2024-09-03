export const idlFactory = ({ IDL }) => {
  const TaxpayerRecord = IDL.Record({
    'tid' : IDL.Text,
    'address' : IDL.Text,
    'lastName' : IDL.Text,
    'firstName' : IDL.Text,
  });
  return IDL.Service({
    'addTaxpayer' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [TaxpayerRecord],
        [],
      ),
    'deleteTaxpayer' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'getTaxpayer' : IDL.Func([IDL.Text], [IDL.Opt(TaxpayerRecord)], ['query']),
    'updateTaxpayer' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Bool],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
