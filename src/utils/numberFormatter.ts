export const nFormatter = (num : any , digits : any) =>{
    const lookup : any = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx : any = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item:any = lookup.slice().reverse().find(function(item:any) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}


