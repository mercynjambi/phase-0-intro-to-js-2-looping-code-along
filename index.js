function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }
  
  
  const messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(messages);
  

  function countDown(number){
    while (number >=0){
        console.log(number);
        number--;
    }
      }
countDown(10);
