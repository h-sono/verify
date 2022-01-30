// 配列関連の動作確認用
// カレントディレクトリにて$ node ファイル名　で実行
const verifyItemsInSelFlg = [
    {
      id: '1',
      value: 'value1',
      selectedFlg: false
    },
    {
      id: '2',
      value: 'value2',
      selectedFlg: false
    },
    {
      id: '3',
      value: 'value3(selected対象)',
      selectedFlg: true
    },
    {
      id: '4',
      value: 'value4',
      selectedFlg: false
    }
  ];

const found = verifyItemsInSelFlg.find(element => element.selectedFlg = true);
console.log(found);
console.log(found.value);

let selectedVal = '';
verifyItemsInSelFlg.map((item) =>{
  if (item.selectedFlg) {
    selectedVal = item.value;
  };
});
console.log(selectedVal);
