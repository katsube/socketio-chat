const MEMBER = {
  "socket.id1": {token:"abcd", name:"foo", count:1},
  "socket.id2": {token:"efgh", name:"bar", count:2}
};


function getMemberList(){
  const list = [];
  for( let key in MEMBER ){
    const cur = MEMBER[key];
    list.push({token:cur.count, name:cur.name});
  }
  return(list);
}

console.log(
  getMemberList()
);