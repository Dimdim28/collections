let activeUsers = [
    {name: "Сергей"},
    {name: "Валера"},
    {name: "Маркус"}
  ];
  
  // вспомогательная информация о них,
  // которая напрямую не входит в объект юзера,
  // и потому хранится отдельно
  let weakMap = new WeakMap();
  
  weakMap.set(activeUsers[0], 1);
  weakMap.set(activeUsers[1], 2);
  weakMap.set(activeUsers[2], 3);
  console.log(weakMap);
 // weakMap.set('Katya', 4);    error

 activeUsers[3] = {name: 'Katya'};
 weakMap.set(activeUsers[3], 4);

 console.log(weakMap.get(activeUsers[3]));
 console.log(weakMap.has(activeUsers[0]));

  
  console.log( weakMap.get(activeUsers[0]) ); // 1
  
  activeUsers.splice(0, 1); 
  console.log(weakMap);
  activeUsers.splice(0, 1); 
  console.log(weakMap);

  
